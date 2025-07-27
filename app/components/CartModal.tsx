'use client';

import { useCart } from '../contexts/CartContext';
import { X, Plus, Minus, Trash2, CreditCard } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CartModal() {
  const { state, toggleCart, removeItem, updateQuantity, clearCart, getTotalItems, getTotalPrice, getTotalSavings } = useCart();

  if (!state.isOpen) return null;

  const formatPrice = (price: number) => {
    return `${price.toFixed(2)} лв.`;
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50"
        onClick={toggleCart}
      />
      
      {/* Modal */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Количка</h2>
            <button
              onClick={toggleCart}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {state.items.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Вашата количка е празна</h3>
                <p className="text-gray-500">Продължи с пазаруването</p>
              </div>
            ) : (
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={60}
                        height={60}
                        className="rounded-lg object-cover"
                      />
                    </div>
                    
                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 truncate">{item.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm text-gray-500 line-through">
                          {formatPrice(item.originalPrice)}
                        </span>
                        <span className="text-sm font-semibold text-pistachio-dark">
                          {formatPrice(item.price)}
                        </span>
                      </div>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-200 rounded transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-200 rounded transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="ml-auto p-1 hover:bg-red-100 rounded transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {state.items.length > 0 && (
            <div className="border-t border-gray-200 p-6">
              {/* Summary */}
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Количество:</span>
                  <span className="font-medium">{getTotalItems()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Спестени пари:</span>
                  <span className="font-medium text-green-600">
                    {formatPrice(getTotalSavings())}
                  </span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span>Общо:</span>
                  <span className="text-pistachio-dark">
                    {formatPrice(getTotalPrice())}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <Link
                  href="/checkout"
                  onClick={toggleCart}
                  className="w-full bg-pistachio-dark text-white py-3 px-4 rounded-lg font-semibold hover:bg-pistachio transition-colors flex items-center justify-center gap-2"
                >
                  <CreditCard className="w-4 h-4" />
                  Продължи с поръчката
                </Link>
                <button
                  onClick={clearCart}
                  className="w-full text-gray-600 py-2 px-4 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  Изчисти количката
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
} 