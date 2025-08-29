import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Aura Collective
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Crafting premium urban fashion with a focus on quality, sustainability, and timeless design that empowers your everyday style.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-6xl mx-auto px-4 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We design essentials that elevate everyday wear—responsibly sourced materials, ethical production, 
            and enduring style that transcends trends and seasons.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="text-center group">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality First</h3>
              <p className="text-gray-600 leading-relaxed">Premium materials and craftsmanship in every piece</p>
            </div>
          </div>
          
          <div className="text-center group">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainability</h3>
              <p className="text-gray-600 leading-relaxed">Eco-friendly practices and responsible sourcing</p>
            </div>
          </div>
          
          <div className="text-center group">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ethical Production</h3>
              <p className="text-gray-600 leading-relaxed">Fair labor practices and transparent supply chain</p>
            </div>
          </div>
          
          <div className="text-center group">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">Cutting-edge design and technology integration</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">Our Impact in Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">10+</div>
              <div className="text-blue-100 text-sm md:text-base">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50K+</div>
              <div className="text-blue-100 text-sm md:text-base">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100 text-sm md:text-base">Quality Assured</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100 text-sm md:text-base">Customer Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to create fashion that doesn't compromise on style or sustainability, 
                Aura Collective began as a small workshop in the heart of the city.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Today, we're proud to serve customers worldwide while maintaining our commitment to 
                ethical practices and exceptional quality. Every piece tells a story of craftsmanship, 
                innovation, and respect for our planet.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">Certified B Corporation</span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-400 to-indigo-600 rounded-3xl p-8 text-white">
                <div className="w-16 h-16 bg-white/20 rounded-full mb-4"></div>
                <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
                <p className="text-blue-100 mb-6">
                  Be part of a movement towards sustainable, ethical fashion that doesn't compromise on style.
                </p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;


