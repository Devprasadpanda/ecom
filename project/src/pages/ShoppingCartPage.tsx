import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import LazyImage from '../components/LazyImage';
import { formatINR, toINR } from '../utils/currency';

const ShoppingCartPage: React.FC = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, getTotalItems, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center px-4">
          <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-sm md:text-base text-gray-600 mb-6">Add some products to get started!</p>
          <Link
            to="/products"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm md:text-base"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 md:py-6 lg:py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 lg:mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="px-4 md:px-6 py-3 md:py-4 border-b border-gray-200">
                <h2 className="text-base md:text-lg font-medium text-gray-900">
                  Cart Items ({getTotalItems()})
                </h2>
              </div>

              <div className="divide-y divide-gray-200">
                {cartItems.map((item, index) => (
                  <div key={index} className="p-4 md:p-6">
                    {/* Mobile Layout */}
                    <div className="flex flex-col md:hidden space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <LazyImage
                            src={item.product.images[0]}
                            alt={item.product.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <Link
                            to={`/product/${item.product.id}`}
                            className="text-sm font-medium text-gray-900 hover:text-blue-600 line-clamp-2"
                          >
                            {item.product.name}
                          </Link>
                          <p className="text-xs text-gray-500 mt-1">
                            {item.selectedSize}, {item.selectedColor}
                          </p>
                          <p className="text-sm font-semibold text-gray-900 mt-1">
                            {formatINR(toINR(item.product.price))}
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(
                            item.product.id,
                            item.selectedSize,
                            item.selectedColor
                          )}
                          className="text-red-600 hover:text-red-700 p-1"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(
                              item.product.id,
                              item.selectedSize,
                              item.selectedColor,
                              item.quantity - 1
                            )}
                            className="p-1 rounded-full hover:bg-gray-100"
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(
                              item.product.id,
                              item.selectedSize,
                              item.selectedColor,
                              item.quantity + 1
                            )}
                            className="p-1 rounded-full hover:bg-gray-100"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <p className="text-sm font-semibold text-gray-900">
                          {formatINR(toINR(item.product.price * item.quantity))}
                        </p>
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden md:flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <LazyImage
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-16 md:w-20 h-16 md:h-20 object-cover rounded-lg"
                      />
                    </div>

                    <div className="flex-1">
                      <Link
                        to={`/product/${item.product.id}`}
                        className="text-base md:text-lg font-medium text-gray-900 hover:text-blue-600"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-sm text-gray-500 mt-1">
                        {item.selectedSize}, {item.selectedColor}
                      </p>
                      <p className="text-base md:text-lg font-semibold text-gray-900 mt-2">
                        {formatINR(toINR(item.product.price))}
                      </p>
                    </div>

                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => updateQuantity(
                          item.product.id,
                          item.selectedSize,
                          item.selectedColor,
                          item.quantity - 1
                        )}
                        className="p-1 rounded-full hover:bg-gray-100"
                        disabled={item.quantity <= 1}
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(
                          item.product.id,
                          item.selectedSize,
                          item.selectedColor,
                          item.quantity + 1
                        )}
                        className="p-1 rounded-full hover:bg-gray-100"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="text-base md:text-lg font-semibold text-gray-900">
                        {formatINR(toINR(item.product.price * item.quantity))}
                      </p>
                      <button
                        onClick={() => removeFromCart(
                          item.product.id,
                          item.selectedSize,
                          item.selectedColor
                        )}
                        className="text-red-600 hover:text-red-700 mt-2"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Clear Cart */}
              <div className="px-4 md:px-6 py-3 md:py-4 border-t border-gray-200 flex justify-end">
                <button
                  onClick={clearCart}
                  className="text-red-600 hover:text-red-700 text-sm md:text-base font-medium"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
              <h2 className="text-base md:text-lg font-medium text-gray-900 mb-4">Order Summary</h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm md:text-base text-gray-600">Subtotal</span>
                  <span className="text-sm md:text-base font-medium">{formatINR(toINR(getTotalPrice()))}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm md:text-base text-gray-600">Shipping</span>
                  <span className="text-sm md:text-base font-medium text-green-600">Free</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between">
                    <span className="text-base md:text-lg font-medium">Total</span>
                    <span className="text-base md:text-lg font-bold">{formatINR(toINR(getTotalPrice()))}</span>
                  </div>
                </div>
              </div>

              <button className="w-full mt-6 bg-blue-600 text-white py-3 px-4 rounded-lg text-sm md:text-base font-medium hover:bg-blue-700 transition-colors">
                Proceed to Checkout
              </button>

              <Link
                to="/products"
                className="block w-full mt-3 text-center text-blue-600 hover:text-blue-700 text-sm md:text-base font-medium"
              >
                Continue Shopping
              </Link>
            </div>

            {/* Features */}
            <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mt-4 md:mt-6">
              <h3 className="text-base md:text-lg font-medium text-gray-900 mb-4">Why Shop With Us?</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>• Free shipping on orders over $75</li>
                <li>• 30-day hassle-free returns</li>
                <li>• Secure payment processing</li>
                <li>• Premium quality guarantee</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;