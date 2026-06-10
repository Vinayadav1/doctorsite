import * as React from 'react';
import Image from 'next/image';

export default function HealthCarePlusPreview() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🏥 Multi-Specialty Hospital
              </div>
              <h1 className="text-5xl font-bold mb-4">HealthCare Plus Clinic</h1>
              <p className="text-2xl mb-6 text-green-100">Your Complete Healthcare Partner</p>
              <p className="text-lg mb-8 text-green-50">
                State-of-the-art multi-specialty hospital offering comprehensive medical care under one roof. Expert doctors, advanced technology, and compassionate care.
              </p>
              <div className="flex gap-4">
                <button type="button" data-consultation-modal className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg">
                  Book Appointment
                </button>
                <button type="button" data-consultation-modal className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-green-700 transition-colors">
                  Emergency: 24/7
                </button>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop"
                alt="HealthCare Plus Clinic"
                fill
                className="object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600">Specialties</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Expert Doctors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">10K+</div>
              <div className="text-gray-600">Patients Annually</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">Emergency Care</div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Our Medical Specialties</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Comprehensive healthcare services across multiple specialties</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '❤️', name: 'Cardiology', desc: 'Heart care' },
              { icon: '🦴', name: 'Orthopedics', desc: 'Bone & joint' },
              { icon: '👶', name: 'Pediatrics', desc: 'Child care' },
              { icon: '🧠', name: 'Neurology', desc: 'Brain & nerves' },
              { icon: '👁️', name: 'Ophthalmology', desc: 'Eye care' },
              { icon: '🦷', name: 'Dentistry', desc: 'Dental care' },
              { icon: '👂', name: 'ENT', desc: 'Ear, nose, throat' },
              { icon: '🩺', name: 'General Medicine', desc: 'Primary care' },
              { icon: '💊', name: 'Pharmacy', desc: '24/7 medicines' },
              { icon: '🔬', name: 'Pathology', desc: 'Lab tests' },
              { icon: '📷', name: 'Radiology', desc: 'Imaging services' },
              { icon: '🚑', name: 'Emergency', desc: 'Urgent care' },
            ].map((specialty, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-shadow border-2 border-green-100 hover:border-green-500">
                <div className="text-4xl mb-3">{specialty.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{specialty.name}</h3>
                <p className="text-sm text-gray-600">{specialty.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">World-Class Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Advanced ICU',
                desc: '24-bed ICU with latest monitoring equipment and ventilators',
                icon: '🏥',
              },
              {
                title: 'Modern OT Complex',
                desc: '5 fully equipped operation theaters with latest surgical technology',
                icon: '⚕️',
              },
              {
                title: 'Diagnostic Center',
                desc: 'In-house lab, CT scan, MRI, X-ray, and ultrasound facilities',
                icon: '🔬',
              },
              {
                title: 'Pharmacy',
                desc: '24/7 pharmacy with all essential and specialty medicines',
                icon: '💊',
              },
              {
                title: 'Ambulance Service',
                desc: 'Emergency ambulance service with trained paramedics',
                icon: '🚑',
              },
              {
                title: 'Patient Rooms',
                desc: 'Comfortable private and semi-private rooms with modern amenities',
                icon: '🛏️',
              },
            ].map((facility, idx) => (
              <div key={idx} className="bg-green-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{facility.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{facility.title}</h3>
                <p className="text-gray-600">{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-green-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Choose HealthCare Plus?</h2>
          <div className="space-y-6">
            {[
              { title: 'Expert Medical Team', desc: '50+ experienced doctors across various specialties' },
              { title: 'Advanced Technology', desc: 'Latest medical equipment and diagnostic tools' },
              { title: 'Affordable Care', desc: 'Quality healthcare at reasonable prices with insurance support' },
              { title: 'Patient-Centric Approach', desc: 'Personalized care plans and dedicated support staff' },
              { title: 'Accredited Hospital', desc: 'NABH accredited with international quality standards' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-md">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Visit Us Today</h2>
          <p className="text-xl mb-8 text-green-100">
            Experience world-class healthcare with compassionate care
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-3xl font-bold mb-2">📞</div>
              <div className="font-semibold mb-1">24/7 Helpline</div>
              <div className="text-green-100">+91 11 2345 6789</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">📧</div>
              <div className="font-semibold mb-1">Email</div>
              <div className="text-green-100">info@healthcareplus.com</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">📍</div>
              <div className="font-semibold mb-1">Location</div>
              <div className="text-green-100">Hyderabad, India</div>
            </div>
          </div>
          <button type="button" data-consultation-modal className="bg-white text-green-600 px-10 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-xl">
            Book Appointment Now
          </button>
        </div>
      </section>
    </div>
  );
}
