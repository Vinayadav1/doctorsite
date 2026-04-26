import * as React from 'react';
import Image from 'next/image';

export default function DrVikramPreview() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🧠 Brain & Spine Specialist
              </div>
              <h1 className="text-5xl font-bold mb-4">Dr. Vikram Singh</h1>
              <p className="text-2xl text-blue-400 mb-6">Neurosurgeon</p>
              <p className="text-lg text-gray-300 mb-8">
                Advanced neurological care and brain surgery expertise. Specializing in complex brain tumors, spine surgery, and minimally invasive neurosurgery.
              </p>
              <div className="flex gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
                  Book Consultation
                </button>
                <button className="border-2 border-blue-600 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-900 transition-colors">
                  Emergency Care
                </button>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=400&fit=crop"
                alt="Dr. Vikram Singh"
                fill
                className="object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">15+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">1000+</div>
              <div className="text-gray-400">Brain Surgeries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-400">Spine Surgeries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">97%</div>
              <div className="text-gray-400">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Neurosurgical Services</h2>
          <p className="text-center text-gray-400 mb-12 text-lg">Advanced surgical solutions for brain and spine conditions</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🧠',
                title: 'Brain Tumor Surgery',
                desc: 'Advanced microsurgical techniques for tumor removal',
              },
              {
                icon: '🦴',
                title: 'Spine Surgery',
                desc: 'Minimally invasive spine procedures and disc surgery',
              },
              {
                icon: '🚑',
                title: 'Trauma Care',
                desc: 'Emergency neurosurgical care for head and spine injuries',
              },
              {
                icon: '💉',
                title: 'Stroke Treatment',
                desc: 'Acute stroke management and intervention',
              },
              {
                icon: '⚡',
                title: 'Epilepsy Surgery',
                desc: 'Surgical treatment for drug-resistant epilepsy',
              },
              {
                icon: '🔬',
                title: 'Neuro-Oncology',
                desc: 'Comprehensive care for brain and spine tumors',
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-600 hover:shadow-xl transition-all">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-20 px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Qualifications & Training</h2>
          <div className="space-y-6">
            {[
              { degree: 'MBBS', institution: 'Armed Forces Medical College, Pune', year: '2005' },
              { degree: 'MS (General Surgery)', institution: 'AIIMS, New Delhi', year: '2008' },
              { degree: 'MCh (Neurosurgery)', institution: 'NIMHANS, Bangalore', year: '2012' },
              { degree: 'Fellowship in Skull Base Surgery', institution: 'Johns Hopkins Hospital, USA', year: '2014' },
            ].map((qual, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-gray-900 rounded-xl p-6 border border-gray-700">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{qual.degree}</h3>
                  <p className="text-gray-300">{qual.institution}</p>
                  <p className="text-sm text-blue-400 font-semibold mt-1">{qual.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Patient Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'Ramesh Kumar',
                age: '45',
                text: 'Dr. Vikram successfully removed my brain tumor. His expertise and care gave me a second chance at life.',
                rating: 5,
              },
              {
                name: 'Sunita Patel',
                age: '52',
                text: 'Had spine surgery with Dr. Vikram. The minimally invasive approach meant quick recovery. Excellent surgeon!',
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.name}, {testimonial.age} years</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Schedule Your Consultation</h2>
          <p className="text-xl mb-8 text-blue-200">
            Expert neurosurgical care with advanced technology and compassionate approach
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-3xl font-bold mb-2">📞</div>
              <div className="font-semibold mb-1">24/7 Emergency</div>
              <div className="text-blue-200">+91 80 9876 5432</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">📧</div>
              <div className="font-semibold mb-1">Email</div>
              <div className="text-blue-200">dr.vikram@neurocare.com</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">📍</div>
              <div className="font-semibold mb-1">Location</div>
              <div className="text-blue-200">Bangalore, India</div>
            </div>
          </div>
          <button className="bg-white text-blue-900 px-10 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-xl">
            Book Appointment Now
          </button>
        </div>
      </section>
    </div>
  );
}
