'use client';

import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ProductVariants from './components/ProductVariants';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CartModal from './components/CartModal';
import { siteData } from './data/siteData';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-pistachio-light to-white min-h-screen text-gray-800">
      <Navigation phoneNumber={siteData.contact.phoneNumber} />
      
      <div className="h-16"></div>

      <HeroSection {...siteData.hero} />
      
      <FeaturesSection {...siteData.features} />
      
      <ProductVariants {...siteData.variants} />
      
      <FAQSection {...siteData.faq} />
      
      <Footer {...siteData.footer} />
      
      <ScrollToTop />
      <CartModal />
    </div>
  );
}
