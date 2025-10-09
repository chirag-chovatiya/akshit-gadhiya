import React from "react";
import { motion } from "framer-motion";

const Button = ({
  text = "Click Me",
  onClick,
  href,
  bgColor = "bg-blue-400",
  textColor = "text-white",
  padding = "py-2 px-6",
  rounded = "rounded-full",
  font = "font-semibold",
  hoverBgColor = "bg-blue-500",
  className = "",
}) => {
  const baseClasses = `${bgColor} ${textColor} ${padding} ${rounded} ${font} transition duration-300 inline-block relative overflow-hidden`;

  const textVariants = {
    initial: { y: 0 },
    hover: { y: -4 },
  };

  // If href prop is passed → render <a>
  if (href) {
    return (
      <a
        href={href}
        className={`${baseClasses} ${className} group`}
      >
        <motion.span
          variants={textVariants}
          initial="initial"
          whileHover="hover"
          className="relative z-10"
        >
          {text}
        </motion.span>
        <span className={`absolute inset-0 ${hoverBgColor} opacity-0 group-hover:opacity-20 transition duration-300 rounded-full`}></span>
      </a>
    );
  }

  // Otherwise render <button>
  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${className} group`}
    >
      <motion.span
        variants={textVariants}
        initial="initial"
        whileHover="hover"
        className="relative z-10"
      >
        {text}
      </motion.span>
      <span className={`absolute inset-0 ${hoverBgColor} opacity-0 group-hover:opacity-20 transition duration-300 rounded-full`}></span>
    </button>
  );
};

export default Button;
