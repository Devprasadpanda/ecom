import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone, ShieldCheck, CreditCard } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-3">Aura Collective</h3>
            <p className="text-gray-400 mb-6 max-w-lg text-sm md:text-base">
              Premium urban fashion for the modern individual. Sustainable, stylish, and crafted with care.
            </p>
            <div className="flex items-center gap-4 text-gray-300">
              <a href="#" aria-label="Instagram" className="hover:text-white transition-colors"><Instagram size={18} /></a>
              <a href="#" aria-label="Facebook" className="hover:text-white transition-colors"><Facebook size={18} /></a>
              <a href="#" aria-label="Twitter" className="hover:text-white transition-colors"><Twitter size={18} /></a>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300">
              <div className="flex items-center gap-2"><MapPin size={16} /><span>Mumbai, IN</span></div>
              <div className="flex items-center gap-2"><Phone size={16} /><span>+91 98765 43210</span></div>
              <div className="flex items-center gap-2"><ShieldCheck size={16} /><span>Secure Payments</span></div>
              <div className="flex items-center gap-2"><CreditCard size={16} /><span>UPI / Cards / NetBanking</span></div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/returns" className="text-gray-300 hover:text-white transition-colors">Returns</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-3 text-sm">Subscribe to get special offers and updates.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2.5 bg-[#111827] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-white text-sm"
              />
              <button
                type="submit"
                className="w-full px-4 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center text-sm"
              >
                <Mail size={16} className="mr-2" />
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs md:text-sm">© 2025 Aura Collective. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs md:text-sm">
            <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link>
            <span className="hidden md:inline text-gray-600">|</span>
            <span className="text-gray-400">Made with ❤️ in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;