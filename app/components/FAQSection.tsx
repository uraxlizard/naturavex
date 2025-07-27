'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQSectionProps {
  title: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

export default function FAQSection({ title, faqs }: FAQSectionProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">{title}</h2>
        <div className="text-lg md:text-xl text-gray-800">
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-pistachio-light">
                <button 
                  onClick={() => toggleFAQ(index)} 
                  className="w-full text-left py-4 flex items-center justify-between font-bold focus:outline-none focus:ring-2 focus:ring-pistachio-dark rounded-lg px-2"
                  aria-expanded={openFAQ === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span>{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 ml-2 transition-transform duration-200 ${openFAQ === index ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                <div 
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pb-4 pl-2 text-base md:text-lg">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 