import React from "react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const PricingSection = () => {
  const plans = [
    {
      name: "Basic",
      price: "₹2,499",
      duration: "month",
      features: ["Basic features", "5GB storage", "Email support"],
      border: "border-cyan-400",
      glow: "hover:shadow-cyan-500/50",
    },
    {
      name: "Standard",
      price: "₹4,999",
      duration: "month",
      features: [
        "All basic features",
        "20GB storage",
        "Priority support",
        "Weekly reports",
      ],
      border: "border-yellow-400",
      glow: "hover:shadow-yellow-400/50",
      popular: true,
    },
    {
      name: "Premium",
      price: "₹8,499",
      duration: "month",
      features: [
        "All standard features",
        "Unlimited storage",
        "24/7 support",
        "Advanced analytics",
      ],
      border: "border-pink-500",
      glow: "hover:shadow-pink-500/50",
    },
  ];

  return (
    <section className="py-16 bg-custom-blue/80 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-white mb-16">
          Choose Your Power Plan
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative flex flex-col justify-between rounded-3xl border ${plan.border} p-10 bg-gray-900/50 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:${plan.glow} hover:border-white`}
            >
              <div>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-custom-orange text-black px-4 py-1 text-xs font-bold rounded-full uppercase tracking-wide">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-center mb-4 text-custom-orange">
                  {plan.name}
                </h3>
                <div className="text-center mb-8">
                  <span className="text-3xl font-extrabold text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-400">/{plan.duration}</span>
                </div>
                <ul className="space-y-3 mb-8 text-gray-300">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center">
                      <Check className="text-yellow-400 w-5 h-5 mr-2" /> {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* button always at bottom */}
              <Link
                to="/contact"
                className="block text-center py-3 bg-custom-orange text-white font-semibold rounded-xl hover:scale-105 transition-transform shadow-md hover:shadow-yellow-400/60 mt-auto"
              >
                {plan.popular ? "Upgrade Now" : "Select Plan"}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
