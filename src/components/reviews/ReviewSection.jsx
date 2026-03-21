import React, { useEffect } from "react";

const ReviewSection = () => {
  useEffect(() => {
    // Reinitialize Elfsight if already loaded (useful for React re-renders)
    if (window.ElfsightApp) {
      window.ElfsightApp.init();
    }
  }, []);

  return (
    <section className="relative py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-custom-blue mb-3">
          What Our Customers Say
        </h2>
        <p className="text-gray-600">
          Real experiences from people who love our service.
        </p>
      </div>

      {/* ✅ Elfsight Google Reviews Widget */}
      <div className="container mx-auto">
        <div
          className="elfsight-app-aa22ccf8-f346-4541-91b2-5d25a5cd4535"
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
};

export default ReviewSection;
