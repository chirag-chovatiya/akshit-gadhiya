import React, { useState, useEffect } from "react";
import BlogCard from "../BlogCard";
import BlogCategory from "./BlogCategory";
import CallToActionSection from "../../pages/CallToActionSection";
import { getAllBlog, getAllCategory } from "../../service/blog-api";

const AllBlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [allBlogs, setAllBlogs] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [blogRes, catRes] = await Promise.all([getAllBlog(), getAllCategory()]);

        // ✅ Filter only active blogs (status true or 1)
        const fetchedBlogs =
          blogRes?.data?.posts?.filter(
            (blog) => blog.status === true || blog.status === 1
          ) ?? [];

        const fetchedCategories =
          catRes?.data?.posts?.map((cat) => cat.name) ?? [];

        setAllBlogs(fetchedBlogs);
        setBlogs(fetchedBlogs);
        setCategories(["All", ...fetchedCategories]);
      } catch (error) {
        console.error("Error fetching blogs or categories:", error);
        setAllBlogs([]);
        setBlogs([]);
        setCategories(["All"]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // ✅ Filter blogs when category changes
  useEffect(() => {
    setBlogs(
      selectedCategory === "All"
        ? allBlogs
        : allBlogs.filter((b) => b.category?.name === selectedCategory)
    );
  }, [selectedCategory, allBlogs]);

  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 py-12 flex flex-col items-center">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-gray-600">Loading blogs & categories...</p>
          </div>
        ) : (
          <>
            {/* Category Filter */}
            <div className="mb-12">
              <BlogCategory
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
            </div>

            {/* Blog Grid */}
            {blogs.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {blogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-600">
                No blogs found for this category.
              </div>
            )}
          </>
        )}
      </div>

      {/* CTA Section */}
      <CallToActionSection />
    </section>
  );
};

export default AllBlogSection;
