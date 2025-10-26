import React, { useState, useEffect } from "react";
import BlogCard from "../BlogCard";
import BlogCategory from "./BlogCategory";
import CallToActionSection from "../../pages/CallToActionSection";
import { getAllBlog } from "../../service/blog-api"; // Import the API call

const AllBlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const response = await getAllBlog(currentPage, selectedCategory);
        if (response && response.data && response.data.posts) {
          console.log("Fetched Blogs:", response.data.posts);
          setBlogs(response.data.posts);
          setTotalPages(response.data.totalPages);
          // Extract categories from fetched blogs
          const uniqueCategories = [
            "All",
            ...new Set(response.data.posts.map((b) => b.category)),
          ];
          setCategories(uniqueCategories);
        } else {
          setBlogs([]);
          setTotalPages(1);
          setCategories(["All"]);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setBlogs([]);
        setTotalPages(1);
        setCategories(["All"]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [currentPage, selectedCategory]); // Re-fetch when page or category changes

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when category changes
  };

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`mx-1 px-3 py-1 rounded ${
            currentPage === i ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {i}
        </button>
      );
    }
    return (
      <div className="flex justify-center mt-8">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="mx-1 px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
        >
          Previous
        </button>
        {pageNumbers}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="mx-1 px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <section className=" bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <BlogCategory
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategorySelect}
        />
        {loading ? (
          <div className="text-center py-8">Loading blogs...</div>
        ) : blogs.length > 0 ? (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <div key={blog.id}>
                  <BlogCard blog={blog} />
                </div>
              ))}
            </div>
            {totalPages > 1 && renderPagination()}
          </>
        ) : (
          <div className="text-center py-8">No blogs found.</div>
        )}
      </div>
      <CallToActionSection />
    </section>
  );
};

export default AllBlogSection;
