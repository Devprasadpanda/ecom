import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedCategories from '../components/FeaturedCategories';
import NewArrivals from '../components/NewArrivals';
import BrandPromise from '../components/BrandPromise';
import Testimonials from '../components/Testimonials';
import PromoBar from '../components/PromoBar';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <PromoBar />
      <HeroSection />
      <FeaturedCategories />
      <NewArrivals />
      <BrandPromise />
      <Testimonials />
    </div>
  );
};

export default HomePage;