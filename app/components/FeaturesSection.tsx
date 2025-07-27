import { ArrowRight, Shield, Truck } from 'lucide-react';

interface FeaturesSectionProps {
  title: string;
  features: {
    icon: 'arrow-right' | 'shield' | 'truck';
    text: string;
    isHighlighted?: boolean;
  }[];
}

export default function FeaturesSection({ title, features }: FeaturesSectionProps) {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">{title}</h2>
        <div className="max-w-2xl mx-auto flex flex-col gap-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`flex items-start gap-3 text-lg md:text-xl rounded-xl p-5 shadow-lg transition-all duration-200 hover:shadow-xl ${
                feature.isHighlighted ? 'bg-pistachio-dark text-white' : 'bg-pistachio-light'
              }`}
            >
              {feature.icon === 'arrow-right' && (
                <ArrowRight className={`w-5 h-5 mt-1 ${feature.isHighlighted ? 'text-white' : 'text-pistachio-dark'}`} />
              )}
              {feature.icon === 'shield' && (
                <Shield className={`w-5 h-5 mt-1 ${feature.isHighlighted ? 'text-white' : 'text-pistachio-dark'}`} />
              )}
              {feature.icon === 'truck' && (
                <Truck className={`w-5 h-5 mt-1 ${feature.isHighlighted ? 'text-white' : 'text-pistachio-dark'}`} />
              )}
              <div>
                <div className="font-semibold">{feature.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 