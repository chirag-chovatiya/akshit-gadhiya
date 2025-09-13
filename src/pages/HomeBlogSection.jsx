import React from "react";

const dummyBlogs = [
  {
    id: 1,
    title: "The Importance of Regular Check-ups",
    excerpt:
      "Regular health check-ups are crucial for early detection and prevention of diseases...",
    image: "/images/blog/blog1.png",
    category: "Health",
    createdAt: "Sep 5, 2025",
  },
  {
    id: 2,
    title: "Understanding Your Medication: A Guide",
    excerpt:
      "Knowing your medications, their purpose, and potential side effects is vital for your health...",
    image: "/images/blog/blog2.png",
    category: "Health",
    createdAt: "Sep 2, 2025",
  },
  {
    id: 3,
    title: "Healthy Eating Habits for Seniors",
    excerpt:
      "Nutrition plays a key role in maintaining health and energy levels as we age...",
    image: "/images/blog/blog3.png",
    category: "Nutrition",
    createdAt: "Aug 28, 2025",
  },
  {
    id: 4,
    title: "Staying Active: Simple Exercises at Home",
    excerpt:
      "Even light physical activity can significantly improve your well-being and mobility...",
    image: "/images/blog/blog4.png",
    category: "Fitness",
    createdAt: "Aug 20, 2025",
  },
];

const BlogSection = () => {
  const [featured, ...others] = dummyBlogs;

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Our Latest Insights
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore expert health tips, guides, and stories.
          </p>
        </div>

        {/* Featured Blog Split Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl group">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <span className="absolute top-5 left-5 bg-custom-green text-white px-4 py-1 rounded-full text-xs font-semibold uppercase shadow">
              {featured.category}
            </span>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-custom-blue transition">
              {featured.title}
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {featured.excerpt}
            </p>
            <p className="text-sm text-gray-500 mb-6">
              📅 {featured.createdAt}
            </p>
            <a
              href="#"
              className="inline-block bg-custom-blue hover:bg-custom-green text-white px-8 py-3 rounded-full text-sm font-semibold transition shadow-lg"
            >
              Read Full Article →
            </a>
          </div>
        </div>

        {/* Other Blogs Masonry Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {others.map((blog, idx) => (
            <div
              key={blog.id}
              className="rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition transform hover:-translate-y-2"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
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
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 hover:text-custom-blue transition line-clamp-2">
                  {blog.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm line-clamp-3">
                  {blog.excerpt}
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
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="/blog"
            className="inline-block bg-custom-blue text-white px-10 py-3 rounded-full text-lg font-bold hover:bg-custom-green transition shadow-lg"
          >
            View All Insights
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
