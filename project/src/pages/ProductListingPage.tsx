import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SortAsc } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../utils/mockData';
import { debounce } from '../utils/performance';
import { motion } from 'framer-motion';

const ProductListingPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    sale: searchParams.get('sale') === 'true'
  });

  // Sync filters with URL changes so switching Men/Women/Accessories/Sale updates the list
  useEffect(() => {
    setFilters({
      category: searchParams.get('category') || '',
      sale: searchParams.get('sale') === 'true'
    });
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Search removed

    // Category filter with Men/Women mapping
    if (filters.category) {
      const apparel = new Set(['tshirts', 'hoodies', 'jeans', 'sneakers']);
      if (filters.category === 'men' || filters.category === 'women') {
        filtered = filtered.filter(p => apparel.has(p.category));
      } else {
        filtered = filtered.filter(p => p.category.toLowerCase().includes(filters.category.toLowerCase()));
      }
    }

    // Sale filter
    if (filters.sale) {
      filtered = filtered.filter(p => p.originalPrice && p.originalPrice > p.price);
    }

    // Price filter removed

    // Size filter removed

    // Color filter removed

    // Sorting
    switch (sortBy) {
      case 'price-low':
        return filtered.sort((a, b) => a.price - b.price);
      case 'price-high':
        return filtered.sort((a, b) => b.price - a.price);
      case 'newest':
        return filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
      default:
        return filtered;
    }
  }, [filters, sortBy]);

  // removed: availableSizes/Colors

  // Search removed

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 md:py-6 lg:py-8">
        {/* Header */}
        <motion.div 
          className="mb-4 md:mb-6 lg:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
            {filters.category ? `${filters.category.charAt(0).toUpperCase() + filters.category.slice(1)} Collection` : 'All Products'}
          </h1>
          
          {/* Search removed */}
          
          <p className="text-sm md:text-base text-gray-600">
            Showing {filteredProducts.length} products
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          {/* Filters removed */}

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort and Filter Toggle */}
            <motion.div 
              className="flex justify-between items-center mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center space-x-2 text-gray-600 hover:text-gray-900 px-3 py-2 border border-gray-300 rounded-lg"
              >
                <Filter size={20} />
                <span className="text-sm md:text-base">Filters</span>
              </button>

              <div className="flex items-center space-x-2">
                <SortAsc size={20} className="text-gray-600" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-md px-2 md:px-3 py-1.5 md:py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </motion.div>

            {/* Products Grid */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.1 * (index % 9) // Stagger animation for first 9 items
                  }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>

            {filteredProducts.length === 0 && (
              <motion.div 
                className="text-center py-8 md:py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-gray-500 text-base md:text-lg">No products found matching your criteria.</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListingPage;