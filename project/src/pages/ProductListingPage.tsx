import React, { useState, useMemo } from 'react';
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
    priceRange: [0, 500],
    sizes: [] as string[],
    colors: [] as string[]
  });

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (filters.category) {
      if (filters.category === 'men') {
        filtered = filtered.filter(product => 
          ['tshirts', 'hoodies', 'jeans', 'sneakers'].includes(product.category)
        );
      } else if (filters.category === 'women') {
        filtered = filtered.filter(product => 
          ['tshirts', 'hoodies', 'jeans', 'sneakers'].includes(product.category)
        );
      } else {
        filtered = filtered.filter(product => 
          product.category.toLowerCase().includes(filters.category.toLowerCase())
        );
      }
    }

    // Price filter
    filtered = filtered.filter(product => 
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    );

    // Size filter
    if (filters.sizes.length > 0) {
      filtered = filtered.filter(product =>
        product.sizes.some(size => filters.sizes.includes(size))
      );
    }

    // Color filter
    if (filters.colors.length > 0) {
      filtered = filtered.filter(product =>
        product.colors.some(color => filters.colors.includes(color))
      );
    }

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

  const availableSizes = [...new Set(products.flatMap(p => p.sizes))];
  const availableColors = [...new Set(products.flatMap(p => p.colors))];

  // Debounced search handler
  const debouncedSearch = useMemo(
    () => debounce((term: string) => setSearchTerm(term), 300),
    []
  );

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
          
          {/* Search Bar */}
          <div className="mb-3 md:mb-4">
            <input
              type="text"
              placeholder="Search products..."
              onChange={(e) => debouncedSearch(e.target.value)}
              className="w-full max-w-md px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
          
          <p className="text-sm md:text-base text-gray-600">
            Showing {filteredProducts.length} products
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          {/* Filters Sidebar */}
          <motion.div 
            className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'} ${showFilters ? 'mb-4' : ''}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">Filters</h3>
              
              {/* Price Range */}
              <div className="mb-4 md:mb-6">
                <h4 className="text-sm md:text-base font-medium text-gray-900 mb-2">Price Range</h4>
                <div className="flex items-center space-x-2">
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={filters.priceRange[1]}
                    onChange={(e) => setFilters(prev => ({
                      ...prev,
                      priceRange: [0, parseInt(e.target.value)]
                    }))}
                    className="w-full"
                  />
                  <span className="text-sm text-gray-600">${filters.priceRange[1]}</span>
                </div>
              </div>

              {/* Sizes */}
              <div className="mb-4 md:mb-6">
                <h4 className="text-sm md:text-base font-medium text-gray-900 mb-2">Size</h4>
                <div className="space-y-2">
                  {availableSizes.map(size => (
                    <label key={size} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.sizes.includes(size)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFilters(prev => ({
                              ...prev,
                              sizes: [...prev.sizes, size]
                            }));
                          } else {
                            setFilters(prev => ({
                              ...prev,
                              sizes: prev.sizes.filter(s => s !== size)
                            }));
                          }
                        }}
                        className="mr-2"
                      />
                      <span className="text-sm text-gray-700">{size}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div className="mb-4 md:mb-6">
                <h4 className="text-sm md:text-base font-medium text-gray-900 mb-2">Color</h4>
                <div className="space-y-2">
                  {availableColors.map(color => (
                    <label key={color} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.colors.includes(color)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFilters(prev => ({
                              ...prev,
                              colors: [...prev.colors, color]
                            }));
                          } else {
                            setFilters(prev => ({
                              ...prev,
                              colors: prev.colors.filter(c => c !== color)
                            }));
                          }
                        }}
                        className="mr-2"
                      />
                      <span className="text-sm text-gray-700">{color}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

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