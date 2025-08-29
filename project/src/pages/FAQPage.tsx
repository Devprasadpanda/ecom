import React from 'react';

const FAQPage: React.FC = () => {
  const faqs = [
    { q: 'What are your shipping timelines?', a: 'Orders ship within 1–2 business days. Delivery typically takes 3–7 days depending on location.' },
    { q: 'How do I track my order?', a: 'You will receive a tracking link via email as soon as your order ships.' },
    { q: 'Do you offer international shipping?', a: 'Yes, we ship worldwide. Duties/taxes may apply depending on your country.' },
  ];
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">FAQ</h1>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="p-4 border rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-1">{f.q}</h3>
              <p className="text-gray-700">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;


