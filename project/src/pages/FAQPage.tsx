import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react';
import { useDebounce } from '../hooks/usePerformance';

const FAQPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  
  // Debounce search term for better performance
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const faqs = [
    {
      category: 'Shipping & Delivery',
      items: [
        {
          question: 'What are your shipping timelines?',
          answer: 'Orders ship within 1–2 business days. Standard delivery takes 3–7 business days, while express shipping (2-3 business days) is available for an additional fee. International shipping typically takes 7-14 business days depending on your location.'
        },
        {
          question: 'How do I track my order?',
          answer: 'You will receive a tracking link via email as soon as your order ships. You can also track your order through your account dashboard or by contacting our customer service team with your order number.'
        },
        {
          question: 'Do you offer international shipping?',
          answer: 'Yes, we ship worldwide! International shipping rates and delivery times vary by country. Duties and taxes may apply depending on your location. You can view shipping rates during checkout.'
        },
        {
          question: 'What shipping carriers do you use?',
          answer: 'We partner with reliable carriers including FedEx, UPS, and USPS for domestic shipping, and DHL and FedEx for international orders. The specific carrier is selected based on your location and shipping method.'
        }
      ]
    },
    {
      category: 'Returns & Exchanges',
      items: [
        {
          question: 'What is your return policy?',
          answer: 'We offer a 30-day return window for unworn items with original tags attached. Returns are free for domestic orders, and we provide prepaid shipping labels. International returns may incur shipping costs.'
        },
        {
          question: 'How long does it take to process a return?',
          answer: 'Once we receive your return, it takes 3-5 business days to process. Refunds are then issued to your original payment method and may take 5-10 business days to appear on your statement.'
        },
        {
          question: 'Can I exchange an item for a different size?',
          answer: 'Yes! Exchanges for different sizes are free and subject to availability. If the size you want is out of stock, we can process a return and you can place a new order when it\'s available.'
        }
      ]
    },
    {
      category: 'Product Information',
      items: [
        {
          question: 'How do I find the right size?',
          answer: 'We provide detailed size charts for all products. You can find these on each product page. If you\'re between sizes, we recommend sizing up for a more comfortable fit. Our customer service team is also happy to help with sizing recommendations.'
        },
        {
          question: 'Are your products sustainable?',
          answer: 'Yes! We\'re committed to sustainability and use eco-friendly materials whenever possible. Many of our products are made from organic cotton, recycled materials, and we work with suppliers who meet strict environmental standards.'
        },
        {
          question: 'Do you offer custom sizing?',
          answer: 'Currently, we offer standard sizing across all products. However, we\'re working on introducing custom sizing options for select items. Sign up for our newsletter to be notified when this becomes available.'
        }
      ]
    },
    {
      category: 'Account & Orders',
      items: [
        {
          question: 'How do I create an account?',
          answer: 'You can create an account during checkout or by visiting the "Sign Up" page. Having an account allows you to track orders, save favorites, and receive exclusive offers. Guest checkout is also available.'
        },
        {
          question: 'Can I modify or cancel my order?',
          answer: 'Orders can be modified or cancelled within 1 hour of placement, as long as they haven\'t been processed for shipping. Contact our customer service team immediately if you need to make changes.'
        },
        {
          question: 'Do you offer gift cards?',
          answer: 'Yes! Gift cards are available in various denominations and can be purchased online or in-store. They never expire and can be used for any purchase on our website or in our physical locations.'
        }
      ]
    }
  ];

  const toggleItem = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  // Memoize filtered FAQs for better performance
  const filteredFaqs = useMemo(() => {
    return faqs.map(category => ({
      ...category,
      items: category.items.filter(item =>
        item.question.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      )
    })).filter(category => category.items.length > 0);
  }, [debouncedSearchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed"
          >
            Find quick answers to common questions about our products, shipping, returns, and more.
          </motion.p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-16">
        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-lg"
            />
            {searchTerm && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm text-gray-400"
              >
                {filteredFaqs.reduce((total, category) => total + category.items.length, 0)} results
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {filteredFaqs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-purple-600 to-indigo-700 p-6 text-white">
                <h2 className="text-2xl font-bold">{category.category}</h2>
              </div>
              
              <div className="divide-y divide-gray-100">
                {category.items.map((item, itemIndex) => {
                  const globalIndex = categoryIndex * 100 + itemIndex;
                  const isExpanded = expandedItems.includes(globalIndex);
                  
  return (
                    <div key={itemIndex} className="p-6">
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full flex items-center justify-between text-left group"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors pr-4">
                          {item.question}
                        </h3>
                        <ChevronDown 
                          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4"
                          >
                            <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
            </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredFaqs.length === 0 && searchTerm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-600">Try searching with different keywords or browse our categories above.</p>
          </motion.div>
        )}

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-purple-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <HelpCircle className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-purple-100 mb-8 text-lg">
            Can't find what you're looking for? Our customer service team is here to help!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex flex-col items-center space-y-2">
              <MessageCircle className="w-8 h-8 text-purple-200" />
              <span className="text-sm text-purple-200">Live Chat</span>
              <span className="text-xs text-purple-300">Available 24/7</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Phone className="w-8 h-8 text-purple-200" />
              <span className="text-sm text-purple-200">Phone Support</span>
              <span className="text-xs text-purple-300">Mon-Fri, 9AM-6PM</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Mail className="w-8 h-8 text-purple-200" />
              <span className="text-sm text-purple-200">Email Support</span>
              <span className="text-xs text-purple-300">Response within 24h</span>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Live Chat
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              Contact Support
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQPage;


