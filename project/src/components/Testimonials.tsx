import React from 'react';
import { motion } from 'framer-motion';
import { customers } from '../utils/mockData';

const Testimonials: React.FC = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div 
          className="text-center mb-6 md:mb-8 lg:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            What Our Customers Say
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Join thousands of satisfied customers who love our products
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {customers.map((customer, index) => (
            <motion.div
              key={customer.id}
              className="bg-gray-50 p-4 md:p-6 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-3 md:mb-4">
                {[...Array(customer.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-base md:text-lg">★</span>
                ))}
              </div>
              <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 italic leading-relaxed">
                "{customer.quote}"
              </p>
              <p className="text-sm md:text-base font-semibold text-gray-900">
                {customer.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;