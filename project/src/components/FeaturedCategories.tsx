import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories } from '../utils/mockData';
import LazyImage from './LazyImage';

const FeaturedCategories: React.FC = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div 
          className="text-center mb-6 md:mb-8 lg:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Featured Categories
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Explore our carefully curated collections designed for the modern lifestyle
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                to={category.link}
                className="group block relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square bg-gray-200">
                  <LazyImage
                    src={category.image}
                    alt={category.name}
                    className="h-32 md:h-48 lg:h-64 w-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-sm md:text-lg lg:text-2xl font-bold text-white text-center group-hover:scale-105 transition-transform duration-300 px-2">
                    {category.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;