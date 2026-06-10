import * as React from 'react';
import Image from 'next/image';

export default function CityMedicalPreview() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🏥 Family Health Center
              </div>
              <h1 className="text-5xl font-bold mb-4">City Medical Center</h1>
              <p className="text-2xl mb-6 text-blue-100">Your Family Health Partner</p>
              <p className="text-lg mb-8 text-blue-50">
                Comprehensive primary healthcare for the entire family. From routine checkups to emergency care, we're here for you 24/7.
              </p>
              <div className="flex gap-4">
                <button type="button" data-consultation-modal className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg">
                  Book Appointment
                </button>
                <button type="button" data-consultation-modal className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                  Emergency: 24/7
                </button>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop"
                alt="City Medical Center"
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
              <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-600">Years Serving</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15K+</div>
              <div className="text-gray-600">Families Trust Us</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">30+</div>
              <div className="text-gray-600">Expert Doctors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Emergency Care</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Our Medical Services</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Complete healthcare solutions for your family</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🩺',
                title: 'General Medicine',
                desc: 'Comprehensive primary care for common illnesses and chronic conditions',
              },
              {
                icon: '👶',
                title: 'Pediatrics',
                desc: 'Specialized care for infants, children, and adolescents',
              },
              {
                icon: '💉',
                title: 'Vaccinations',
                desc: 'Complete immunization programs for all age groups',
              },
              {
                icon: '🔬',
                title: 'Diagnostic Lab',
                desc: 'In-house laboratory with quick and accurate test results',
              },
              {
                icon: '❤️',
                title: 'Health Checkups',
                desc: 'Preventive health packages and annual wellness exams',
              },
              {
                icon: '🚑',
                title: 'Emergency Care',
                desc: '24/7 emergency services with ambulance facility',
              },
              {
                icon: '💊',
                title: 'Pharmacy',
                desc: 'On-site pharmacy with all essential medicines',
              },
              {
                icon: '🏠',
                title: 'Home Visits',
                desc: 'Doctor home visits for elderly and bedridden patients',
              },
              {
                icon: '📱',
                title: 'Telemedicine',
                desc: 'Online consultations for your convenience',
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Packages Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Health Checkup Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Basic Health Checkup',
                price: '₹999',
                tests: ['Complete Blood Count', 'Blood Sugar', 'Lipid Profile', 'Kidney Function', 'Liver Function'],
              },
              {
                name: 'Comprehensive Package',
                price: '₹2,499',
                tests: ['All Basic Tests', 'Thyroid Profile', 'Vitamin D & B12', 'ECG', 'Chest X-Ray', 'Doctor Consultation'],
                popular: true,
              },
              {
                name: 'Executive Package',
                price: '₹4,999',
                tests: ['All Comprehensive Tests', 'Cardiac Markers', 'Cancer Markers', 'Ultrasound Abdomen', 'Stress Test', 'Dietitian Consultation'],
              },
            ].map((pkg, idx) => (
              <div key={idx} className={`rounded-xl p-8 shadow-lg ${pkg.popular ? 'bg-blue-50 border-2 border-blue-600' : 'bg-white border-2 border-gray-200'}`}>
                {pkg.popular && (
                  <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-6">{pkg.price}</div>
                <ul className="space-y-3 mb-6">
                  {pkg.tests.map((test, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{test}</span>
                    </li>
                  ))}
                </ul>
                <button type="button" data-consultation-modal className={`w-full py-3 rounded-lg font-semibold transition-colors ${pkg.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Families Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: '👨‍⚕️', title: 'Experienced Doctors', desc: '30+ qualified doctors across specialties' },
              { icon: '⏰', title: 'Convenient Timings', desc: 'Open 7 days a week with extended hours' },
              { icon: '💰', title: 'Affordable Care', desc: 'Transparent pricing with insurance support' },
              { icon: '🏥', title: 'Modern Facility', desc: 'Clean, comfortable, and well-equipped' },
              { icon: '📋', title: 'Digital Records', desc: 'Easy access to your medical history' },
              { icon: '🚗', title: 'Easy Parking', desc: 'Ample parking space for patients' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-md">
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">What Our Patients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Rajesh Kumar',
                text: 'Been coming here for 10 years. Best family doctor in the city!',
                rating: 5,
              },
              {
                name: 'Sunita Patel',
                text: 'Great with kids! My children love visiting Dr. Sharma.',
                rating: 5,
              },
              {
                name: 'Amit Desai',
                text: 'Quick service, affordable prices, and caring staff. Highly recommend!',
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 shadow-md">
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Visit Us Today</h2>
          <p className="text-xl mb-8 text-blue-100">
            Your family's health is our priority. Walk-ins welcome!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-3xl font-bold mb-2">📞</div>
              <div className="font-semibold mb-1">24/7 Helpline</div>
              <div className="text-blue-100">+91 22 9876 5432</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">📧</div>
              <div className="font-semibold mb-1">Email</div>
              <div className="text-blue-100">info@citymedical.com</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">📍</div>
              <div className="font-semibold mb-1">Location</div>
              <div className="text-blue-100">Mumbai, India</div>
            </div>
          </div>
          <button type="button" data-consultation-modal className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-xl">
            Book Appointment Now
          </button>
        </div>
      </section>
    </div>
  );
}
