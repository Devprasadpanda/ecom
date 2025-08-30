import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, ShoppingBag, Menu, X, LogOut } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { useAuth, useClerk } from '@clerk/clerk-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { getTotalItems } = useCart();
  const { isSignedIn, user } = useAuth();
  const { signOut } = useClerk();
  const location = useLocation();

  const navLinks = [
    { name: 'Men', href: '/products?category=men' },
    { name: 'Women', href: '/products?category=women' },
    { name: 'Accessories', href: '/products?category=accessories' },
    { name: 'Sale', href: '/products?sale=true' }
  ];

  const isActive = (href: string) => location.search.includes(href.split('?')[1] || '');

  const handleSignOut = () => {
    signOut();
    setIsProfileMenuOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
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
            
            {/* Authentication-aware user icon */}
            {isSignedIn ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  className="hidden sm:flex items-center space-x-2 p-2 text-gray-700 hover:text-blue-600 transition-colors rounded-lg hover:bg-gray-50"
                >
                  <User size={20} />
                  <span className="text-sm font-medium hidden lg:block">
                    {user?.firstName || 'Account'}
                  </span>
                </button>
                
                {/* Profile Dropdown */}
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      onClick={() => setIsProfileMenuOpen(false)}
                    >
                      My Profile
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors flex items-center space-x-2"
                    >
                      <LogOut size={16} />
                      <span>Sign Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/auth" className="hidden sm:block p-2 text-gray-700 hover:text-blue-600 transition-colors">
                <User size={20} />
              </Link>
            )}
            
            <Link 
              to="/cart" 
              className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <ShoppingBag size={20} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white rounded-full min-w-4 h-4 md:min-w-5 md:h-5 px-1 flex items-center justify-center text-[10px] md:text-xs font-semibold">
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
      </div>

            {/* Mobile Navigation - Full Screen Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-[60] bg-black/20 md:hidden" onClick={() => setIsMenuOpen(false)} />
          {/* Menu */}
          <div 
            className="fixed inset-0 z-[70] md:hidden shadow-2xl w-screen h-screen" 
            style={{ 
              backgroundColor: 'white',
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: '100vw',
              height: '100vh',
              zIndex: 70
            }}
          >
            <div 
              className="flex flex-col h-full w-full" 
              style={{ backgroundColor: 'white', height: '100vh', width: '100vw' }}
            >
                          {/* Header with close button */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white" style={{ backgroundColor: 'white' }}>
              <Link 
                to="/" 
                className="text-xl font-bold text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Aura Collective
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 px-4 py-6 bg-white" style={{ backgroundColor: 'white' }}>
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`block px-4 py-3 text-lg font-medium transition-colors border-l-4 ${
                      isActive(link.href) 
                        ? 'text-blue-600 border-blue-600 bg-blue-50' 
                        : 'text-gray-700 border-transparent hover:text-blue-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Mobile-only search and account links */}
              <div className="border-t border-gray-200 mt-8 pt-6 space-y-4">
                <button className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors w-full px-4 py-3">
                  <Search size={20} />
                  <span className="text-lg font-medium">Search</span>
                </button>
                
                {isSignedIn ? (
                  <>
                    <Link
                      to="/profile"
                      className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors w-full px-4 py-3"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <User size={20} />
                      <span className="text-lg font-medium">My Profile</span>
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="flex items-center space-x-3 text-red-600 hover:text-red-700 transition-colors w-full px-4 py-3"
                    >
                      <LogOut size={20} />
                      <span className="text-lg font-medium">Sign Out</span>
                    </button>
                  </>
                ) : (
                  <Link
                    to="/auth"
                    className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors w-full px-4 py-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User size={20} />
                    <span className="text-lg font-medium">Sign In</span>
                  </Link>
                )}
              </div>
            </nav>

            {/* Footer with cart */}
            <div className="border-t border-gray-200 p-4 bg-white" style={{ backgroundColor: 'white' }}>
              <Link
                to="/cart"
                className="flex items-center justify-between w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-lg font-medium">View Cart</span>
                {getTotalItems() > 0 && (
                  <span className="bg-white text-blue-600 rounded-full min-w-6 h-6 px-2 flex items-center justify-center text-sm font-semibold">
                    {getTotalItems()}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
        </>
      )}
      
      {/* Click outside to close profile menu */}
      {isProfileMenuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsProfileMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;