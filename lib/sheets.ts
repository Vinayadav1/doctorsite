const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwJ-GIUCcn2wXBQ8KJKaIhUgbSdf0zqWqPyO_eY0u4iskfBAZD0uezqHSGl1YRfxc8_HA/exec';

export async function logToSheets(data: Record<string, unknown>): Promise<void> {
  try {
    if (data.type === 'proof' && data.screenshotBase64) {
      // Large payload with image — use server-side API route (no CORS/size limits)
      const res = await fetch('/api/sheets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      console.log('Sheets proof result:', result);
    } else {
      // Small payload — send directly to Apps Script
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(data),
      });
      console.log('Logged to sheets:', data.type);
    }
  } catch (err) {
    console.error('Failed to log to sheets:', err);
  }
}
