import { useEffect, useState } from "react";

export default function Preloader() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const handleLoad = () => setShowLoader(false);
    window.addEventListener("load", handleLoad);

    const timer = setTimeout(() => setShowLoader(false), 1000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!showLoader) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center blue z-50">
      <div className="relative w-16 h-16">
        <div className="absolute w-full h-full border-4 border-t-custom-orange border-b-custom-orange border-l-transparent border-r-transparent rounded-full animate-spin shadow-lg"></div>
        <div className="absolute w-8 h-8 bg-custom-orange rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse shadow-md"></div>
      </div>
    </div>
  );
}
