import React from "react";
import bgImage from "../images/Contact.png";

const ContactSection: React.FC = () => {
  return (
    <section
      className="w-full bg-cover bg-left bg-no-repeat px-6 md:px-16 py-8 md:py-12"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        
        {/* LEFT CONTENT */}
        <div className="flex-1 text-gray-900">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Book Your Free AC Offer Now!
          </h1>
          <p className="text-base md:text-lg max-w-lg leading-relaxed">
            We are here to help with all your appliance service, repair,
            and rental needs. Whether you have questions.
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="flex-1 bg-white/95 p-6 md:p-8 rounded-2xl shadow-xl w-full max-w-xl">
          <h2 className="text-center text-2xl font-semibold text-blue-700 mb-6">
            Fill Your Details!
          </h2>

          <form className="space-y-4">
            
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <input
              type="email"
              placeholder="E-mail"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              placeholder="Message"
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>

            <div className="flex items-center gap-3">
              <div className="px-4 py-3 bg-gray-200 rounded-lg font-semibold">
                7 + 4 =
              </div>
              <input
                type="text"
                placeholder="Captcha"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold transition"
            >
              Submit
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;