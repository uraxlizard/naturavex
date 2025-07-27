'use client';

import { useState } from 'react';
import { PhoneCall, Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface NavigationProps {
  phoneNumber: string;
}

export default function Navigation({ phoneNumber }: NavigationProps) {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const { toggleCart, getTotalItems } = useCart();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/40 border-b border-pistachio-light shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Phone number left */}
        <div className="flex items-center gap-2">
          <a href={`tel:${phoneNumber}`} className="text-lg md:text-xl font-bold text-pistachio-dark tracking-tight flex items-center gap-2 hover:underline">
            <PhoneCall className="w-5 h-5 text-pistachio-dark" />
            <span className="hidden sm:inline">{phoneNumber}</span>
          </a>
        </div>
        
        {/* Nav, basket right */}
        <div className="flex items-center gap-2">
          {/* Hamburger for mobile */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setOpenMobileMenu(!openMobileMenu)} 
              className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pistachio-dark"
              aria-label="Toggle mobile menu"
            >
              {!openMobileMenu ? (
                <Menu className="h-7 w-7 text-pistachio-dark" />
              ) : (
                <X className="h-7 w-7 text-pistachio-dark" />
              )}
            </button>
            
            {/* Mobile dropdown */}
            {openMobileMenu && (
              <div className="absolute top-16 left-0 w-full bg-white/90 backdrop-blur-md border-b border-pistachio-light shadow-md md:hidden z-40">
                <ul className="flex flex-col gap-2 py-4 px-6 font-semibold text-gray-700">
                  <li><a href="#" className="block py-2 hover:text-pistachio-dark transition">Начало</a></li>
                  <li><a href="#features" className="block py-2 hover:text-pistachio-dark transition">Защо NaturaVex</a></li>
                  <li><a href="#variants" className="block py-2 hover:text-pistachio-dark transition">Варианти</a></li>
                  <li><a href="#faq" className="block py-2 hover:text-pistachio-dark transition">ЧЗВ</a></li>
                </ul>
              </div>
            )}
          </div>
          
          {/* Desktop menu links */}
          <ul className="hidden md:flex gap-8 font-semibold text-gray-700">
            <li><a href="#" className="hover:text-pistachio-dark transition">Начало</a></li>
            <li><a href="#features" className="hover:text-pistachio-dark transition">Защо NaturaVex</a></li>
            <li><a href="#variants" className="hover:text-pistachio-dark transition">Варианти</a></li>
            <li><a href="#faq" className="hover:text-pistachio-dark transition">ЧЗВ</a></li>
          </ul>
          
          {/* Basket always visible */}
          <button 
            onClick={toggleCart}
            className="relative group ml-4 flex items-center" 
            aria-label="Shopping cart"
          >
            <ShoppingCart className="w-7 h-7 text-pistachio-dark group-hover:text-pistachio transition" />
            <span className="absolute -top-2 -right-2 bg-pistachio-dark text-white text-xs rounded-full px-1.5 py-0.5 font-bold shadow">
              {getTotalItems()}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
} 