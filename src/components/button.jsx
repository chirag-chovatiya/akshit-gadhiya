import React from "react";

const Button = ({ text, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-400 font-semibold py-2 px-6 rounded-full transition duration-300 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
