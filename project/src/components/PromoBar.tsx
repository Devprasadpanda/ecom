import React from 'react';
import { Truck, Shield, RotateCcw } from 'lucide-react';

const PromoBar: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white relative z-40 w-full">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-2 md:py-2.5">
        <div className="flex items-center justify-center gap-2 md:gap-6 text-xs md:text-sm">
          <div className="flex items-center gap-1 md:gap-2 opacity-90 hover:opacity-100 transition-opacity">
            <Truck size={14} className="md:w-4 md:h-4 flex-shrink-0" />
            <span className="hidden sm:inline font-medium">Free shipping over $75</span>
            <span className="sm:hidden font-medium">Free shipping</span>
          </div>
          <div className="flex items-center gap-1 md:gap-2 opacity-90 hover:opacity-100 transition-opacity">
            <Shield size={14} className="md:w-4 md:h-4 flex-shrink-0" />
            <span className="hidden sm:inline font-medium">Secure checkout</span>
            <span className="sm:hidden font-medium">Secure</span>
          </div>
          <div className="flex items-center gap-1 md:gap-2 opacity-90 hover:opacity-100 transition-opacity">
            <RotateCcw size={14} className="md:w-4 md:h-4 flex-shrink-0" />
            <span className="hidden sm:inline font-medium">30‑day returns</span>
            <span className="sm:hidden font-medium">Returns</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBar;


