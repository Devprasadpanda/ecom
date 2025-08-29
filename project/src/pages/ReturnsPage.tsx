import React from 'react';

const ReturnsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Returns & Exchanges</h1>
        <p className="text-gray-700 mb-6">30-day hassle-free returns on unworn items with original tags. Start your return via support and we’ll guide you through the process.</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Items must be in original condition with tags attached.</li>
          <li>Refunds are issued to the original payment method.</li>
          <li>Exchanges are subject to stock availability.</li>
        </ul>
      </div>
    </div>
  );
};

export default ReturnsPage;


