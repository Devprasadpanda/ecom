import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../hooks/useCart';
import { useToast } from '../context/ToastContext';
import LazyImage from './LazyImage';
import { formatINR, toINR } from '../utils/currency';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.sizes[0], product.colors[0], 1);
    showToast('Added to cart');
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Add wishlist functionality here
    console.log('Added to wishlist:', product.name);
  };

  const handleOpenDetails = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div 
      onClick={handleOpenDetails}
      className="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col cursor-pointer"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleOpenDetails();
        }
      }}
    >
      <div className="aspect-square w-full overflow-hidden bg-gray-200 relative">
        <LazyImage
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
        {product.isNew && (
          <span className="absolute top-1 md:top-2 left-1 md:left-2 bg-blue-600 text-white px-1.5 md:px-2 py-0.5 md:py-1 text-xs font-medium rounded">
            New
          </span>
        )}
        {product.originalPrice && (
          <span className="absolute top-1 md:top-2 right-1 md:right-2 bg-red-500 text-white px-1.5 md:px-2 py-0.5 md:py-1 text-xs font-medium rounded">
            Sale
          </span>
        )}
      </div>

      <div className="p-2 md:p-3 lg:p-4 flex-1 flex flex-col">
        <h3 className="text-xs md:text-sm font-medium text-gray-900 mb-1 hover:text-blue-600 transition-colors line-clamp-2">
          {product.name}
        </h3>
        <p className="text-xs md:text-sm text-gray-500 mb-2 capitalize">{product.category}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center space-x-2 flex-1 min-w-0">
            <span className="text-sm md:text-base lg:text-lg font-semibold text-gray-900">
              {formatINR(toINR(product.price))}
            </span>
            {product.originalPrice && (
              <span className="text-xs md:text-sm text-gray-500 line-through">
                {formatINR(toINR(product.originalPrice))}
              </span>
            )}
          </div>
          
          <div className="flex items-center space-x-1 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity ml-2">
            <button
              onClick={handleAddToCart}
              className="p-1 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <ShoppingCart size={12} className="w-3 h-3" />
            </button>
            <button 
              onClick={handleWishlist}
              className="hidden md:block p-1 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center"
            >
              <Heart size={12} className="w-3 h-3" />
            </button>
          </div>
        </div>

        {product.rating && (
          <div className="flex items-center mt-1 md:mt-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-xs md:text-sm ${
                    i < Math.floor(product.rating!) ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1 hidden md:inline">({product.reviews})</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;