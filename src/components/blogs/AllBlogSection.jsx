import React, { useState } from "react";
import BlogCard from "../BlogCard";
import BlogCategory from "./BlogCategory";
import CallToActionSection from "../../pages/CallToActionSection";

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
];

const AllBlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...new Set(dummyBlogs.map((b) => b.category))];

  const filteredBlogs =
    selectedCategory === "All"
      ? dummyBlogs
      : dummyBlogs.filter((b) => b.category === selectedCategory);

  return (
    <section className=" bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <BlogCategory
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <div key={blog.id}>
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>
      <CallToActionSection />
    </section>
  );
};

export default AllBlogSection;
