import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[70vh] md:h-[80vh] lg:h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6">
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Style That Speaks
        </motion.h1>
        
        <motion.p 
          className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-gray-200 max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover premium urban fashion that defines your unique aesthetic
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            to="/products"
            className="inline-block bg-blue-600 text-white px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Shop The Collection
          </Link>
        </motion.div>
      </div>

      <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;