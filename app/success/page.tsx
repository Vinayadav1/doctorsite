'use client';

import * as React from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { logToSheets } from '@/lib/sheets';

const EMAILJS_SERVICE_ID  = 'service_5wkd6mg';
const EMAILJS_TEMPLATE_ID = 'template_p02q1hg';
const EMAILJS_PUBLIC_KEY  = 'ja_G9Ipwlp27pvPxE';
const OWNER_EMAIL = 'vinaysalempur45@gmail.com';

export default function SuccessPage() {
  return (
    <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>}>
      <SuccessContent />
    </React.Suspense>
  );
}

function SuccessContent() {
  const searchParams = useSearchParams();
  const amount       = searchParams.get('amount') || '0';
  const planId       = searchParams.get('plan')   || '';
  const urlEmail     = searchParams.get('email')  || '';
  const customerName = searchParams.get('name')   || '';

  const planNames: Record<string, string> = {
    starter: 'Starter', professional: 'Growth', growth: 'Elite',
  };
  const planName = planNames[planId] || planId || 'Website Plan';
  const formattedAmount = `₹${(parseInt(amount, 10) || 0).toLocaleString('en-IN')}`;

  const [transactionId, setTransactionId] = React.useState('');
  const [email, setEmail]                 = React.useState(urlEmail);
  const [fileName, setFileName]           = React.useState('');
  const [submitted, setSubmitted]         = React.useState(false);
  const [loading, setLoading]             = React.useState(false);
  const [emailSent, setEmailSent]         = React.useState(false);
  const [emailError, setEmailError]       = React.useState('');

  const [screenshotFile, setScreenshotFile] = React.useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFileName(e.target.files[0].name);
      setScreenshotFile(e.target.files[0]);
    }
  };

  // Convert file to base64
  const toBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) { setEmailError('Email is required'); return; }
    setLoading(true);
    setEmailError('');

    try {
      // Convert screenshot to base64 for Google Sheets upload
      let screenshotBase64 = '';
      if (screenshotFile) {
        screenshotBase64 = await toBase64(screenshotFile);
      }

      // Log payment proof to Google Sheets (with image) — await to ensure it completes
      await logToSheets({
        type: 'proof',
        name: customerName,
        email,
        plan: planName,
        amount,
        transactionId,
        screenshotBase64,
      });

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_name:        customerName || 'Valued Customer',
          to_email:       email,
          from_name:      customerName || 'Valued Customer',
          name:           customerName || 'Valued Customer',
          email:          email,
          plan:           planName,
          plan_name:      planName,
          amount:         formattedAmount,
          transactionId:   transactionId || 'N/A',
          transaction_id: transactionId || 'N/A',
          owner_email:    OWNER_EMAIL,
          reply_to:       email,
          message:        `Plan: ${planName}, Amount: ${formattedAmount}, Transaction ID: ${transactionId}`,
        },
        EMAILJS_PUBLIC_KEY
      );

      console.log('EmailJS success:', result.status, result.text);
      setEmailSent(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : JSON.stringify(err);
      console.error('EmailJS error:', msg);
      setEmailError(msg);
    }

    setLoading(false);
    setSubmitted(true);
  };

  /* ── SUCCESS SCREEN ── */
  if (submitted) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center pt-16 sm:pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl w-full mx-auto px-6"
        >
          <div className="bg-white rounded-2xl p-12 shadow-lg text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Received!</h1>
            <p className="text-lg text-gray-600 mb-4">
              Thank you. Our team will verify your transaction and contact you shortly.
            </p>

            {emailSent ? (
              <div className="bg-green-50 border border-green-200 rounded-lg px-6 py-4 mb-6">
                <p className="text-green-700 text-sm font-medium">
                  ✅ Confirmation email sent to <strong>{email}</strong>
                </p>
              </div>
            ) : emailError ? (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg px-6 py-4 mb-6">
                <p className="text-yellow-800 text-sm font-medium mb-1">⚠️ Email could not be sent automatically.</p>
                <p className="text-yellow-700 text-xs break-all">Error: {emailError}</p>
                <p className="text-yellow-700 text-sm mt-1">We'll contact you manually at <strong>{email}</strong>.</p>
              </div>
            ) : null}

            <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
              <h3 className="font-semibold text-gray-900 mb-3">What happens next?</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                {[
                  "We'll verify your payment within 24 hours",
                  "Our team will contact you via email/phone",
                  "We'll schedule your consultation call",
                  "Your project will begin immediately",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {step}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4 justify-center">
              <a href="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Back to Home
              </a>
              <a href="/contact" className="px-6 py-3 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>
      </main>
    );
  }

  /* ── FORM SCREEN ── */
  return (
    <main className="min-h-screen bg-gray-50 pt-16 sm:pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Submit Payment Proof</h1>
            <p className="text-gray-600">Upload your payment screenshot and transaction details</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md">
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Amount Paid</div>
                  <div className="text-2xl font-bold text-blue-600">{formattedAmount}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600 mb-1">Plan</div>
                  <div className="text-lg font-semibold text-gray-900">{planName}</div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email * <span className="text-gray-500 font-normal">(confirmation will be sent here)</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setEmailError(''); }}
                  placeholder="you@example.com"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent ${emailError ? 'border-red-500' : 'border-gray-300'}`}
                />
                {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
              </div>

              {/* Transaction ID */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Transaction ID / UTR Number *
                </label>
                <input
                  type="text"
                  required
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Enter 12-digit transaction ID"
                />
                <p className="text-sm text-gray-500 mt-1">Find this in your UPI app payment history</p>
              </div>

              {/* Screenshot Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Payment Screenshot *</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-600 transition-colors">
                  <input type="file" id="screenshot" accept="image/*" required onChange={handleFileChange} className="hidden" />
                  <label htmlFor="screenshot" className="cursor-pointer">
                    <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    {fileName ? (
                      <p className="text-blue-600 font-semibold">{fileName}</p>
                    ) : (
                      <>
                        <p className="text-gray-700 font-semibold mb-1">Click to upload screenshot</p>
                        <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
                      </>
                    )}
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? 'Submitting & Sending Email...' : 'Submit Payment Proof'}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
