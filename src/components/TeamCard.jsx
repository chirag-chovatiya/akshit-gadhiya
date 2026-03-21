import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const TeamCard = ({ member, setMaxHeight, maxHeight }) => {
  const cardRef = useRef(null);

  // Measure height of each card and find the tallest one
  useEffect(() => {
    if (cardRef.current) {
      const height = cardRef.current.offsetHeight;
      setMaxHeight((prev) => Math.max(prev, height));
    }
  }, [setMaxHeight]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      style={{ height: maxHeight || "auto" }}
      className="group relative bg-gradient-to-br from-[#fff9e6] via-[#ffe9c3] to-[#fff] 
                 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl 
                 transition-all duration-500 transform hover:-translate-y-2 p-6 flex flex-col justify-between"
    >
      {/* Background glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 bg-gradient-to-r from-custom-orange via-orange-500 to-pink-500 blur-3xl opacity-30" />
      </div>

      {/* Floating Profile Image */}
      <div className="relative flex justify-center">
        <div className="relative w-28 h-28">
          <div className="absolute inset-0 bg-gradient-to-tr from-custom-orange to-pink-500 rounded-full blur-sm opacity-70 group-hover:opacity-100 transition-all duration-500" />
          <img
            src={member.image}
            alt={member.name}
            className="relative z-10 w-28 h-28 rounded-full object-cover border-[3px] border-white shadow-xl transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>

      {/* Member Info */}
      <div className="mt-6 text-center relative z-10 flex-1">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#0b1040] transition-colors">
          {member.name}
        </h3>
        <p className="text-[#ff8b00] font-semibold mt-1">{member.role}</p>
        <p className="mt-3 text-gray-600 text-sm leading-relaxed px-3">
          {member.description}
        </p>
      </div>

      {/* Animated Accent Line */}
      <motion.div
        initial={{ width: "0%" }}
        whileInView={{ width: "60%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mx-auto mt-6 h-1 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500"
      />
    </motion.div>
  );
};

export default TeamCard;
