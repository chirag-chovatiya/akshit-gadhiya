import React from "react";
import { useParams } from "react-router-dom";
import CallToActionSection from "../../pages/CallToActionSection";
import BlogCard from "../BlogCard";
import Breadcrumb from "../breadcrumb/BreadCrumb";

const dummyBlogs = [
  {
    id: 1,
    title: "Understanding Income Tax: A Beginner's Guide",
    description: `
      <p>Income tax can be complicated, but understanding the basics helps you manage your finances effectively.</p>
      <ul>
        <li>Know your tax slab.</li>
        <li>File returns on time.</li>
        <li>Claim eligible deductions.</li>
      </ul>
      <p>Consulting a CA can save time and avoid penalties.</p>
    `,
    image: "/images/blog/blog1.png",
    category: "Tax",
    createdAt: "Sep 5, 2025",
  },
  {
    id: 2,
    title: "GST Compliance Made Easy",
    description: `
      <p>Goods and Services Tax (GST) is mandatory for most businesses. Staying compliant avoids legal trouble.</p>
      <ol>
        <li>Register for GST if your turnover exceeds the limit.</li>
        <li>File monthly/quarterly GST returns.</li>
        <li>Maintain proper invoices and records.</li>
      </ol>
      <p>A professional CA ensures your GST compliance is always up-to-date.</p>
    `,
    image: "/images/blog/blog2.png",
    category: "GST",
    createdAt: "Sep 2, 2025",
  },
  {
    id: 3,
    title: "Financial Planning for Small Businesses",
    description: `
      <p>Small business owners often struggle with managing cash flow and taxes.</p>
      <ul>
        <li>Create a clear budget and stick to it.</li>
        <li>Keep track of expenses and revenue.</li>
        <li>Plan for tax payments in advance.</li>
      </ul>
      <p>A CA can help with bookkeeping, tax planning, and financial advice.</p>
    `,
    image: "/images/blog/blog3.png",
    category: "Finance",
    createdAt: "Aug 28, 2025",
  },
  {
    id: 4,
    title: "Audit Preparedness: Tips for Businesses",
    description: `
      <p>Audits can be stressful if your records are disorganized.</p>
      <ul>
        <li>Maintain clear and accurate financial statements.</li>
        <li>Ensure proper documentation for all transactions.</li>
        <li>Regularly reconcile accounts.</li>
      </ul>
      <p>Engaging a CA before an audit can make the process smooth and hassle-free.</p>
    `,
    image: "/images/blog/blog4.png",
    category: "Audit",
    createdAt: "Aug 20, 2025",
  },
  {
    id: 5,
    title: "Audit Preparedness: Tips for Businesses",
    description: `
      <p>Audits can be stressful if your records are disorganized.</p>
      <ul>
        <li>Maintain clear and accurate financial statements.</li>
        <li>Ensure proper documentation for all transactions.</li>
        <li>Regularly reconcile accounts.</li>
      </ul>
      <p>Engaging a CA before an audit can make the process smooth and hassle-free.</p>
    `,
    image: "/images/blog/blog4.png",
    category: "Audit",
    createdAt: "Aug 20, 2025",
  },
];

const BlogDetailsSection = () => {
  const { id } = useParams();
  const blog = dummyBlogs.find((b) => b.id === parseInt(id));

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
          {/* Related Blogs Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-custom-blue mb-6 text-center">
              Related Blogs
            </h2>

            {dummyBlogs.filter(
              (b) => b.category === blog.category && b.id !== blog.id
            ).length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {dummyBlogs
                  .filter(
                    (b) => b.category === blog.category && b.id !== blog.id
                  )
                  .slice(0, 3) // Display up to 3 related blogs
                  .map((relatedBlog) => (
                    <BlogCard key={relatedBlog.id} blog={relatedBlog} />
                  ))}
              </div>
            ) : (
              <p className="text-center text-custom-blue text-lg">
                No Related Blog Found
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsSection;
