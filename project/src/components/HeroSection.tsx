import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[70vh] md:h-[80vh] lg:h-[88vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-3 md:mb-5 leading-tight tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Elevate Your Everyday
        </motion.h1>
        
        <motion.p 
          className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-gray-200/90 max-w-3xl mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Premium urban essentials crafted for comfort, quality, and a modern silhouette.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center justify-center gap-3 md:gap-4">
            <Link
              to="/products"
              className="inline-block bg-blue-600 text-white px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg"
            >
              Shop New Arrivals
            </Link>
            <Link
              to="/products?sale=true"
              className="inline-block bg-white/10 backdrop-blur px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20 text-white"
            >
              View Sale
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 gap-4">
        <div className="flex items-center gap-2 text-sm bg-white/10 rounded-full px-3 py-1.5 border border-white/20">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Free shipping over $75
        </div>
        <div className="hidden lg:flex items-center gap-2 text-sm bg-white/10 rounded-full px-3 py-1.5 border border-white/20">
          30‑day easy returns
        </div>
      </div>
    </section>
  );
};

export default HeroSection;