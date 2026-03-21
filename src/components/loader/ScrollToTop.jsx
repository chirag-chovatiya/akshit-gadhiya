import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 700);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showTopBtn && (
      <button
        onClick={goToTop}
        className="
          fixed bottom-8 right-8
          w-10 h-10
          bg-custom-orange
          text-white
          rounded-2xl
          flex justify-center items-center
          shadow-xl
          hover:bg-custom-blue
          hover:shadow-[0_0_20px_#0b1040]
          transform transition-all duration-300
          animate-bounce-slow
          z-50
        "
      >
        <i className="fas fa-arrow-up text-lg drop-shadow-md"></i>
      </button>
    )
  );
}
