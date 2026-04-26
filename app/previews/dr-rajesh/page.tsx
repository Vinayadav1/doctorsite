import * as React from 'react';
import Image from 'next/image';

export default function DrRajeshPreview() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Dr. Rajesh Kumar
              </h1>
              <p className="text-2xl text-blue-600 mb-6">Orthopedic Surgeon</p>
              <p className="text-lg text-gray-600 mb-8">
                With over 15 years of experience in orthopedic surgery, I specialize in joint replacement, sports injuries, and trauma care.
              </p>
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Book Appointment
              </button>
            </div>
            <div className="relative h-96">
              <Image
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=400&fit=crop"
                alt="Dr. Rajesh Kumar"
                fill
                className="object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Dr. Kumar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Education & Training</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>MBBS - All India Institute of Medical Sciences (AIIMS)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>MS Orthopedics - King Edward Memorial Hospital</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Fellowship in Joint Replacement - USA</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Experience</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>15+ years in Orthopedic Surgery</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>5000+ successful surgeries</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Consultant at Top Hospitals in Mumbai</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Services Offered</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Joint Replacement', desc: 'Hip, knee, and shoulder replacement surgeries' },
              { title: 'Sports Injuries', desc: 'Treatment for ACL, meniscus, and other sports injuries' },
              { title: 'Trauma Care', desc: 'Emergency fracture and trauma management' },
              { title: 'Arthroscopy', desc: 'Minimally invasive joint procedures' },
              { title: 'Spine Surgery', desc: 'Treatment for back and neck problems' },
              { title: 'Pediatric Orthopedics', desc: 'Specialized care for children' },
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Schedule Your Consultation</h2>
          <p className="text-xl mb-8 text-blue-100">
            Get expert orthopedic care from an experienced surgeon
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-3xl font-bold mb-2">📞</div>
              <div className="font-semibold mb-1">Phone</div>
              <div className="text-blue-100">+91 98765 43210</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">📧</div>
              <div className="font-semibold mb-1">Email</div>
              <div className="text-blue-100">dr.rajesh@example.com</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">📍</div>
              <div className="font-semibold mb-1">Location</div>
              <div className="text-blue-100">Mumbai, India</div>
            </div>
          </div>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Book Appointment Now
          </button>
        </div>
      </section>
    </div>
  );
}
