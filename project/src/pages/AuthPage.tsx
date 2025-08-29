import React, { useState } from 'react';

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white border rounded-xl shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
        <p className="text-gray-600 mb-6">{isLogin ? 'Sign in to your account' : 'Join our community today'}</p>
        <form className="space-y-3">
          {!isLogin && (
            <input className="w-full border rounded-md px-4 py-2" placeholder="Full name" />
          )}
          <input className="w-full border rounded-md px-4 py-2" placeholder="Email" type="email" />
          <input className="w-full border rounded-md px-4 py-2" placeholder="Password" type="password" />
          {isLogin && (
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2"><input type="checkbox" /> Remember me</label>
              <button type="button" className="text-blue-600">Forgot?</button>
            </div>
          )}
          <button type="button" className="w-full bg-blue-600 text-white py-2 rounded-md">{isLogin ? 'Sign In' : 'Create Account'}</button>
        </form>
        <div className="text-sm text-gray-600 mt-4">
          {isLogin ? (
            <span>Don’t have an account? <button onClick={() => setIsLogin(false)} className="text-blue-600">Sign Up</button></span>
          ) : (
            <span>Already have an account? <button onClick={() => setIsLogin(true)} className="text-blue-600">Sign In</button></span>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;


