import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../hooks/useCart';
import LazyImage from './LazyImage';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, product.sizes[0], product.colors[0]);
  };

  return (
    <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square w-full overflow-hidden bg-gray-200 relative">
          <LazyImage
            src={product.images[0]}
            alt={product.name}
            className="h-40 md:h-48 lg:h-64 w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
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
      </Link>

      <div className="p-2 md:p-3 lg:p-4 flex-1 flex flex-col">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-xs md:text-sm font-medium text-gray-900 mb-1 hover:text-blue-600 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs md:text-sm text-gray-500 mb-2 capitalize">{product.category}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center space-x-2">
            <span className="text-sm md:text-base lg:text-lg font-semibold text-gray-900">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-xs md:text-sm text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          
          <div className="flex items-center space-x-1 md:space-x-2 opacity-0 md:group-hover:opacity-100 transition-opacity">
            <button
              onClick={handleAddToCart}
              className="p-1.5 md:p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              <ShoppingCart size={14} className="md:w-4 md:h-4" />
            </button>
            <button className="hidden md:block p-1.5 md:p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors">
              <Heart size={14} className="md:w-4 md:h-4" />
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