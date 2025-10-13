import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Users, Building, TrendingUp, Clock, Clipboard } from "lucide-react";

const statItems = [
  { icon: Users, number: 5000, text: "Clients Served", color: "text-yellow-400" },
  { icon: Building, number: 20, text: "Industries", color: "text-pink-500" },
  { icon: TrendingUp, number: 30, text: "Years Experience", color: "text-green-400" },
  { icon: Clock, number: 13, text: "Service Hrs/Day", color: "text-blue-400" },
  { icon: Clipboard, number: 10000, text: "Meetings & Advisory", color: "text-red-400" },
];

const StatsSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-custom-blue mb-6">
          Our Achievements
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mb-16">
          Delivering exceptional services and building strong client relationships across industries.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {statItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
                className="relative flex flex-col items-center p-8 rounded-3xl bg-custom-blue/90 backdrop-blur-lg shadow-lg hover:scale-105 transition-transform duration-500"
              >
                <div className={`p-5 rounded-full bg-white/10 mb-4 flex items-center justify-center`}>
                  <Icon className={`text-4xl ${item.color} animate-pulse`} />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
                  <CountUp 
                    start={0} 
                    end={item.number} 
                    duration={3} 
                    separator="," 
                    suffix="+" 
                    redraw={true} 
                  />
                </h3>

                <p className="text-gray-300 text-lg mb-5">{item.text}</p>
                <div className="mt-auto h-1 w-12 rounded-full bg-gradient-to-r from-custom-orange to-pink-500 animate-pulse"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
