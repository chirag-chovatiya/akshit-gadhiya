import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const pricingPlans = [
    {
      name: 'Basic',
      price: '₹2,499',
      duration: 'month',
      features: ['Access to basic features', '5GB storage', 'Email support', 'Monthly reports'],
      buttonText: 'Get Started',
    },
    {
      name: 'Standard',
      price: '₹4,999',
      duration: 'month',
      features: [
        'Access to all basic features',
        '20GB storage',
        'Priority email support',
        'Weekly reports',
        'Customizable dashboards',
      ],
      buttonText: 'Start Standard',
      popular: true,
    },
    {
      name: 'Premium',
      price: '₹8,499',
      duration: 'month',
      features: [
        'Access to all standard features',
        'Unlimited storage',
        '24/7 phone & email support',
        'Daily reports',
        'Advanced analytics',
        'Dedicated account manager',
      ],
      buttonText: 'Go Premium',
    },
  ];

  return (
    <section className="py-20 relative bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-20 text-custom-blue">
          Choose Your Plan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-3xl p-10 bg-white/40 backdrop-blur-xl border border-gray-200 shadow-2xl transform transition-transform duration-500 hover:scale-105 hover:shadow-3xl`}
            >
              {/* Popular Ribbon */}
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-bold px-5 py-1 rounded-full shadow-lg uppercase tracking-wider animate-bounce">
                  Most Popular
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl md:text-3xl font-extrabold text-center text-custom-blue mb-6">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="text-center mb-10">
                <span className="text-3xl md:text-4xl font-extrabold text-custom-blue">{plan.price}</span>
                <span className="text-lg text-gray-500">/{plan.duration}</span>
              </div>

              {/* Features */}
              <ul className="mb-10 space-y-5">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-4 text-gray-700 group hover:text-custom-blue transition-all duration-300"
                  >
                    <Check className="w-6 h-6 text-green-500 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <Link
                to="/contact"
                className={`mt-auto py-3 rounded-xl text-center font-semibold transition-all duration-500 shadow-md hover:shadow-xl ${
                  plan.popular
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600'
                    : 'bg-gray-800 text-white hover:bg-gray-900'
                }`}
              >
                {plan.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
