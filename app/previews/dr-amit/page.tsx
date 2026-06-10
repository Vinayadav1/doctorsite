import * as React from 'react';
import Image from 'next/image';

export default function DrAmitPreview() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-red-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                ❤️ Heart Care Specialist
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">Dr. Amit Patel</h1>
              <p className="text-2xl text-red-600 mb-6">Interventional Cardiologist</p>
              <p className="text-lg text-gray-700 mb-8">
                Expert cardiac care with over 12 years of experience in treating heart conditions. Specializing in angioplasty, heart failure management, and preventive cardiology.
              </p>
              <div className="flex gap-4">
                <button type="button" data-consultation-modal className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors shadow-lg">
                  Book Consultation
                </button>
                <button type="button" data-consultation-modal className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-colors">
                  Emergency Care
                </button>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop"
                alt="Dr. Amit Patel"
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
              <div className="text-4xl font-bold text-red-600 mb-2">12+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">3000+</div>
              <div className="text-gray-600">Patients Treated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
              <div className="text-gray-600">Angioplasties</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Cardiac Services</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Comprehensive heart care solutions</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🫀',
                title: 'Angioplasty & Stenting',
                desc: 'Minimally invasive procedures to open blocked arteries',
              },
              {
                icon: '💊',
                title: 'Heart Failure Management',
                desc: 'Comprehensive treatment for chronic heart conditions',
              },
              {
                icon: '🩺',
                title: 'Preventive Cardiology',
                desc: 'Risk assessment and lifestyle modification programs',
              },
              {
                icon: '⚡',
                title: 'Arrhythmia Treatment',
                desc: 'Management of irregular heart rhythms',
              },
              {
                icon: '📊',
                title: 'Cardiac Diagnostics',
                desc: 'ECG, Echo, Stress tests, and advanced imaging',
              },
              {
                icon: '🚨',
                title: 'Emergency Care',
                desc: '24/7 emergency cardiac care and support',
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

      {/* Qualifications Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Qualifications & Training</h2>
          <div className="space-y-6">
            {[
              { degree: 'MBBS', institution: 'Grant Medical College, Mumbai', year: '2008' },
              { degree: 'MD (Internal Medicine)', institution: 'KEM Hospital, Mumbai', year: '2011' },
              { degree: 'DM (Cardiology)', institution: 'AIIMS, New Delhi', year: '2014' },
              { degree: 'Fellowship in Interventional Cardiology', institution: 'Cleveland Clinic, USA', year: '2016' },
            ].map((qual, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-red-50 rounded-xl p-6">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{qual.degree}</h3>
                  <p className="text-gray-700">{qual.institution}</p>
                  <p className="text-sm text-red-600 font-semibold mt-1">{qual.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-red-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Patient Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'Rajesh Kumar',
                age: '58',
                text: 'Dr. Amit saved my life with his quick diagnosis and expert angioplasty. I am forever grateful.',
                rating: 5,
              },
              {
                name: 'Meera Shah',
                age: '62',
                text: 'Excellent doctor with great bedside manner. He explained everything clearly and made me feel comfortable.',
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">{testimonial.name}, {testimonial.age} years</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Schedule Your Cardiac Consultation</h2>
          <p className="text-xl mb-8 text-red-100">
            Early detection and treatment can save lives. Book your appointment today.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-3xl font-bold mb-2">📞</div>
              <div className="font-semibold mb-1">Phone</div>
              <div className="text-red-100">+91 22 1234 5678</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">📧</div>
              <div className="font-semibold mb-1">Email</div>
              <div className="text-red-100">dr.amit@cardiocare.com</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">📍</div>
              <div className="font-semibold mb-1">Location</div>
              <div className="text-red-100">Mumbai, India</div>
            </div>
          </div>
          <button type="button" data-consultation-modal className="bg-white text-red-600 px-10 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-xl">
            Book Appointment Now
          </button>
        </div>
      </section>
    </div>
  );
}
