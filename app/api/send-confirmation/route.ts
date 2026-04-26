import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const OWNER_EMAIL = 'vinaysalempur45@gmail.com';
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { customerEmail, customerName, planName, amount, transactionId } = body;

    if (!customerEmail) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY not set in .env.local');
      return NextResponse.json({ error: 'Email not configured' }, { status: 500 });
    }

    const orderRows = `
      <tr>
        <td style="padding:8px 0;color:#6B7280;font-size:14px;">Plan</td>
        <td style="padding:8px 0;color:#111827;font-weight:600;text-align:right;">${planName}</td>
      </tr>
      <tr style="border-top:1px solid #F3F4F6;">
        <td style="padding:8px 0;color:#6B7280;font-size:14px;">Amount Paid</td>
        <td style="padding:8px 0;color:#3B82F6;font-weight:700;font-size:18px;text-align:right;">$${amount}</td>
      </tr>
      ${transactionId ? `
      <tr style="border-top:1px solid #F3F4F6;">
        <td style="padding:8px 0;color:#6B7280;font-size:14px;">Transaction ID</td>
        <td style="padding:8px 0;color:#111827;font-weight:600;text-align:right;font-family:monospace;">${transactionId}</td>
      </tr>` : ''}
    `;

    // 1. Confirmation email to customer
    // NOTE: On Resend free plan, emails can only be sent to your verified email.
    // Both emails go to owner. Once you add a domain on Resend, update 'to' to customerEmail.
    await resend.emails.send({
      from: 'DoctorSite <onboarding@resend.dev>',
      to: OWNER_EMAIL,  // free plan: must be your own email
      replyTo: customerEmail,
      subject: `✅ Payment Confirmed – DoctorSite ${planName} Plan`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;">
          <div style="background:#3B82F6;padding:30px;border-radius:12px 12px 0 0;text-align:center;">
            <h1 style="color:white;margin:0;font-size:28px;">Payment Confirmed! 🎉</h1>
            <p style="color:#BFDBFE;margin:8px 0 0;">Thank you for choosing DoctorSite</p>
          </div>
          <div style="background:#F9FAFB;padding:30px;border-radius:0 0 12px 12px;border:1px solid #E5E7EB;">
            <p style="color:#374151;font-size:16px;">Hi <strong>${customerName || 'there'}</strong>,</p>
            <p style="color:#6B7280;">We've received your payment. Our team will reach out within 24 hours to get started on your project.</p>
            <div style="background:white;border-radius:8px;padding:20px;margin:20px 0;border:1px solid #E5E7EB;">
              <h3 style="color:#111827;margin:0 0 16px;font-size:18px;">Order Details</h3>
              <table style="width:100%;border-collapse:collapse;">${orderRows}</table>
            </div>
            <div style="background:#EFF6FF;border-radius:8px;padding:20px;margin:20px 0;">
              <h3 style="color:#1D4ED8;margin:0 0 12px;font-size:16px;">What happens next?</h3>
              <ul style="color:#374151;font-size:14px;padding-left:20px;margin:0;line-height:1.8;">
                <li>Payment verified within 24 hours</li>
                <li>Our team contacts you via email/phone</li>
                <li>Consultation call scheduled</li>
                <li>Project begins immediately after</li>
              </ul>
            </div>
            <p style="color:#6B7280;font-size:14px;">
              Questions? Email us at <a href="mailto:${OWNER_EMAIL}" style="color:#3B82F6;">${OWNER_EMAIL}</a>
            </p>
            <div style="border-top:1px solid #E5E7EB;margin-top:24px;padding-top:16px;text-align:center;">
              <p style="color:#9CA3AF;font-size:12px;margin:0;">© 2024 DoctorSite. All rights reserved.</p>
            </div>
          </div>
        </div>
      `,
    });

    // 2. Notification to owner
    await resend.emails.send({
      from: 'DoctorSite <onboarding@resend.dev>',
      to: OWNER_EMAIL,
      subject: `💰 New Payment – ${planName} Plan ($${amount})`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;">
          <div style="background:#10B981;padding:24px;border-radius:12px 12px 0 0;text-align:center;">
            <h1 style="color:white;margin:0;font-size:24px;">New Payment Received!</h1>
          </div>
          <div style="background:#F9FAFB;padding:24px;border-radius:0 0 12px 12px;border:1px solid #E5E7EB;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:6px 0;color:#6B7280;">Name</td><td style="font-weight:600;text-align:right;">${customerName || 'N/A'}</td></tr>
              <tr style="border-top:1px solid #F3F4F6;"><td style="padding:6px 0;color:#6B7280;">Email</td><td style="font-weight:600;text-align:right;">${customerEmail}</td></tr>
              <tr style="border-top:1px solid #F3F4F6;"><td style="padding:6px 0;color:#6B7280;">Plan</td><td style="font-weight:600;text-align:right;">${planName}</td></tr>
              <tr style="border-top:1px solid #F3F4F6;"><td style="padding:6px 0;color:#6B7280;">Amount</td><td style="font-weight:700;color:#10B981;font-size:18px;text-align:right;">$${amount}</td></tr>
              ${transactionId ? `<tr style="border-top:1px solid #F3F4F6;"><td style="padding:6px 0;color:#6B7280;">Transaction ID</td><td style="font-weight:600;font-family:monospace;text-align:right;">${transactionId}</td></tr>` : ''}
            </table>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('Email send error:', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
