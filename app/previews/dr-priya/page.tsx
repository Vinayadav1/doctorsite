import * as React from 'react';
import Image from 'next/image';

export default function DrPriyaPreview() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-2xl mb-6">
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop"
                alt="Dr. Priya Sharma"
                width={192}
                height={192}
                className="object-cover"
              />
            </div>
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-4">Dr. Priya Sharma</h1>
          <p className="text-3xl text-purple-600 mb-6">Dermatologist & Skin Specialist</p>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your skin with expert dermatological care. Specializing in acne treatment, anti-aging, and cosmetic dermatology.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition-colors shadow-lg">
              Book Consultation
            </button>
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition-colors">
              View Services
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Specialized Treatments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '✨', title: 'Acne Treatment', desc: 'Clear skin solutions' },
              { icon: '💆', title: 'Anti-Aging', desc: 'Youthful skin therapy' },
              { icon: '💉', title: 'Botox & Fillers', desc: 'Non-surgical enhancement' },
              { icon: '🌟', title: 'Laser Therapy', desc: 'Advanced skin treatments' },
              { icon: '🧴', title: 'Chemical Peels', desc: 'Skin rejuvenation' },
              { icon: '💎', title: 'Skin Brightening', desc: 'Radiant complexion' },
              { icon: '🔬', title: 'Hair Treatment', desc: 'Hair loss solutions' },
              { icon: '🌸', title: 'Cosmetic Dermatology', desc: 'Beauty enhancement' },
            ].map((service, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Dr. Priya?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="text-4xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="text-4xl font-bold text-purple-600 mb-2">5000+</div>
              <div className="text-gray-600">Happy Patients</div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Beautiful Skin?</h2>
          <p className="text-xl mb-8">Book your consultation today and start your journey to radiant skin</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91 98765 12345</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Delhi, India</span>
            </div>
          </div>
          <button className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-xl">
            Schedule Appointment
          </button>
        </div>
      </section>
    </div>
  );
}
