// ─────────────────────────────────────────────────────────────────
// DoctorSite Google Sheets Webhook
// Paste this in Extensions → Apps Script → Save → Deploy → Web App
// Set: Execute as = Me, Who has access = Anyone
// ─────────────────────────────────────────────────────────────────

const SHEET_ID = '1az6-wccBgQkqJgvLmquF06x26Paq85HuI9fJ2EjaHCs';
const DRIVE_FOLDER_NAME = 'DoctorSite Payment Proofs';

function doPost(e) {
  try {
    let data;
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else {
      data = {};
    }

    const ss = SpreadsheetApp.openById(SHEET_ID);
    const type = data.type;

    if (type === 'checkout')      writeCheckout(ss, data);
    else if (type === 'payment')  writePayment(ss, data);
    else if (type === 'proof')    writeProof(ss, data);
    else if (type === 'consultation') writeConsultation(ss, data);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'DoctorSite Webhook Active' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getOrCreateSheet(ss, name, headers) {
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.appendRow(headers);
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#1a73e8');
    headerRange.setFontColor('#FFFFFF');
    sheet.setFrozenRows(1);
    for (let i = 1; i <= headers.length; i++) {
      sheet.setColumnWidth(i, 160);
    }
  }
  return sheet;
}

// Save base64 image to Google Drive and return shareable link
function saveImageToDrive(base64Data, fileName) {
  try {
    if (!base64Data || typeof base64Data !== 'string') {
      return 'No image provided';
    }

    // Strip data URL prefix if present (e.g. "data:image/png;base64,")
    const base64 = base64Data.replace(/^data:image\/\w+;base64,/, '');
    if (!base64) return 'Empty image data';

    const blob = Utilities.newBlob(Utilities.base64Decode(base64), 'image/jpeg', fileName);

    // Get or create folder
    let folder;
    const folders = DriveApp.getFoldersByName(DRIVE_FOLDER_NAME);
    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder(DRIVE_FOLDER_NAME);
    }

    const file = folder.createFile(blob);
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    return file.getUrl();
  } catch (err) {
    Logger.log('Image save error: ' + err.message);
    return 'Image upload failed: ' + err.message;
  }
}

function writeConsultation(ss, data) {
  const sheet = getOrCreateSheet(ss, '📋 Consultations', [
    'Timestamp', 'Name', 'Phone', 'Email', 'Clinic Name', 'Message'
  ]);
  sheet.appendRow([
    new Date().toLocaleString('en-IN'),
    data.name || '',
    data.phone || '',
    data.email || '',
    data.clinicName || '',
    data.message || '',
  ]);
}

function writeCheckout(ss, data) {
  const sheet = getOrCreateSheet(ss, '🛒 Checkout Orders', [
    'Timestamp', 'Name', 'Phone', 'Email', 'Clinic Name',
    'Plan', 'Add-ons', 'Coupon', 'Discount', 'Total Price', 'Payment Amount'
  ]);
  sheet.appendRow([
    new Date().toLocaleString('en-IN'),
    data.name || '',
    data.phone || '',
    data.email || '',
    data.clinicName || '',
    data.plan || '',
    data.addOns || 'None',
    data.coupon || 'None',
    data.discount ? '$' + data.discount : '$0',
    data.totalPrice ? '$' + data.totalPrice : '',
    data.paymentAmount ? '$' + data.paymentAmount : '',
  ]);
}

function writePayment(ss, data) {
  const sheet = getOrCreateSheet(ss, '💳 Payment Submissions', [
    'Timestamp', 'Name', 'Email', 'Plan', 'Total Price', 'Amount Paid', 'Remaining'
  ]);
  sheet.appendRow([
    new Date().toLocaleString('en-IN'),
    data.name || '',
    data.email || '',
    data.plan || '',
    data.totalPrice ? '$' + data.totalPrice : '',
    data.amountPaid ? '$' + data.amountPaid : '',
    data.remaining ? '$' + data.remaining : '',
  ]);
}

function writeProof(ss, data) {
  const sheet = getOrCreateSheet(ss, '✅ Payment Proofs', [
    'Timestamp', 'Name', 'Email', 'Plan', 'Amount', 'Transaction ID', 'Screenshot', 'Status'
  ]);

  // Upload screenshot to Drive if provided
  let screenshotLink = 'No image';
  if (data.screenshotBase64) {
    const fileName = 'proof_' + (data.transactionId || Date.now()) + '.jpg';
    screenshotLink = saveImageToDrive(data.screenshotBase64, fileName);
  }

  const row = sheet.appendRow([
    new Date().toLocaleString('en-IN'),
    data.name || '',
    data.email || '',
    data.plan || '',
    data.amount ? '$' + data.amount : '',
    data.transactionId || '',
    screenshotLink,
    'Pending Verification',
  ]);

  // Make screenshot cell a clickable hyperlink
  if (screenshotLink !== 'No image' && !screenshotLink.startsWith('Image upload')) {
    const lastRow = sheet.getLastRow();
    const screenshotCol = 7; // Column G
    sheet.getRange(lastRow, screenshotCol).setFormula(`=HYPERLINK("${screenshotLink}","View Screenshot")`);
  }
}

// Run this ONCE manually to authorize Drive access
// Select this function in dropdown → click Run → Allow permissions
function authorizeAndTest() {
  // This triggers the Drive permission prompt
  const folders = DriveApp.getFoldersByName('DoctorSite Payment Proofs');
  Logger.log('Drive access granted! Folders found: ' + folders.hasNext());
  
  // Also test sheet access
  const ss = SpreadsheetApp.openById(SHEET_ID);
  Logger.log('Sheet access granted: ' + ss.getName());
}

// Test function
function testWrite() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  writeConsultation(ss, {
    name: 'Test Doctor',
    phone: '+91 9999999999',
    email: 'test@test.com',
    clinicName: 'Test Clinic',
    message: 'Test message'
  });
  Logger.log('Test write successful');
}
