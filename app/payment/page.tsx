'use client';

import * as React from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { pricingPlans } from '@/lib/constants';
import { logToSheets } from '@/lib/sheets';

export default function PaymentPage() {
  return (
    <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>}>
      <PaymentContent />
    </React.Suspense>
  );
}

function PaymentContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const planId = searchParams.get('plan') || 'professional';
  const amount = searchParams.get('amount') || '';
  const customerName = searchParams.get('name') || '';
  const customerEmailParam = searchParams.get('email') || '';

  const selectedPlan = pricingPlans.find(p => p.id === planId) || pricingPlans[1];
  const finalAmount = amount || selectedPlan.price.toString();
  const finalAmountNumber = parseFloat(finalAmount) || selectedPlan.price;
  const formatAmount = (value: number) => `₹${Math.round(value).toLocaleString('en-IN')}`;

  const [copied, setCopied] = React.useState(false);
  const [email, setEmail] = React.useState(customerEmailParam);
  const [emailError, setEmailError] = React.useState('');

  const upiId = '8840734369@jupiteraxis';
  const upiLink = `upi://pay?pa=${upiId}&pn=DoctorSite&am=${Math.round(finalAmountNumber)}&cu=INR`;

  const copyUpiId = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePayNow = () => {
    window.location.href = upiLink;
  };

  const handlePaid = () => {
    if (!email) {
      setEmailError('Please enter your email to receive confirmation');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    setEmailError('');

    // Log payment submission to Google Sheets
    logToSheets({
      type: 'payment',
      name: customerName,
      email,
      plan: selectedPlan.name,
      totalPrice: searchParams.get('total') || finalAmount,
      amountPaid: finalAmount,
      remaining: Math.max(0, parseFloat(searchParams.get('total') || finalAmount) - parseFloat(finalAmount)),
    });

    router.push(`/success?plan=${planId}&amount=${finalAmount}&email=${encodeURIComponent(email)}&name=${encodeURIComponent(customerName)}`);
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-16 sm:pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2">Complete Payment</h1>
          <p className="text-gray-600 mb-6 sm:mb-8">Pay securely via UPI</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Summary */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <div>
                    <div className="font-semibold text-gray-900">{selectedPlan.name} Plan</div>
                    <div className="text-sm text-gray-600">{selectedPlan.description}</div>
                  </div>
                </div>

                {customerName && (
                  <div className="flex justify-between text-gray-700">
                    <span className="font-medium">Customer:</span>
                    <span>{customerName}</span>
                  </div>
                )}
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-semibold text-gray-900">Total Amount</span>
                  <span className="text-3xl font-bold text-blue-600">{formatAmount(finalAmountNumber)}</span>
                </div>
                <p className="text-sm text-gray-600">One-time payment</p>
              </div>

              {/* Email field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email <span className="text-red-500">*</span>
                  <span className="text-gray-500 font-normal ml-1">(for payment confirmation)</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setEmailError(''); }}
                  placeholder="you@example.com"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
                    emailError ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
                <p className="text-xs text-gray-500 mt-1">We'll send a confirmation email after payment</p>
              </div>
            </div>

            {/* Payment Section */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Method</h2>

              {/* UPI ID */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">UPI ID</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={upiId}
                    readOnly
                    className="flex-1 px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-900 font-mono"
                  />
                  <button
                    onClick={copyUpiId}
                    className="px-4 py-3 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
                    title="Copy UPI ID"
                  >
                    {copied ? (
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* QR Code */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Scan QR Code to Pay</label>
                <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-center border border-gray-200">
                  <div className="text-center">
                    <div className="relative w-52 h-52 mx-auto mb-3">
                      <Image
                        src="/payment/PaymentQr.jpeg"
                        alt="Payment QR Code"
                        fill
                        className="object-contain rounded-lg"
                      />
                    </div>
                    <p className="text-sm text-gray-600 font-medium">Scan with any UPI app</p>
                    <p className="text-xs text-gray-500 mt-1">PhonePe · GPay · Paytm · BHIM</p>
                  </div>
                </div>
              </div>

              {/* Pay Now Button */}
              <button
                onClick={handlePayNow}
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md mb-4"
              >
                Pay Now via UPI App
              </button>

              {/* Instructions */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Payment Instructions:</h4>
                <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
                  <li>Scan QR or click "Pay Now" to open UPI app</li>
                  <li>Complete payment in your UPI app</li>
                  <li>Enter your email above</li>
                  <li>Click "I Have Paid" to submit proof</li>
                </ol>
              </div>

              {/* I Have Paid Button */}
              <button
                onClick={handlePaid}
                className="w-full bg-teal-600 text-white py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
              >
                I Have Paid →
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
