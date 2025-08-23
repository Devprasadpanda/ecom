import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Aura Collective</h3>
            <p className="text-gray-400 mb-4 md:mb-6 max-w-md text-sm md:text-base">
              Premium urban fashion for the modern individual. Sustainable, stylish, and crafted with care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm md:text-base">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/returns" className="text-gray-400 hover:text-white transition-colors">Returns</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-4 text-sm md:text-base">Subscribe to get special offers and updates.</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 md:px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-white text-sm md:text-base"
              />
              <button
                type="submit"
                className="px-3 md:px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center text-sm md:text-base"
              >
                <Mail size={16} className="mr-2" />
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2025 Aura Collective. All rights reserved.
          </p>
          <div className="flex space-x-4 md:space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;