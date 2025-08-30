import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Package, RefreshCw, CreditCard, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const ReturnsPage: React.FC = () => {
  const returnSteps = [
    {
      icon: Package,
      title: 'Package Your Item',
      description: 'Ensure item is unworn with original tags attached',
      details: 'Place in original packaging if possible'
    },
    {
      icon: RefreshCw,
      title: 'Initiate Return',
      description: 'Contact our support team via email or chat',
      details: 'Include order number and reason for return'
    },
    {
      icon: ArrowRight,
      title: 'Get Return Label',
      description: 'We\'ll provide a prepaid shipping label',
      details: 'Print and attach to your package'
    },
    {
      icon: CreditCard,
      title: 'Refund Processed',
      description: 'Refund issued within 5-7 business days',
      details: 'Returned to original payment method'
    }
  ];

  const policies = [
    {
      icon: Clock,
      title: '30-Day Return Window',
      description: 'Returns accepted within 30 days of delivery',
      color: 'blue'
    },
    {
      icon: CheckCircle,
      title: 'Original Condition Required',
      description: 'Items must be unworn with tags attached',
      color: 'green'
    },
    {
      icon: AlertCircle,
      title: 'Final Sale Items',
      description: 'Sale and clearance items are non-returnable',
      color: 'orange'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-900 via-green-800 to-emerald-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Returns & Exchanges
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed"
          >
            Hassle-free returns on unworn items. We make it easy to get the perfect fit.
          </motion.p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 lg:px-8 py-16">
        {/* Return Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How Returns Work</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our simple 4-step return process ensures you get your refund quickly and easily.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {returnSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-700 mb-2">{step.description}</p>
                <p className="text-sm text-gray-500">{step.details}</p>
              </div>
              
              {index < returnSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-green-400" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Return Policies */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {policies.map((policy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              <div className={`w-16 h-16 bg-gradient-to-br from-${policy.color}-500 to-${policy.color}-600 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <policy.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{policy.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed">{policy.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Policy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Return Policy Details</h2>
            <p className="text-green-100 text-lg">
              Understanding our return policy helps ensure a smooth experience for everyone.
            </p>
          </div>
          
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Accept</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Items in original, unworn condition</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Original tags and packaging intact</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Returns within 30 days of delivery</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">All original accessories included</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Don't Accept</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Worn or damaged items</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Missing tags or packaging</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Final sale or clearance items</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Personalized or custom orders</span>
                  </li>
        </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Need Help with Your Return?</h3>
          <p className="text-blue-100 mb-6 text-lg">
            Our customer support team is here to help you with any questions about returns or exchanges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Support
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Live Chat
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ReturnsPage;


