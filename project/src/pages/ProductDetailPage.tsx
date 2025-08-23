import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Heart, Truck, RotateCcw, Shield, Star } from 'lucide-react';
import { products } from '../utils/mockData';
import { useCart } from '../hooks/useCart';
import LazyImage from '../components/LazyImage';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
          <Link to="/products" className="text-blue-600 hover:text-blue-700">
            Back to products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select size and color');
      return;
    }
    addToCart(product, selectedSize, selectedColor, quantity);
    alert('Added to cart!');
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 md:py-6 lg:py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-xs md:text-sm text-gray-500 mb-4 md:mb-6 lg:mb-8">
          <Link to="/" className="hover:text-gray-700">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-gray-700">Products</Link>
          <span>/</span>
          <span className="text-gray-900 truncate">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Product Images */}
          <div>
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden mb-3 md:mb-4">
              <LazyImage
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-64 md:h-80 lg:h-96 object-cover object-center cursor-zoom-in hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-blue-600' : 'border-gray-200'
                  }`}
                >
                  <LazyImage
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="mt-6 lg:mt-0">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">{product.name}</h1>
            
            {/* Rating */}
            {product.rating && (
              <div className="flex items-center mb-3 md:mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${
                        i < Math.floor(product.rating!) 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-xs md:text-sm text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            )}

            {/* Price */}
            <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-6">
              <span className="text-2xl md:text-3xl font-bold text-gray-900">${product.price}</span>
              {product.originalPrice && (
                <span className="text-lg md:text-xl text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">{product.description}</p>

            {/* Size Selection */}
            <div className="mb-4 md:mb-6">
              <h3 className="text-sm md:text-base font-medium text-gray-900 mb-2 md:mb-3">Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 md:px-4 py-2 border rounded-md text-sm font-medium transition-colors ${
                      selectedSize === size
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-gray-900 border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-4 md:mb-6">
              <h3 className="text-sm md:text-base font-medium text-gray-900 mb-2 md:mb-3">Color</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-3 md:px-4 py-2 border rounded-md text-sm font-medium transition-colors ${
                      selectedColor === color
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-gray-900 border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-4 md:mb-6">
              <h3 className="text-sm md:text-base font-medium text-gray-900 mb-2 md:mb-3">Quantity</h3>
              <select
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>

            {/* Add to Cart */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mb-6 md:mb-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm md:text-base"
              >
                Add to Cart
              </button>
              <button className="sm:w-auto px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center">
                <Heart size={20} />
                <span className="ml-2 sm:hidden">Add to Wishlist</span>
              </button>
            </div>

            {/* Features */}
            <div className="space-y-3 md:space-y-4 border-t pt-4 md:pt-6 lg:pt-8">
              <div className="flex items-center space-x-3">
                <Truck size={18} className="md:w-5 md:h-5 text-blue-600 flex-shrink-0" />
                <span className="text-xs md:text-sm text-gray-600">Free shipping on orders over $75</span>
              </div>
              <div className="flex items-center space-x-3">
                <RotateCcw size={18} className="md:w-5 md:h-5 text-blue-600 flex-shrink-0" />
                <span className="text-xs md:text-sm text-gray-600">30-day returns</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield size={18} className="md:w-5 md:h-5 text-blue-600 flex-shrink-0" />
                <span className="text-xs md:text-sm text-gray-600">2-year warranty</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-8 md:mt-12 lg:mt-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-4 md:space-x-8 overflow-x-auto">
              {['description', 'materials', 'shipping'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-3 md:py-4 text-sm font-medium border-b-2 whitespace-nowrap ${
                    activeTab === tab
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-4 md:py-6 lg:py-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {product.description} This premium piece is designed with attention to detail and crafted from the finest materials. Perfect for everyday wear or special occasions, it combines style and comfort effortlessly.
                </p>
              </div>
            )}
            {activeTab === 'materials' && (
              <div className="prose max-w-none">
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Made from 100% sustainable materials with eco-friendly production processes. Machine washable with cold water. Hang dry recommended to maintain shape and quality.
                </p>
              </div>
            )}
            {activeTab === 'shipping' && (
              <div className="prose max-w-none">
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Standard shipping (5-7 business days): Free on orders over $75, otherwise $5.99. Express shipping (2-3 business days): $12.99. Overnight shipping: $24.99.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;