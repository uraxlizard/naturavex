import Image from 'next/image';
import { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { ShoppingCart } from 'lucide-react';
import Toast from './Toast';

interface ProductVariant {
  id: number;
  image: string;
  title: string;
  originalPrice: string;
  salePrice: string;
  savings: string;
  originalPriceEuro: string;
  salePriceEuro: string;
  savingsEuro: string;
  ctaText: string;
}

interface ProductVariantsProps {
  title: string;
  variants: ProductVariant[];
}

export default function ProductVariants({ title, variants }: ProductVariantsProps) {
  const { addItem } = useCart();
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = (variant: ProductVariant) => {
    // Convert price strings to numbers (remove currency and parse)
    const price = parseFloat(variant.salePrice.replace(/[^\d.,]/g, '').replace(',', '.'));
    const originalPrice = parseFloat(variant.originalPrice.replace(/[^\d.,]/g, '').replace(',', '.'));
    
    addItem({
      id: variant.id,
      title: variant.title,
      price,
      originalPrice,
      image: variant.image,
    });

    // Show success message
    setToastMessage(`${variant.title} е добавен в количката!`);
    setShowToast(true);
  };

  return (
    <section className="py-20 bg-pistachio-light/40" id="variants">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {variants.map((variant, index) => (
            <div key={variant.id} className="relative">
              {/* Popular badge - positioned outside the card */}
              {index === 1 && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-pistachio-dark text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg z-10">
                  НАЙ-ПОПУЛЯРЕН
                </div>
              )}
              
              {/* Main card */}
              <div className={`bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-2 hover:shadow-xl transition-all duration-300 h-full ${
                index === 1 ? 'border-pistachio-dark shadow-xl' : 'border-pistachio-light'
              }`}>
                
                {/* Image section */}
                <div className="mb-4">
                  <Image 
                    src={variant.image} 
                    alt={`NaturaVex продукт - ${variant.title}`} 
                    width={112}
                    height={112}
                    className="w-28 h-28 object-contain rounded-xl border border-pistachio-light bg-white" 
                  />
                </div>
                
                {/* Title section */}
                <div className="mb-4 min-h-[3.5rem] flex items-center">
                  <h3 className="font-bold text-base leading-tight">{variant.title}</h3>
                </div>
                
                {/* Pricing section */}
                <div className="mb-6 flex flex-col items-center justify-center min-h-[4.5rem]">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-xl font-extrabold text-pistachio-dark">{variant.salePrice}</span>
                    <span className="line-through text-gray-400 text-base">{variant.originalPrice}</span>
                    <span className="text-xs text-gray-500 opacity-70">({variant.salePriceEuro})</span>
                  </div>
                  <div className="text-xs text-pistachio-dark font-semibold text-center">
                    Спестяваш {variant.savings} <span className="text-xs text-gray-500">({variant.savingsEuro})</span>
                  </div>
                </div>
                
                {/* Button section */}
                <div className="mt-auto">
                  <button 
                    onClick={() => handleAddToCart(variant)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-pistachio-dark text-white font-semibold rounded-lg shadow hover:bg-pistachio transition-colors duration-200"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    {variant.ctaText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Toast 
        message={toastMessage}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </section>
  );
} 