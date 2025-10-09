import React from "react";

const Button = ({ text, onClick, href, className = "" }) => {
  const content = (
    <>
      <span className="relative z-10 block px-5 py-3 overflow-hidden leading-tight text-white font-bold transition-colors duration-300 ease-out rounded-lg group-hover:text-white">
        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-custom-blue"></span>
        <span className="absolute left-0 w-60 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-custom-orange group-hover:-rotate-180 ease"></span>
        <span className="relative">{text}</span>
      </span>
      <span
        className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-custom-orange rounded-lg group-hover:mb-0 group-hover:mr-0"
        data-rounded="rounded-lg"
      ></span>
    </>
  );

  const baseClasses = "relative inline-block text-base group " + className;

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
};

export default Button;
