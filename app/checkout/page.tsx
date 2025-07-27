'use client';

import { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { ArrowLeft, CreditCard, Truck, Shield, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function CheckoutPage() {
  const { state, clearCart } = useCart();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    notes: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  // Constants
  const BGN_TO_EUR_RATE = 1.95583;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      // Here you would integrate with your payment processor
      alert('Поръчката е успешно обработена!');
      clearCart();
    }, 2000);
  };

  const total = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = state.items.length > 0 ? 5.90 : 0;
  const grandTotal = total + shipping;
  const totalEuro = (total / BGN_TO_EUR_RATE).toFixed(2);
  const shippingEuro = (shipping / BGN_TO_EUR_RATE).toFixed(2);
  const grandTotalEuro = (grandTotal / BGN_TO_EUR_RATE).toFixed(2);

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pistachio-light to-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <CheckCircle className="w-16 h-16 text-pistachio-dark mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Вашата количка е празна</h1>
            <p className="text-gray-800 mb-6">Добавете продукти в количката, за да продължите с поръчката.</p>
            <Link 
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-pistachio-dark text-white font-semibold rounded-lg hover:bg-pistachio transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Назад към продуктите
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pistachio-light to-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-pistachio-dark hover:text-pistachio font-semibold mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Назад към продуктите
          </Link>
          <h1 className="text-3xl font-bold text-gray-800">Финализиране на поръчката</h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="lg:order-2">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Съдържание на поръчката</h2>
              
              <div className="space-y-4 mb-6">
                {state.items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <Image 
                      src={item.image} 
                      alt={item.title}
                      width={60}
                      height={60}
                      className="rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{item.title}</h3>
                      <p className="text-sm text-gray-800">Количество: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-pistachio-dark">{(item.price * item.quantity).toFixed(2)} лв.</p>
                      {item.originalPrice > item.price && (
                        <p className="text-sm text-gray-400 line-through">
                          {(item.originalPrice * item.quantity).toFixed(2)} лв.
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-pistachio-dark font-medium">Междинна сума:</span>
                  <span className="text-gray-800 font-semibold">{total.toFixed(2)} лв. ({totalEuro} €)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-pistachio-dark font-medium">Доставка:</span>
                  <span className="text-gray-800 font-semibold">{shipping.toFixed(2)} лв. ({shippingEuro} €)</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-pistachio-dark border-t pt-2">
                  <span>Обща сума:</span>
                  <span>{grandTotal.toFixed(2)} лв. ({grandTotalEuro} €)</span>
                </div>
              </div>

              {/* Security badges */}
              <div className="mt-6 pt-4 border-t">
                <div className="flex items-center justify-center gap-4 text-sm text-gray-800">
                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4 text-pistachio-dark" />
                    <span>Сигурна поръчка</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Truck className="w-4 h-4 text-pistachio-dark" />
                    <span>Бърза доставка</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="lg:order-1">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Данни за доставка</h2>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1">
                    Име *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 text-gray-800 rounded-lg focus:ring-2 focus:ring-pistachio-dark focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1">
                    Фамилия *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 text-gray-800 rounded-lg focus:ring-2 focus:ring-pistachio-dark focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1">
                    Имейл *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 text-gray-800 rounded-lg focus:ring-2 focus:ring-pistachio-dark focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 text-gray-800 rounded-lg focus:ring-2 focus:ring-pistachio-dark focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-800 mb-1">
                  Адрес *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 text-gray-800 rounded-lg focus:ring-2 focus:ring-pistachio-dark focus:border-transparent"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1">
                    Град *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 text-gray-800 rounded-lg focus:ring-2 focus:ring-pistachio-dark focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1">
                    Пощенски код *
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 text-gray-800 rounded-lg focus:ring-2 focus:ring-pistachio-dark focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-800 mb-1">
                  Забележка (опционално)
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 text-gray-800 rounded-lg focus:ring-2 focus:ring-pistachio-dark focus:border-transparent"
                  placeholder="Допълнителни инструкции за доставка..."
                />
              </div>

              {/* Payment Section */}
              <div className="border-t pt-6 mb-6">
                <h3 className="text-lg font-semibold text-pistachio-dark mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-pistachio-dark" />
                  Начин на плащане
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="payment" value="cash" defaultChecked className="text-pistachio-dark" />
                    <span className="font-medium text-pistachio-dark">Наложен платеж</span>
                  </label>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="mb-6">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                    className="mt-1 w-4 h-4 text-pistachio-dark border-gray-300 rounded focus:ring-pistachio-dark"
                  />
                  <span className="text-sm text-gray-800">
                    Приемам <a href="#" className="text-pistachio-dark hover:underline font-medium">Общите условия</a> и <a href="#" className="text-pistachio-dark hover:underline font-medium">Политиката за поверителност</a>
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing || !acceptTerms}
                className="w-full bg-pistachio-dark text-white font-semibold py-3 px-6 rounded-lg hover:bg-pistachio transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Обработване...
                  </>
                ) : (
                  <>
                    <CreditCard className="w-4 h-4" />
                    Финализирай поръчката - {grandTotal.toFixed(2)} лв. ({grandTotalEuro} €)
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 