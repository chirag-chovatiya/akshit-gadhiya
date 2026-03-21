import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CallToActionSection from "../../pages/CallToActionSection";
import BlogCard from "../BlogCard";
import Breadcrumb from "../breadcrumb/BreadCrumb";
import { getBlogById } from "../../service/blog-api";

const BlogDetailsSection = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const data = await getBlogById(id);
        setBlog(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-custom-blue">
            Loading Blog Details...
          </h2>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-red-500">
            Error loading blog: {error.message}
          </h2>
        </div>
        <CallToActionSection />
      </section>
    );
  }

  if (!blog) {
    return (
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-custom-blue">
            Blog Not Found
          </h2>
        </div>
        <CallToActionSection />
      </section>
    );
  }

  return (
    <>
      <Breadcrumb
        title="Our Latest Blogs"
        path={[
          { label: "Blog", href: "/blogs" },
          { label: "Blog Details" }, // no href for current page
        ]}
      />
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Floating Image */}
            <div className="relative">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-custom-blue px-3 py-1 rounded-full text-white text-xs font-semibold">
                {blog.category}
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-3">
                {blog.title}
              </h1>
              <p className="text-sm text-gray-500 mb-6">📅 {blog.createdAt}</p>
              <div
                className="prose prose-lg text-gray-700 max-w-none"
                dangerouslySetInnerHTML={{ __html: blog.description }}
              ></div>
            </div>
          </div>

          {/* Related Blogs Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-custom-blue mb-6 text-center">
              Related Blogs
            </h2>
            <p className="text-center text-custom-blue text-lg">
              Related blogs functionality needs to be implemented with an API.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsSection;
