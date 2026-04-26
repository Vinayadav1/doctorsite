import * as React from 'react';
import Image from 'next/image';

export default function BrightSmilePreview() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-yellow-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                😁 Cosmetic Dentistry Experts
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">Bright Smile Dentistry</h1>
              <p className="text-2xl text-orange-600 mb-6">Creating Beautiful Smiles</p>
              <p className="text-lg text-gray-700 mb-8">
                Transform your smile with our advanced cosmetic dentistry services. We specialize in teeth whitening, veneers, implants, and complete smile makeovers.
              </p>
              <div className="flex gap-4">
                <button className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors shadow-lg">
                  Book Appointment
                </button>
                <button className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
                  View Gallery
                </button>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop"
                alt="Bright Smile Dentistry"
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
              <div className="text-4xl font-bold text-orange-600 mb-2">8+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">3000+</div>
              <div className="text-gray-600">Smile Makeovers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-gray-600">Dental Implants</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-600">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Our Cosmetic Services</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Advanced treatments for your perfect smile</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '✨',
                title: 'Teeth Whitening',
                desc: 'Professional whitening for a brighter, whiter smile in just one visit',
                price: 'From ₹5,000',
              },
              {
                icon: '💎',
                title: 'Porcelain Veneers',
                desc: 'Custom-made veneers for a perfect, natural-looking smile',
                price: 'From ₹15,000/tooth',
              },
              {
                icon: '🦷',
                title: 'Dental Implants',
                desc: 'Permanent tooth replacement that looks and feels natural',
                price: 'From ₹25,000',
              },
              {
                icon: '😬',
                title: 'Invisalign',
                desc: 'Clear aligners for discreet teeth straightening',
                price: 'From ₹1,50,000',
              },
              {
                icon: '🎨',
                title: 'Smile Makeover',
                desc: 'Complete transformation combining multiple treatments',
                price: 'Custom Quote',
              },
              {
                icon: '👑',
                title: 'Crowns & Bridges',
                desc: 'Restore damaged teeth with natural-looking crowns',
                price: 'From ₹8,000',
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border-2 border-orange-100 hover:border-orange-500">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <p className="text-orange-600 font-semibold">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 px-6 bg-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Smile Transformations</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">See the amazing results we've achieved</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-2">BEFORE</p>
                    <div className="relative h-48 bg-gray-200 rounded-lg overflow-hidden">
                      <Image
                        src={`https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=300&h=200&fit=crop&q=50`}
                        alt="Before"
                        fill
                        className="object-cover opacity-60"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-orange-600 mb-2">AFTER</p>
                    <div className="relative h-48 bg-gray-200 rounded-lg overflow-hidden">
                      <Image
                        src={`https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=300&h=200&fit=crop`}
                        alt="After"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"Amazing transformation! My confidence has skyrocketed."</p>
                <p className="text-sm text-gray-600 mt-2">- Patient {idx + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Choose Bright Smile?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: '👨‍⚕️', title: 'Expert Cosmetic Dentists', desc: 'Certified specialists in cosmetic dentistry' },
              { icon: '🔬', title: 'Latest Technology', desc: 'State-of-the-art equipment and techniques' },
              { icon: '💰', title: 'Flexible Payment Plans', desc: 'EMI options available for all treatments' },
              { icon: '⏰', title: 'Convenient Hours', desc: 'Evening and weekend appointments available' },
              { icon: '🎯', title: 'Personalized Care', desc: 'Custom treatment plans for each patient' },
              { icon: '✅', title: 'Guaranteed Results', desc: 'Satisfaction guarantee on all cosmetic work' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-orange-50 rounded-xl p-6">
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
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Happy Patients</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Priya Sharma',
                text: 'Best teeth whitening experience! My teeth are 5 shades whiter.',
                rating: 5,
              },
              {
                name: 'Rahul Verma',
                text: 'Got veneers done here. The results are absolutely stunning!',
                rating: 5,
              },
              {
                name: 'Anita Desai',
                text: 'Professional staff and painless procedures. Highly recommend!',
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md">
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
      <section className="py-20 px-6 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Your Dream Smile?</h2>
          <p className="text-xl mb-8 text-orange-100">
            Book a free consultation and discover what we can do for your smile
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-3xl font-bold mb-2">📞</div>
              <div className="font-semibold mb-1">Phone</div>
              <div className="text-orange-100">+91 20 1234 5678</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">📧</div>
              <div className="font-semibold mb-1">Email</div>
              <div className="text-orange-100">smile@brightsmile.com</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">📍</div>
              <div className="font-semibold mb-1">Location</div>
              <div className="text-orange-100">Pune, India</div>
            </div>
          </div>
          <button className="bg-white text-orange-600 px-10 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-xl">
            Book Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
