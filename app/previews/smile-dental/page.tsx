import * as React from 'react';
import Image from 'next/image';

export default function SmileDentalPreview() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-500 to-blue-600 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold mb-4">😁 Smile Dental Clinic</h1>
            <p className="text-2xl mb-8">Your Partner in Perfect Smiles</p>
            <button type="button" data-consultation-modal className="bg-white text-teal-600 px-10 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-xl text-lg">
              Book Your Appointment
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Our Services</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Comprehensive dental care for the whole family</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'General Dentistry',
                icon: '🦷',
                services: ['Regular Checkups', 'Cleanings', 'Fillings', 'Root Canal'],
              },
              {
                title: 'Cosmetic Dentistry',
                icon: '✨',
                services: ['Teeth Whitening', 'Veneers', 'Bonding', 'Smile Makeover'],
              },
              {
                title: 'Orthodontics',
                icon: '😬',
                services: ['Braces', 'Invisalign', 'Retainers', 'Alignment'],
              },
              {
                title: 'Implants',
                icon: '🔧',
                services: ['Dental Implants', 'Crowns', 'Bridges', 'Dentures'],
              },
              {
                title: 'Pediatric Dentistry',
                icon: '👶',
                services: ['Kids Checkups', 'Fluoride Treatment', 'Sealants', 'Education'],
              },
              {
                title: 'Emergency Care',
                icon: '🚨',
                services: ['Same-Day Appointments', 'Pain Relief', 'Urgent Care', '24/7 Support'],
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-white border-2 border-teal-100 rounded-2xl p-8 hover:border-teal-500 hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.services.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-teal-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Choose Smile Dental?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: '👨‍⚕️', title: 'Expert Team', desc: 'Experienced dentists' },
              { icon: '🏥', title: 'Modern Facility', desc: 'Latest technology' },
              { icon: '💰', title: 'Affordable', desc: 'Flexible payment plans' },
              { icon: '⭐', title: 'Top Rated', desc: '5-star reviews' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">What Our Patients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'Rahul Verma',
                text: 'Best dental clinic in Bangalore! The staff is friendly and professional.',
                rating: 5,
              },
              {
                name: 'Priya Singh',
                text: 'Got my teeth whitening done here. Amazing results and painless procedure!',
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Your Best Smile?</h2>
          <p className="text-xl mb-8">Schedule your appointment today!</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center mb-8">
            <div className="flex items-center justify-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-lg">+91 80 1234 5678</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-lg">Bangalore, India</span>
            </div>
          </div>
          <button type="button" data-consultation-modal className="bg-white text-teal-600 px-10 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-xl text-lg">
            Book Appointment Now
          </button>
        </div>
      </section>
    </div>
  );
}
