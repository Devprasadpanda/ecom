import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../hooks/useCart';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems } = useCart();
  const location = useLocation();

  const navLinks = [
    { name: 'Men', href: '/products?category=men' },
    { name: 'Women', href: '/products?category=women' },
    { name: 'Accessories', href: '/products?category=accessories' },
    { name: 'Sale', href: '/products?sale=true' }
  ];

  const isActive = (href: string) => location.search.includes(href.split('?')[1] || '');

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl md:text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
              Aura Collective
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-gray-700 hover:text-blue-600 px-2 lg:px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href) ? 'text-blue-600 border-b-2 border-blue-600' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <button className="hidden sm:block p-2 text-gray-700 hover:text-blue-600 transition-colors">
              <Search size={20} />
            </button>
            <button className="hidden sm:block p-2 text-gray-700 hover:text-blue-600 transition-colors">
              <User size={20} />
            </button>
            <Link 
              to="/cart" 
              className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <ShoppingBag size={20} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center text-xs font-medium">
                  {getTotalItems()}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-gray-700 hover:text-blue-600 px-4 py-3 text-base font-medium transition-colors border-l-4 ${
                    isActive(link.href) ? 'text-blue-600 border-blue-600 bg-blue-50' : 'border-transparent'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              {/* Mobile-only search and profile links */}
              <div className="border-t border-gray-200 mt-4 pt-4 px-4 space-y-3">
                <button className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors">
                  <Search size={20} />
                  <span className="text-base font-medium">Search</span>
                </button>
                <button className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors">
                  <User size={20} />
                  <span className="text-base font-medium">Account</span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;