import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <div
      key={blog.id}
      className="rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition transform hover:-translate-y-2"
    >
      {/* Image + Category */}
      <div className="relative h-56">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <span className="absolute top-4 left-4 bg-custom-green text-white px-3 py-1 rounded-full text-xs font-semibold uppercase shadow">
          {blog.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 hover:text-custom-blue transition line-clamp-2">
          {blog.title}
        </h3>
        <p className="mt-3 text-gray-600 text-sm line-clamp-3">
          {blog.description}
        </p>
        <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
          <span>📅 {blog.createdAt}</span>
          <a
            href="#"
            className="font-semibold text-custom-blue hover:text-custom-green transition"
          >
            Read →
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
