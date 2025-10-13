import React, { useRef, useEffect, useState } from "react";

const TeamCard = ({ member, setMaxHeight, index, maxHeight }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      setMaxHeight((prev) => Math.max(prev, cardRef.current.offsetHeight));
    }
  }, [setMaxHeight]);

  return (
    <div className="relative group cursor-pointer">
      <div
        ref={cardRef}
        style={{ height: maxHeight || "auto" }}
        className="relative bg-white rounded-3xl px-6 pt-2 pb-10 text-center flex flex-col items-center
             shadow-[0_10px_40px_rgba(11,16,64,0.3)]
             hover:shadow-[0_15px_60px_rgba(245,124,0,0.5)]
             transition-shadow duration-500"
      >
        {/* Profile Image */}
        <div className="w-28 h-28 rounded-full border-4 border-custom-orange overflow-hidden shadow-lg transform transition duration-500 group-hover:scale-110 group-hover:rotate-2">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name & Role */}
        <h3 className="text-xl font-bold text-[#0b1040] mt-6">{member.name}</h3>
        <p className="text-custom-orange font-semibold mt-1">{member.role}</p>

        {/* Description */}
        <p className="mt-4 text-gray-700 text-sm">{member.description}</p>

        {/* Bottom accent */}
        <div className="absolute -bottom-4 w-24 h-1 bg-gradient-to-r from-yellow-400 via-custom-orange to-pink-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default TeamCard;
