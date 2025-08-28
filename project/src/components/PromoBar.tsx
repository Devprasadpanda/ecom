import React from 'react';
import { Truck, Shield, RotateCcw } from 'lucide-react';

const PromoBar: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-2.5">
        <div className="flex items-center justify-center gap-6 text-xs md:text-sm">
          <div className="flex items-center gap-2 opacity-90">
            <Truck size={16} />
            <span>Free shipping over $75</span>
          </div>
          <div className="hidden md:flex items-center gap-2 opacity-90">
            <Shield size={16} />
            <span>Secure checkout</span>
          </div>
          <div className="hidden md:flex items-center gap-2 opacity-90">
            <RotateCcw size={16} />
            <span>30‑day returns</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBar;


