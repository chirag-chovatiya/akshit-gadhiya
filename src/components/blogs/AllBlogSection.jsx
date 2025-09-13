import React, { useState } from "react";
import BlogCard from "../BlogCard";
import BlogCategory from "./BlogCategory";

const dummyBlogs = [
  {
    id: 1,
    title: "The Importance of Regular Check-ups",
    description:
      "Regular health check-ups are crucial for early detection and prevention of diseases...",
    image: "/images/blog/blog1.png",
    category: "Health",
    createdAt: "Sep 5, 2025",
  },
  {
    id: 2,
    title: "Understanding Your Medication: A Guide",
    description:
      "Knowing your medications, their purpose, and potential side effects is vital for your health...",
    image: "/images/blog/blog2.png",
    category: "Health",
    createdAt: "Sep 2, 2025",
  },
  {
    id: 3,
    title: "Healthy Eating Habits for Seniors",
    description:
      "Nutrition plays a key role in maintaining health and energy levels as we age...",
    image: "/images/blog/blog3.png",
    category: "Nutrition",
    createdAt: "Aug 28, 2025",
  },
  {
    id: 4,
    title: "Staying Active: Simple Exercises at Home",
    description:
      "Even light physical activity can significantly improve your well-being and mobility...",
    image: "/images/blog/blog4.png",
    category: "Fitness",
    createdAt: "Aug 20, 2025",
  },
];

const AllBlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...new Set(dummyBlogs.map((b) => b.category))];

  const filteredBlogs =
    selectedCategory === "All"
      ? dummyBlogs
      : dummyBlogs.filter((b) => b.category === selectedCategory);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Use the new CategoryFilter component */}
        <BlogCategory
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Blog Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <div key={blog.id}>
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllBlogSection;
