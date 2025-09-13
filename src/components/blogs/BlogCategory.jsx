import React from "react";

const BlogCategory = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelectCategory(cat)}
          className={`px-5 py-2 rounded-full font-medium transition-all duration-300
            ${
              selectedCategory === cat
                ? "bg-custom-blue text-white shadow-md"
                : "bg-white text-custom-blue hover:bg-custom-light-blue hover:text-custom-blue shadow-sm"
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default BlogCategory;
