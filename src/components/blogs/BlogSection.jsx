import React from "react";

const AllBlogSection = () => {
  return (
      <section className="blog-section py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/images/blog/blog1.png" alt="Blog 1" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">The Importance of Regular Check-ups</h3>
                <p className="text-gray-600 text-sm mb-4">Learn why routine health examinations are crucial for maintaining your well-being and detecting potential issues early.</p>
                <a href="#" className="text-blue-600 hover:underline">Read More</a>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/images/blog/blog2.png" alt="Blog 2" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Understanding Mental Health: A Comprehensive Guide</h3>
                <p className="text-gray-600 text-sm mb-4">Explore the various aspects of mental health, common conditions, and strategies for promoting emotional well-being.</p>
                <a href="#" className="text-blue-600 hover:underline">Read More</a>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/images/blog/blog3.png" alt="Blog 3" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Healthy Eating Habits for a Better Life</h3>
                <p className="text-gray-600 text-sm mb-4">Discover practical tips and nutritional advice to adopt a balanced diet and improve your overall health.</p>
                <a href="#" className="text-blue-600 hover:underline">Read More</a>
              </div>
            </div>

            {/* Blog Post 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/images/blog/blog4.png" alt="Blog 4" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">The Benefits of Regular Exercise</h3>
                <p className="text-gray-600 text-sm mb-4">Understand how incorporating physical activity into your daily routine can boost your energy, mood, and physical health.</p>
                <a href="#" className="text-blue-600 hover:underline">Read More</a>
              </div>
            </div>

            {/* Blog Post 5 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/images/blog/blog5.png" alt="Blog 5" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Managing Chronic Conditions: A Patient's Guide</h3>
                <p className="text-gray-600 text-sm mb-4">Gain insights into effective strategies for living with and managing chronic health conditions to improve quality of life.</p>
                <a href="#" className="text-blue-600 hover:underline">Read More</a>
              </div>
            </div>

            {/* Blog Post 6 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/images/blog/blog6.png" alt="Blog 6" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">The Role of Sleep in Overall Health</h3>
                <p className="text-gray-600 text-sm mb-4">Explore the critical importance of adequate sleep for physical and mental restoration, and tips for better sleep hygiene.</p>
                <a href="#" className="text-blue-600 hover:underline">Read More</a>
              </div>
            </div>

            {/* Blog Post 7 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/images/blog/blog7.png" alt="Blog 7" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Preventative Care: Staying Ahead of Illness</h3>
                <p className="text-gray-600 text-sm mb-4">Learn about the various preventative measures you can take to reduce your risk of illness and maintain long-term health.</p>
                <a href="#" className="text-blue-600 hover:underline">Read More</a>
              </div>
            </div>

            {/* Blog Post 8 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/images/blog/blog8.png" alt="Blog 8" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">The Impact of Stress on Your Body</h3>
                <p className="text-gray-600 text-sm mb-4">Understand how stress affects your physical and mental health, and discover effective coping mechanisms.</p>
                <a href="#" className="text-blue-600 hover:underline">Read More</a>
              </div>
            </div>

            {/* Blog Post 9 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/images/blog/blog9.png" alt="Blog 9" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Vaccinations: Protecting Yourself and Your Community</h3>
                <p className="text-gray-600 text-sm mb-4">Learn about the importance of vaccinations in preventing infectious diseases and promoting public health.</p>
                <a href="#" className="text-blue-600 hover:underline">Read More</a>
              </div>
            </div>

            {/* Blog Post 10 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/images/blog/blog10.png" alt="Blog 10" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">The Benefits of Hydration for Health</h3>
                <p className="text-gray-600 text-sm mb-4">Discover why staying adequately hydrated is essential for various bodily functions and overall well-being.</p>
                <a href="#" className="text-blue-600 hover:underline">Read More</a>
              </div>
            </div>

            {/* Blog Post 11 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/images/blog/blog11.png" alt="Blog 11" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Understanding Allergies: Causes, Symptoms, and Treatment</h3>
                <p className="text-gray-600 text-sm mb-4">Gain comprehensive knowledge about allergies, including their triggers, common symptoms, and effective management strategies.</p>
                <a href="#" className="text-blue-600 hover:underline">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default AllBlogSection;
