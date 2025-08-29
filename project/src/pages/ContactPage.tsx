import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      title: 'Email Us',
      details: 'hello@auracollective.com',
      description: 'We\'ll respond within 24 hours'
    },
    {
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri, 9AM-6PM EST'
    },
    {
      title: 'Visit Us',
      details: '123 Fashion Ave, NYC',
      description: 'By appointment only'
    },
    {
      title: 'Response Time',
      details: '1-2 Business Days',
      description: 'For general inquiries'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 lg:px-8 py-16">
        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
              <p className="text-blue-600 font-medium mb-1">{info.details}</p>
              <p className="text-sm text-gray-600">{info.description}</p>
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Have a question or need assistance? Fill out the form and our team will get back to you within 1-2 business days.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                <div>
                  <h4 className="font-semibold text-blue-900">Quick Response</h4>
                  <p className="text-sm text-blue-700">We typically respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                <div>
                  <h4 className="font-semibold text-green-900">Expert Support</h4>
                  <p className="text-sm text-green-700">Our team is here to help with any questions</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4"></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600">Thank you for reaching out. We'll get back to you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center space-x-2 group"
                >
                  <div className="w-5 h-5 bg-white rounded"></div>
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 bg-gray-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Quick answers to common questions</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">What are your business hours?</h3>
              <p className="text-gray-600">We're available Monday through Friday, 9 AM to 6 PM EST.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">How quickly do you respond?</h3>
              <p className="text-gray-600">We typically respond to all inquiries within 24 hours.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">Do you offer bulk orders?</h3>
              <p className="text-gray-600">Yes, we offer special pricing for bulk orders. Contact us for details.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">Can I schedule a consultation?</h3>
              <p className="text-gray-600">Absolutely! We offer free consultations for custom orders and bulk purchases.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;


