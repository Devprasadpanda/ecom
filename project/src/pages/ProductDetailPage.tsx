import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, 
  Heart, 
  Truck, 
  RotateCcw, 
  Shield, 
  Star,
  MapPin,
  Gift,
  Award,
  Clock,
  Check,
  Plus,
  Minus,
  Share2,
  Bookmark
} from 'lucide-react';
import { products } from '../utils/mockData';
import { useCart } from '../hooks/useCart';
import LazyImage from '../components/LazyImage';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addToCart } = useCart();

  // Initialize selected options when product loads
  React.useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0] || '');
      setSelectedColor(product.colors[0] || '');
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
          <button 
            onClick={() => navigate('/products')}
            className="text-blue-600 hover:text-blue-700 bg-blue-50 px-4 py-2 rounded-lg"
          >
            Back to products
          </button>
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

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 3);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-blue-600">Products</Link>
          <span>/</span>
          <span className="text-gray-900 capitalize">{product.category}</span>
          <span>/</span>
          <span className="text-gray-900 truncate max-w-xs">{product.name}</span>
        </nav>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Column 1: Image Gallery */}
          <div className="lg:col-span-5">
            <div className="sticky top-4">
              {/* Main Image */}
              <div className="relative mb-4">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden border">
                  <LazyImage
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-zoom-in"
                  />
                </div>
                
                {/* Image Controls */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2">
                  <button 
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`p-2 rounded-full shadow-md transition-colors ${
                      isWishlisted ? 'bg-red-500 text-white' : 'bg-white text-gray-600 hover:text-red-500'
                    }`}
                  >
                    <Heart size={20} fill={isWishlisted ? 'currentColor' : 'none'} />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md text-gray-600 hover:text-blue-600">
                    <Share2 size={20} />
                  </button>
                </div>

                {/* Discount Badge */}
                {product.originalPrice && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-md text-sm font-semibold">
                    {discountPercentage}% OFF
                  </div>
                )}
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-blue-500' : 'border-gray-200 hover:border-gray-300'
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

              {/* Additional Features */}
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Shield size={16} />
                  <span>2 Year Warranty</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <RotateCcw size={16} />
                  <span>30-day return policy</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Award size={16} />
                  <span>Authentic & Quality Assured</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Product Information */}
          <div className="lg:col-span-4">
            {/* Brand */}
            <div className="mb-2">
              <Link to={`/brand/aura-collective`} className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Visit the Aura Collective Store
              </Link>
            </div>

            {/* Product Title */}
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 leading-tight">
              {product.name}
            </h1>

            {/* Rating & Reviews */}
            {product.rating && (
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
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
                  <span className="text-sm font-medium text-gray-900">{product.rating}</span>
                </div>
                <Link to="#reviews" className="text-sm text-blue-600 hover:text-blue-700">
                  {product.reviews} ratings
                </Link>
                <span className="text-sm text-gray-500">|</span>
                <Link to="#qa" className="text-sm text-blue-600 hover:text-blue-700">
                  Ask a question
                </Link>
              </div>
            )}

            {/* Price Section */}
            <div className="mb-6">
              <div className="flex items-baseline space-x-2 mb-2">
                <span className="text-sm text-gray-600">Price:</span>
                <span className="text-3xl font-bold text-red-600">${product.price}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                    <span className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded">
                      Save ${product.originalPrice - product.price}
                    </span>
                  </>
                )}
              </div>
              <div className="text-sm text-gray-600">
                Inclusive of all taxes
              </div>
            </div>

            {/* Special Offers */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                <Gift size={16} className="mr-2 text-blue-600" />
                Special Offers
              </h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Bank Offer: 10% instant discount on HDFC Bank cards</li>
                <li>• No Cost EMI available on select cards</li>
                <li>• Exchange offer: Up to $50 off on exchange</li>
                <li>• Partner offers: Get GST invoice and save up to 28%</li>
              </ul>
            </div>

            {/* Product Details */}
            <div className="space-y-4 mb-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">About this item</h3>
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-900">Category:</span>
                  <span className="ml-2 text-gray-700 capitalize">{product.category}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Material:</span>
                  <span className="ml-2 text-gray-700">Premium Cotton</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Care:</span>
                  <span className="ml-2 text-gray-700">Machine Wash</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Origin:</span>
                  <span className="ml-2 text-gray-700">Made in USA</span>
                </div>
              </div>
            </div>

            {/* Size Guide */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900">Size</h3>
                <button className="text-sm text-blue-600 hover:text-blue-700">Size Guide</button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 px-3 border rounded-md text-sm font-medium transition-colors ${
                      selectedSize === size
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-gray-900 border-gray-300 hover:border-blue-600'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Color</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`py-2 px-4 border rounded-md text-sm font-medium transition-colors ${
                      selectedColor === color
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-gray-900 border-gray-300 hover:border-blue-600'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: Buy Box */}
          <div className="lg:col-span-3">
            <div className="sticky top-4">
              <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm">
                {/* Price in Buy Box */}
                <div className="mb-4">
                  <div className="flex items-baseline space-x-2 mb-1">
                    <span className="text-2xl font-bold text-red-600">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                  <div className="text-sm text-gray-600">& FREE Shipping</div>
                </div>

                {/* Stock Status */}
                <div className="mb-4">
                  <div className="flex items-center space-x-2 text-green-600 mb-2">
                    <Check size={16} />
                    <span className="text-sm font-medium">In Stock</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    Only 3 left in stock - order soon.
                  </div>
                </div>

                {/* Delivery Info */}
                <div className="mb-4 space-y-2">
                  <div className="flex items-start space-x-2">
                    <Truck size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <div className="font-medium text-gray-900">
                        FREE delivery {deliveryDate.toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="text-gray-600">Order within 4 hrs 23 mins</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <MapPin size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <button className="text-blue-600 hover:text-blue-700">
                        Deliver to New York 10001
                      </button>
                    </div>
                  </div>
                </div>

                {/* Exchange Offer */}
                <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="text-sm">
                    <div className="font-medium text-green-800 mb-1">Exchange Offer</div>
                    <div className="text-green-700">Up to $50 off on exchange</div>
                    <button className="text-blue-600 hover:text-blue-700 text-xs">
                      See all exchange offers
                    </button>
                  </div>
                </div>

                {/* Quantity Selector */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-900 mb-2">Quantity:</label>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-1 border border-gray-300 rounded hover:bg-gray-50"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-1 border border-gray-300 rounded hover:bg-gray-50"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 mb-4">
                  <button
                    onClick={handleAddToCart}
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    Add to Cart
                  </button>
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                    Buy Now
                  </button>
                </div>

                {/* Additional Options */}
                <div className="space-y-2 text-sm">
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                    <Bookmark size={16} />
                    <span>Add to List</span>
                  </button>
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                    <Gift size={16} />
                    <span>Give as a gift</span>
                  </button>
                </div>

                {/* Security Features */}
                <div className="mt-4 pt-4 border-t border-gray-200 space-y-2 text-xs text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Shield size={12} />
                    <span>Secure transaction</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award size={12} />
                    <span>Ships from Aura Collective</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check size={12} />
                    <span>Sold by Aura Collective</span>
                  </div>
                </div>
              </div>

              {/* Sponsored Products */}
              <div className="mt-6 border border-gray-300 rounded-lg p-4 bg-white shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-3">Frequently bought together</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-200 rounded"></div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">This item</div>
                      <div className="text-sm text-gray-600">${product.price}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-200 rounded"></div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">Related accessory</div>
                      <div className="text-sm text-gray-600">$29.99</div>
                    </div>
                  </div>
                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-2 px-4 rounded-lg transition-colors text-sm">
                    Add both to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-gray-900">{product.rating}</div>
                  <div className="flex justify-center items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={`${
                          i < Math.floor(product.rating!) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">{product.reviews} global ratings</div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {/* Sample Reviews */}
                <div className="border-b pb-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                      J
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="font-medium">John D.</span>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} className="text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 mb-2">
                        Excellent quality and perfect fit. The material feels premium and the design is exactly as shown. Highly recommended!
                      </p>
                      <div className="text-sm text-gray-500">Verified Purchase • 2 days ago</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;