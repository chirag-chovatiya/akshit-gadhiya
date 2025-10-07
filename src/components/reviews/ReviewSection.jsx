import { Star } from "lucide-react";

const ReviewSection = () => {
  const stars = [1, 2, 3, 4, 5];
  const reviews = [
    {
      name: "Aarav Patel",
      rating: 5,
      comment:
        "Amazing experience! The quality and service were top-notch. Highly recommend!",
    },
    {
      name: "Priya Sharma",
      rating: 4,
      comment:
        "Very satisfied with my purchase. Delivery was fast and packaging was neat.",
    },
    {
      name: "Priya Sharma",
      rating: 4,
      comment:
        "Very satisfied with my purchase. Delivery was fast and packaging was neat.",
    },
    {
      name: "Priya Sharma",
      rating: 4,
      comment:
        "Very satisfied with my purchase. Delivery was fast and packaging was neat.",
    },
    {
      name: "Priya Sharma",
      rating: 4,
      comment:
        "Very satisfied with my purchase. Delivery was fast and packaging was neat.",
    },
    {
      name: "Priya Sharma",
      rating: 4,
      comment:
        "Very satisfied with my purchase. Delivery was fast and packaging was neat.",
    },
    {
      name: "Priya Sharma",
      rating: 4,
      comment:
        "Very satisfied with my purchase. Delivery was fast and packaging was neat.",
    },
  ];

  return (
    <section className="relative bg-gray-50 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-custom-blue mb-3">
          What Our Customers Say
        </h2>
        <p className="text-gray-600">
          Real experiences from people who love our service.
        </p>
      </div>

      <div className="container mx-auto mb-16">
        <div className="grid md:grid-cols-4 gap-8 mx-auto mb-16">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                {stars.map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${
                      star <= review.rating
                        ? "text-custom-green fill-custom-green"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">“{review.comment}”</p>
              <p className="font-semibold text-gray-900">— {review.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Review Form */}
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Share Your Review
        </h3>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Your Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Rating
            </label>
            <div className="flex gap-2">
              {stars.map((star) => (
                <Star
                  key={star}
                  className="w-6 h-6 text-gray-400 hover:text-yellow-400 hover:scale-110 transition-all cursor-pointer"
                />
              ))}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Your Review
            </label>
            <textarea
              rows="5"
              className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none"
              placeholder="Share your experience..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 rounded-lg transition-all"
          >
            Submit Review
          </button>
        </form>
      </div>
    </section>
  );
};

export default ReviewSection;
