import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import ScrollToTop from './components/ScrollToTop';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ReturnsPage from './pages/ReturnsPage';
import FAQPage from './pages/FAQPage';
import AuthPage from './pages/AuthPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-['Poppins',sans-serif]">
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductListingPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<ShoppingCartPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/returns" element={<ReturnsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/auth" element={<AuthPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;