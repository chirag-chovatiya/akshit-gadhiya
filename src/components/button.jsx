import React from "react";

const Button = ({ text, onClick, href, className = "" }) => {
  const baseClasses =
    "bg-blue-400 font-semibold py-2 px-6 rounded-full transition duration-300 inline-block";

  // If href prop is passed → render <a>
  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${className}`}>
        {text}
      </a>
    );
  }

  // Otherwise render <button>
  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {text}
    </button>
  );
};

export default Button;
