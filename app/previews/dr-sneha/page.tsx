import * as React from 'react';
import Image from 'next/image';

export default function DrSnehaPreview() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-pink-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                👩‍⚕️ Women's Health Specialist
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">Dr. Sneha Reddy</h1>
              <p className="text-2xl text-pink-600 mb-6">Gynecologist & Obstetrician</p>
              <p className="text-lg text-gray-700 mb-8">
                Compassionate care for women at every stage of life. Specializing in pregnancy care, gynecological surgery, and women's wellness.
              </p>
              <div className="flex gap-4">
                <button className="bg-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-pink-700 transition-colors shadow-lg">
                  Schedule Consultation
                </button>
                <button className="border-2 border-pink-600 text-pink-600 px-8 py-4 rounded-lg font-semibold hover:bg-pink-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop"
                alt="Dr. Sneha Reddy"
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
              <div className="text-4xl font-bold text-pink-600 mb-2">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">2000+</div>
              <div className="text-gray-600">Deliveries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">500+</div>
              <div className="text-gray-600">Surgeries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">99%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Specialized Services</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Comprehensive women's healthcare</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🤰',
                title: 'Prenatal Care',
                desc: 'Complete pregnancy monitoring and care from conception to delivery',
              },
              {
                icon: '👶',
                title: 'Normal & C-Section Delivery',
                desc: 'Safe delivery options with experienced care team',
              },
              {
                icon: '💊',
                title: 'High-Risk Pregnancy',
                desc: 'Specialized care for complicated pregnancies',
              },
              {
                icon: '🔬',
                title: 'Gynecological Surgery',
                desc: 'Minimally invasive laparoscopic procedures',
              },
              {
                icon: '🩺',
                title: 'Infertility Treatment',
                desc: 'Comprehensive fertility evaluation and treatment',
              },
              {
                icon: '💗',
                title: "Women's Wellness",
                desc: 'Preventive care, screenings, and health checkups',
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

      {/* Education Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Education & Training</h2>
          <div className="space-y-6">
            {[
              { degree: 'MBBS', institution: 'Osmania Medical College, Hyderabad', year: '2010' },
              { degree: 'MS (Obstetrics & Gynecology)', institution: 'Gandhi Medical College', year: '2013' },
              { degree: 'Fellowship in Laparoscopic Surgery', institution: 'Apollo Hospitals', year: '2015' },
            ].map((qual, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-pink-50 rounded-xl p-6">
                <div className="flex-shrink-0 w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{qual.degree}</h3>
                  <p className="text-gray-700">{qual.institution}</p>
                  <p className="text-sm text-pink-600 font-semibold mt-1">{qual.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-pink-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Patient Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'Anjali Sharma',
                text: 'Dr. Sneha made my pregnancy journey so comfortable. She was always available and answered all my questions patiently.',
                rating: 5,
              },
              {
                name: 'Kavita Reddy',
                text: 'Excellent doctor! Her expertise and caring nature made my surgery experience stress-free. Highly recommended!',
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
                <p className="font-semibold text-gray-900">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Book Your Consultation</h2>
          <p className="text-xl mb-8 text-pink-100">
            Compassionate care for all your women's health needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-3xl font-bold mb-2">📞</div>
              <div className="font-semibold mb-1">Phone</div>
              <div className="text-pink-100">+91 40 1234 5678</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">📧</div>
              <div className="font-semibold mb-1">Email</div>
              <div className="text-pink-100">dr.sneha@womenscare.com</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">📍</div>
              <div className="font-semibold mb-1">Location</div>
              <div className="text-pink-100">Hyderabad, India</div>
            </div>
          </div>
          <button className="bg-white text-pink-600 px-10 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-xl">
            Schedule Appointment
          </button>
        </div>
      </section>
    </div>
  );
}
