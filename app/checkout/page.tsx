'use client';

import * as React from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { pricingPlans } from '@/lib/constants';
import { logToSheets } from '@/lib/sheets';

// ── Coupon codes (secret ones not shown on website) ─────────────
const COUPONS: Record<string, { discount: number; label: string }> = {
  BESTDOCTOR: { discount: 10, label: '10% off' },  // shown on website
  PCDOCTOR:   { discount: 25, label: '25% off' },  // hidden / secret
};

const ADD_ON_PRICES = { logo: 999, seo: 2999, fastDelivery: 1499 };

const DESIGN_NAMES: Record<string, string> = {
  'dermis-elite': 'Dermis Elite',
  'dr-priya': 'Priya Skin Institute',
  'dr-rajesh': 'OrthoAxis Surgical Center',
  'smile-dental': 'Smile Dental Modern',
  'dr-amit': 'Amit Cardiac Institute',
  'healthcare-plus': 'HealthCare Plus System',
  'bright-smile': 'Bright Smile Studio',
  'city-medical': 'City Medical Center',
  'dr-sneha': "Sneha Women's Care",
  'dr-vikram': 'NeuroVanguard Institute',
};

const stages = [
  {
    step: 1,
    label: 'Booking',
    desc: 'Pay minimum 10% to confirm your project',
    threshold: 10,
    milestone: 'Booking Confirmed',
    color: 'blue',
  },
  {
    step: 2,
    label: 'Design Phase',
    desc: 'Total paid must reach 50% before design starts',
    threshold: 50,
    milestone: 'Design Completed',
    color: 'purple',
  },
  {
    step: 3,
    label: 'Development',
    desc: 'Remaining 50% due before final delivery',
    threshold: 100,
    milestone: 'Project Ready for Delivery',
    color: 'green',
  },
];

function getActiveStage(pct: number) {
  if (pct >= 100) return 3;
  if (pct >= 50) return 2;
  if (pct >= 10) return 1;
  return 0;
}

// ── Tooltip component ────────────────────────────────────────────
function Tooltip({ text }: { text: string }) {
  const [show, setShow] = React.useState(false);
  return (
    <span className="relative inline-block ml-1">
      <button
        type="button"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className="w-4 h-4 rounded-full bg-gray-300 text-gray-600 text-xs font-bold inline-flex items-center justify-center hover:bg-blue-200 transition-colors"
      >
        ?
      </button>
      {show && (
        <div className="absolute z-50 bottom-6 left-1/2 -translate-x-1/2 w-52 bg-gray-900 text-white text-xs rounded-lg p-3 shadow-xl">
          {text}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
        </div>
      )}
    </span>
  );
}

export default function CheckoutPage() {
  return (
    <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>}>
      <CheckoutContent />
    </React.Suspense>
  );
}

function CheckoutContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const planId = searchParams.get('plan') || 'professional';
  const designId = searchParams.get('design') || '';
  const selectedDesignName = designId ? DESIGN_NAMES[designId] || designId : '';
  const selectedPlan = pricingPlans.find(p => p.id === planId) || pricingPlans[1];

  const [formData, setFormData] = React.useState({ name: '', phone: '', email: '', clinicName: '' });
  const [addOns, setAddOns] = React.useState({ logo: false, seo: false, fastDelivery: false });
  const [paymentInput, setPaymentInput] = React.useState('');
  const [paymentError, setPaymentError] = React.useState('');

  // Coupon state
  const [couponInput, setCouponInput]   = React.useState('');
  const [appliedCoupon, setAppliedCoupon] = React.useState<{ code: string; discount: number; label: string } | null>(null);
  const [couponError, setCouponError]   = React.useState('');
  const [couponSuccess, setCouponSuccess] = React.useState('');

  const addOnPrices = ADD_ON_PRICES;
  const formatAmount = (amount: number) => `₹${Math.round(amount).toLocaleString('en-IN')}`;

  const basePrice = React.useMemo(() => {
    let t = selectedPlan.price;
    if (addOns.logo) t += ADD_ON_PRICES.logo;
    if (addOns.seo) t += ADD_ON_PRICES.seo;
    if (addOns.fastDelivery) t += ADD_ON_PRICES.fastDelivery;
    return t;
  }, [selectedPlan.price, addOns]);

  const discountAmount = appliedCoupon ? Math.round(basePrice * appliedCoupon.discount / 100) : 0;
  const totalPrice = basePrice - discountAmount;

  const minRequired = Math.ceil(totalPrice * 0.1);
  const enteredAmount = parseFloat(paymentInput) || 0;
  const remaining = Math.max(0, totalPrice - enteredAmount);
  const paidPercent = totalPrice > 0 ? Math.min(100, (enteredAmount / totalPrice) * 100) : 0;
  const activeStage = getActiveStage(paidPercent);

  const handlePaymentInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setPaymentInput(val);
    const num = parseFloat(val);
    if (val && (isNaN(num) || num < minRequired)) {
      setPaymentError(`Minimum payment is ${formatAmount(minRequired)} (10% of total)`);
    } else {
      setPaymentError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!paymentInput || enteredAmount < minRequired) {
      setPaymentError(`Minimum payment is ${formatAmount(minRequired)} (10% of total)`);
      return;
    }

    // Log checkout order to Google Sheets
    logToSheets({
      type: 'checkout',
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      clinicName: formData.clinicName,
      plan: selectedPlan.name,
      design: selectedDesignName || 'Not selected',
      addOns: [
        addOns.logo ? 'Logo Design' : '',
        addOns.seo ? 'SEO Boost' : '',
        addOns.fastDelivery ? 'Fast Delivery' : '',
      ].filter(Boolean).join(', ') || 'None',
      coupon: appliedCoupon?.code || '',
      discount: discountAmount,
      totalPrice,
      paymentAmount: enteredAmount,
    });

    router.push(
      `/payment?plan=${planId}&design=${encodeURIComponent(designId)}&amount=${enteredAmount}&total=${totalPrice}&name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}`
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleAddOn = (key: keyof typeof addOns) => {
    setAddOns(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const applyCoupon = () => {
    const code = couponInput.trim().toUpperCase();
    if (!code) { setCouponError('Please enter a coupon code'); return; }
    if (appliedCoupon) { setCouponError('A coupon is already applied'); return; }
    const found = COUPONS[code];
    if (found) {
      setAppliedCoupon({ code, ...found });
      setCouponSuccess(`🎉 Coupon applied! ${found.label} discount`);
      setCouponError('');
      setCouponInput('');
      setPaymentInput(''); // reset payment amount so user re-enters with new price
    } else {
      setCouponError('Invalid coupon code');
      setCouponSuccess('');
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponSuccess('');
    setCouponError('');
    setPaymentInput('');
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-16 sm:pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-1">Checkout</h1>
          <p className="text-gray-600 mb-6 sm:mb-8">Complete your order details</p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">

            {/* ── LEFT: Form ── */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-md space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Your Details</h2>

                {[
                  { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Dr. John Doe' },
                  { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 72919 78840' },
                  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'doctor@example.com' },
                  { id: 'clinicName', label: 'Clinic/Practice Name', type: 'text', placeholder: 'ABC Medical Center' },
                ].map(field => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-2">
                      {field.label} *
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      required
                      value={formData[field.id as keyof typeof formData]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                ))}

                {/* Selected Plan */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Selected Plan</label>
                  <div className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-900 font-semibold">
                    {selectedPlan.name} — {formatAmount(selectedPlan.price)}
                  </div>
                </div>

                {selectedDesignName && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Selected Design</label>
                    <div className="w-full px-4 py-3 bg-amber-50 border border-amber-200 rounded-lg text-gray-900 font-semibold">
                      {selectedDesignName}
                    </div>
                  </div>
                )}

                {/* Add-ons */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Add-ons (Optional)</h3>
                  <div className="space-y-3">
                    {[
                      { key: 'logo', label: 'Logo Design', desc: 'Professional logo for your brand', price: addOnPrices.logo },
                      { key: 'seo', label: 'SEO Boost Package', desc: 'Advanced SEO optimization', price: addOnPrices.seo },
                      { key: 'fastDelivery', label: 'Fast Delivery (1 Week)', desc: 'Priority development', price: addOnPrices.fastDelivery },
                    ].map(addon => (
                      <label key={addon.key} className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-600 transition-colors">
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={addOns[addon.key as keyof typeof addOns]}
                            onChange={() => toggleAddOn(addon.key as keyof typeof addOns)}
                            className="w-5 h-5 text-blue-600 rounded"
                          />
                          <div>
                            <div className="font-semibold text-gray-900">{addon.label}</div>
                            <div className="text-sm text-gray-600">{addon.desc}</div>
                          </div>
                        </div>
                        <div className="font-bold text-blue-600">+{formatAmount(addon.price)}</div>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
                >
                  Proceed to Payment
                </button>
              </form>

              {/* ── Payment Roadmap ── */}
              <div className="bg-white rounded-2xl p-8 shadow-md mt-8">
                <div className="flex items-center gap-2 mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Payment Roadmap</h3>
                  <Tooltip text="You can pay in stages. Start with 10%, pay 50% before design, and the rest before delivery." />
                </div>

                <div className="relative">
                  {/* Connector line */}
                  <div className="absolute left-5 top-8 bottom-8 w-0.5 bg-gray-200" />

                  <div className="space-y-6">
                    {stages.map((stage, i) => {
                      const isActive = activeStage >= stage.step;
                      const isCurrent = activeStage === stage.step - 1 || (activeStage === 0 && i === 0);
                      return (
                        <div key={stage.step} className="flex items-start gap-4 relative">
                          {/* Circle */}
                          <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm transition-all ${
                            isActive
                              ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                              : isCurrent
                              ? 'bg-blue-100 text-blue-600 border-2 border-blue-600'
                              : 'bg-gray-100 text-gray-400 border-2 border-gray-200'
                          }`}>
                            {isActive ? (
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                              </svg>
                            ) : stage.step}
                          </div>

                          {/* Content */}
                          <div className={`flex-1 pb-2 ${isActive ? 'opacity-100' : 'opacity-60'}`}>
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className={`font-bold text-base ${isActive ? 'text-gray-900' : 'text-gray-500'}`}>
                                {stage.label}
                              </span>
                              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                                {stage.threshold === 10 ? '10% min' : stage.threshold === 50 ? '50% total' : '100% total'}
                              </span>
                              {isActive && (
                                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">
                                  ✓ {stage.milestone}
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-500 mt-0.5">{stage.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT: Order Summary + Partial Payment ── */}
            <div className="lg:col-span-1 space-y-6">

              {/* Order Summary */}
              <div className="bg-white rounded-2xl p-6 shadow-md sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h3>

                <div className="space-y-3 mb-4 text-sm">
                  <div className="flex justify-between text-gray-700">
                    <span>{selectedPlan.name} Plan</span>
                    <span>{formatAmount(selectedPlan.price)}</span>
                  </div>
                  {selectedDesignName && (
                    <div className="flex justify-between text-gray-700">
                      <span>Design</span>
                      <span className="text-right">{selectedDesignName}</span>
                    </div>
                  )}
                  {addOns.logo && <div className="flex justify-between text-gray-700"><span>Logo Design</span><span>+{formatAmount(addOnPrices.logo)}</span></div>}
                  {addOns.seo && <div className="flex justify-between text-gray-700"><span>SEO Boost</span><span>+{formatAmount(addOnPrices.seo)}</span></div>}
                  {addOns.fastDelivery && <div className="flex justify-between text-gray-700"><span>Fast Delivery</span><span>+{formatAmount(addOnPrices.fastDelivery)}</span></div>}
                  {appliedCoupon && (
                    <div className="flex justify-between text-green-600 font-semibold">
                      <span>Coupon ({appliedCoupon.code})</span>
                      <span>-{formatAmount(discountAmount)}</span>
                    </div>
                  )}
                </div>

                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-900">Total Price</span>
                    <span className="text-2xl font-bold text-blue-600">{formatAmount(totalPrice)}</span>
                  </div>
                </div>

                {/* ── Coupon Code ── */}
                <div className="mb-4">
                  {!appliedCoupon ? (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Have a coupon?
                        <span className="ml-2 text-xs text-blue-600 font-normal">Use <strong>BESTDOCTOR</strong> for 10% off</span>
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={couponInput}
                          onChange={e => { setCouponInput(e.target.value); setCouponError(''); }}
                          onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), applyCoupon())}
                          placeholder="Enter coupon code"
                          className={`flex-1 px-3 py-2.5 border rounded-lg text-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent uppercase ${couponError ? 'border-red-400' : 'border-gray-300'}`}
                        />
                        <button
                          type="button"
                          onClick={applyCoupon}
                          className="px-4 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          Apply
                        </button>
                      </div>
                      {couponError && <p className="text-red-500 text-xs mt-1">{couponError}</p>}
                    </div>
                  ) : (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center justify-between">
                      <div>
                        <p className="text-green-700 text-sm font-semibold">{couponSuccess}</p>
                        <p className="text-green-600 text-xs">Code: <strong>{appliedCoupon.code}</strong> — saved {formatAmount(discountAmount)}</p>
                      </div>
                      <button
                        type="button"
                        onClick={removeCoupon}
                        className="text-gray-400 hover:text-red-500 transition-colors ml-2"
                        title="Remove coupon"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>

                {/* Final total after discount */}
                {appliedCoupon && (
                  <div className="bg-green-50 rounded-lg p-3 mb-4 flex justify-between items-center">
                    <div>
                      <p className="text-xs text-gray-500 line-through">{formatAmount(basePrice)} original</p>
                      <p className="text-sm font-bold text-green-700">After discount</p>
                    </div>
                    <span className="text-2xl font-bold text-green-600">{formatAmount(totalPrice)}</span>
                  </div>
                )}

                {/* ── Partial Payment Section ── */}
                <div className="bg-blue-50 rounded-xl p-5 space-y-4">
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-blue-800">Flexible Payment</span>
                    <Tooltip text="Pay in stages. Minimum 10% now to start. Pay 50% before design, rest before delivery." />
                  </div>

                  {/* Price breakdown */}
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-gray-700">
                      <span>Total Price</span>
                      <span className="font-semibold">{formatAmount(totalPrice)}</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Minimum Required (10%)</span>
                      <span className="font-semibold text-orange-600">{formatAmount(minRequired)}</span>
                    </div>
                    {enteredAmount > 0 && (
                      <>
                        <div className="flex justify-between text-gray-700">
                          <span>You're Paying</span>
                          <span className={`font-semibold ${enteredAmount >= minRequired ? 'text-green-600' : 'text-red-500'}`}>
                            {formatAmount(enteredAmount)}
                          </span>
                        </div>
                        <div className="flex justify-between text-gray-700 border-t border-blue-200 pt-2">
                          <span>Remaining Balance</span>
                          <span className="font-bold text-gray-900">{formatAmount(remaining)}</span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Payment Amount Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Enter Payment Amount *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">₹</span>
                      <input
                        type="number"
                        min={minRequired}
                        max={totalPrice}
                        step="1"
                        value={paymentInput}
                        onChange={handlePaymentInput}
                        placeholder={`Min ${formatAmount(minRequired)}`}
                        className={`w-full pl-7 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm ${
                          paymentError ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-white'
                        }`}
                      />
                    </div>
                    {paymentError && (
                      <p className="text-red-500 text-xs mt-1">{paymentError}</p>
                    )}
                    {enteredAmount >= minRequired && !paymentError && paymentInput && (
                      <p className="text-green-600 text-xs mt-1">✓ Valid amount</p>
                    )}
                  </div>

                  {/* Progress Bar */}
                  {enteredAmount > 0 && (
                    <div>
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span>Payment Progress</span>
                        <span className="font-semibold">{paidPercent.toFixed(0)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div
                          className={`h-3 rounded-full transition-all duration-500 ${
                            paidPercent >= 100 ? 'bg-green-500' :
                            paidPercent >= 50 ? 'bg-purple-500' :
                            paidPercent >= 10 ? 'bg-blue-500' : 'bg-red-400'
                          }`}
                          style={{ width: `${Math.min(100, paidPercent)}%` }}
                        />
                      </div>
                      {/* Stage markers */}
                      <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>10%</span>
                        <span>50%</span>
                        <span>100%</span>
                      </div>
                      {/* Milestone badge */}
                      {paidPercent >= 10 && (
                        <div className={`mt-2 text-xs font-semibold px-3 py-1.5 rounded-full text-center ${
                          paidPercent >= 100 ? 'bg-green-100 text-green-700' :
                          paidPercent >= 50 ? 'bg-purple-100 text-purple-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {paidPercent >= 100 ? '🎉 Project Ready for Delivery' :
                           paidPercent >= 50 ? '🎨 Design Completed' :
                           '✅ Booking Confirmed'}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Quick select buttons */}
                  <div>
                    <p className="text-xs text-gray-500 mb-2">Quick select:</p>
                    <div className="flex gap-2">
                      {[10, 50, 100].map(pct => (
                        <button
                          key={pct}
                          type="button"
                          onClick={() => {
                            const amt = Math.ceil(totalPrice * pct / 100);
                            setPaymentInput(amt.toString());
                            setPaymentError('');
                          }}
                          className="flex-1 text-xs py-1.5 rounded-lg border border-blue-300 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors font-semibold"
                        >
                          {pct}%
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Note */}
                <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-xs text-green-700 font-medium text-center">
                    🚀 Start your project with just 10% payment!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
