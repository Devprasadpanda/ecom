import React from 'react';
import { motion } from 'framer-motion';
import { Truck, RotateCcw, Leaf, Shield } from 'lucide-react';

const BrandPromise: React.FC = () => {
  const promises = [
    {
      icon: <Leaf size={40} />,
      title: 'Sustainable Materials',
      description: 'Ethically sourced and environmentally conscious materials in every product.'
    },
    {
      icon: <Truck size={40} />,
      title: 'Free Shipping',
      description: 'Complimentary shipping on all orders over $75 worldwide.'
    },
    {
      icon: <RotateCcw size={40} />,
      title: 'Easy Returns',
      description: '30-day hassle-free returns and exchanges on all purchases.'
    },
    {
      icon: <Shield size={40} />,
      title: 'Quality Guarantee',
      description: 'Premium quality assured with our lifetime craftsmanship warranty.'
    }
  ];

  return (
    <section className="py-10 md:py-14 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div 
          className="text-center mb-6 md:mb-8 lg:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Our Promise
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            We're committed to delivering exceptional value and service
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {promises.map((promise, index) => (
            <motion.div
              key={index}
              className="text-center p-5 md:p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-blue-600 mb-3 md:mb-4 flex justify-center">
                <div className="w-10 h-10 md:w-12 md:h-12">
                  {React.cloneElement(promise.icon, { size: window.innerWidth >= 768 ? 40 : 32 })}
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                {promise.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {promise.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPromise;