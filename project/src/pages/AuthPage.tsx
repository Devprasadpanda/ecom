import React from 'react';
import { motion } from 'framer-motion';
import { SignIn, SignUp } from '@clerk/clerk-react';
import { CheckCircle } from 'lucide-react';
import { useAuthRedirect } from '../hooks/useAuthRedirect';

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = React.useState(true);
  const { isSignedIn } = useAuthRedirect('/auth-callback');

  const features = [
    'Free shipping on orders over ₹2000',
    'Exclusive member-only discounts',
    'Early access to sales and new releases',
    'Personalized style recommendations'
  ];

  // If user is already signed in, don't render the auth page
  if (isSignedIn) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <CheckCircle className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h1>
            <p className="text-gray-600">
              {isLogin ? 'Sign in to your account' : 'Join our community today'}
            </p>
          </div>

          {/* Clerk Auth Components */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center"
          >
            {isLogin ? (
              <SignIn 
                appearance={{
                  elements: {
                    formButtonPrimary: 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200',
                    card: 'bg-white border border-gray-200 rounded-xl shadow-sm p-6',
                    headerTitle: 'text-2xl font-bold text-gray-900',
                    headerSubtitle: 'text-gray-600',
                    socialButtonsBlockButton: 'border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors',
                    formFieldInput: 'w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200',
                    footerActionLink: 'text-blue-600 hover:text-blue-700 font-semibold',
                    dividerLine: 'bg-gray-300',
                    dividerText: 'text-gray-500 bg-white px-2'
                  }
                }}
              />
            ) : (
              <SignUp 
                appearance={{
                  elements: {
                    formButtonPrimary: 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200',
                    card: 'bg-white border border-gray-200 rounded-xl shadow-sm p-6',
                    headerTitle: 'text-2xl font-bold text-gray-900',
                    headerSubtitle: 'text-gray-600',
                    socialButtonsBlockButton: 'border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors',
                    formFieldInput: 'w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200',
                    footerActionLink: 'text-blue-600 hover:text-blue-700 font-semibold',
                    dividerLine: 'bg-gray-300',
                    dividerText: 'text-gray-500 bg-white px-2'
                  }
                }}
              />
            )}
          </motion.div>

          {/* Toggle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-8"
          >
            <p className="text-gray-600">
              {isLogin ? (
                <>
                  Don't have an account?{' '}
                  <button
                    onClick={() => setIsLogin(false)}
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Sign up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <button
                    onClick={() => setIsLogin(true)}
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Sign in
                  </button>
                </>
              )}
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Side - Features */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white p-12">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-md mx-auto flex flex-col justify-center"
        >
          <h2 className="text-4xl font-bold mb-6">Join Aura Collective</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Become part of our community and unlock exclusive benefits, early access to new collections, and personalized style recommendations.
          </p>
          
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-blue-100">{feature}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 p-6 bg-white/10 rounded-2xl backdrop-blur-sm"
          >
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50K+</div>
              <div className="text-blue-200">Happy Members</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AuthPage;


