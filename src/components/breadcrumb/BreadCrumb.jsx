import { Link } from "react-router-dom";
import { Home, ChevronRight } from "lucide-react";

const Breadcrumb = ({ title, path = [] }) => {
  const fullPath = [{ label: "Home", href: "/" }, ...path];

  return (
    <div className="relative w-full h-52 flex items-center justify-center text-white mt-16 bg-custom-blue backdrop-blur-sm">
      {/* Content */}
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-wide drop-shadow-lg">
          {title}
        </h1>

        {/* Breadcrumb Trail */}
        <div className="mt-4 flex justify-center items-center flex-wrap text-sm md:text-base font-medium">
          {fullPath.map((item, index) => (
            <div key={index} className="flex items-center text-white">
              {index === 0 ? (
                <Home size={16} className="mr-1" />
              ) : (
                <ChevronRight size={16} className="mx-2" />
              )}
              {item.href ? (
                <Link
                  to={item.href}
                  className="hover:underline hover:text-primary transition duration-300"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-300">{item.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
