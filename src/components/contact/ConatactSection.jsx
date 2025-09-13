import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Form */}
        <div className="bg-white rounded-3xl p-12 shadow-lg hover:shadow-xl transition-all">
          <h3 className="text-3xl font-extrabold text-custom-blue mb-8">
            Get in Touch
          </h3>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-custom-blue focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-custom-blue focus:outline-none"
              />
            </div>
            <input
              type="tel"
              placeholder="Your Phone"
              className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-custom-blue focus:outline-none"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-custom-blue focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-custom-blue text-white font-semibold py-3 rounded-xl hover:bg-custom-green transition"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="space-y-8">
          <div className="grid gap-6">
            {[
              { icon: <Phone className="w-5 h-5 text-white" />, title: "Phone", info: "+91 8200528355", bg: "bg-custom-blue" },
              { icon: <Mail className="w-5 h-5 text-white" />, title: "Email", info: "careandcomply@gmail.com", bg: "bg-custom-blue" },
              { icon: <MapPin className="w-5 h-5 text-white" />, title: "Office", info: "Akash Homes, Nr. Ujala Circle, S. G. Highway, Ahmedabad - 382210", bg: "bg-custom-blue" },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className={`p-3 rounded-xl ${item.bg} flex items-center justify-center`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-custom-blue">{item.title}</h4>
                  <p className="text-gray-700">{item.info}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.2018718062554!2d72.48761987407332!3d22.9796030179328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b3cf72e58e3%3A0xe580fa91265c3b99!2sAakash%20Homes!5e0!3m2!1sen!2sin!4v1750702121327!5m2!1sen!2sin"
              width="100%"
              height="320"
              className="border-0 w-full h-[320px]"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <div className="absolute bottom-4 left-4 bg-white/70 backdrop-blur-md rounded-lg p-3 shadow">
              <p className="font-semibold text-custom-blue">Visit Our Office</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
