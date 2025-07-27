import Image from 'next/image';
import { useState } from 'react';
import { CheckCircle, ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import Toast from './Toast';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  benefits: { title: string; description: string; }[];
  originalPrice: string;
  salePrice: string;
  salePriceEuro: string;
  ctaText: string;
  productImage: string;
  videoSrc: string;
}

export default function HeroSection({ 
  title, 
  subtitle, 
  benefits, 
  originalPrice, 
  salePrice, 
  salePriceEuro, 
  ctaText, 
  productImage, 
  videoSrc 
}: HeroSectionProps) {
  const { addItem } = useCart();
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = () => {
    // Convert price strings to numbers (remove currency and parse)
    const price = parseFloat(salePrice.replace(/[^\d.,]/g, '').replace(',', '.'));
    const originalPriceNum = parseFloat(originalPrice.replace(/[^\d.,]/g, '').replace(',', '.'));
    
    addItem({
      id: 0, // Hero section product ID
      title: 'NaturaVex - Energy & Libido',
      price,
      originalPrice: originalPriceNum,
      image: productImage,
    });

    // Show success message
    setToastMessage('NaturaVex е добавен в количката!');
    setShowToast(true);
  };

  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-pistachio-light to-white">
      <div className="absolute inset-0 w-full h-full z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-12 sm:pb-20 flex flex-col md:flex-row items-center gap-6 sm:gap-10 z-10">
        <div className="flex-1 order-2 md:order-1">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3 sm:mb-4 leading-tight text-white drop-shadow-lg">
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 text-white font-semibold">
            {subtitle}
          </p>
          <ul className="mb-6 sm:mb-8 space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg text-white font-medium">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-pistachio-light mt-0.5 sm:mt-1 flex-shrink-0" /> 
                <span className="text-sm sm:text-base">{benefit.title}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-pistachio backdrop-blur-sm text-white font-semibold rounded-lg shadow-lg border border-white/30 w-full sm:w-auto justify-center">
              <div className="flex items-center flex-wrap justify-center">
                <span className="line-through text-gray-300 mr-2 text-sm sm:text-lg">{originalPrice}</span>
                <span className="text-sm sm:text-lg font-bold">{salePrice}</span>
                <span className="text-xs text-gray-200 opacity-70 ml-2">({salePriceEuro})</span>
              </div>
            </div>
            <button 
              onClick={handleAddToCart}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-pistachio-dark text-white font-semibold rounded-lg shadow-lg hover:bg-pistachio transition text-base sm:text-lg w-full sm:w-auto justify-center"
            >
              <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
              {ctaText}
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center relative order-1 md:order-2 mb-6 sm:mb-8 md:mb-0">
          <div className="relative">
            <Image 
              src={productImage} 
              alt="NaturaVex продукт" 
              width={400}
              height={400}
              className="rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md border-4 border-pistachio-light bg-white" 
              priority
            />
          </div>
        </div>
      </div>
      <Toast 
        message={toastMessage}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </header>
  );
} 