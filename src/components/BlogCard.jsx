import React from "react";
import parse from "html-react-parser";
const BlogCard = ({ blog }) => {
  return (
    <div
      key={blog.id}
      className="flex flex-col h-full rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition transform hover:-translate-y-2"
    >
      {/* Image + Category */}
      <div className="relative h-56 flex-shrink-0">
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
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-gray-900 hover:text-custom-blue transition line-clamp-2">
          {blog.title}
        </h3>
        <div className="mt-3 text-gray-600 text-sm flex-1">
          {parse(blog.description.split("</p>")[0] + "</p>")}
        </div>

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
