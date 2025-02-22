import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-lg p-10 w-full max-w-4xl">
        
        <h2 className="text-4xl font-bold text-center text-blue-950  mb-4">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-8 text-lg">
          Have questions or want to get involved? Reach out to us!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-center">
          <div className="flex flex-col items-center gap-2">
            <FaPhoneAlt className="text-blue-950 text-3xl" />
            <span className="text-gray-700 text-lg">+91 8287171506</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaEnvelope className="text-blue-950 text-3xl" />
            <span className="text-gray-700 text-lg">support@nourishconnect.com</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaMapMarkerAlt className="text-blue-950 text-3xl" />
            <span className="text-gray-700 text-lg">123 Food Drive, City, Country</span>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 text-lg font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-950"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-lg font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-950"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-lg font-medium mb-2">
              Message
            </label>
            <textarea
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-950"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#0a0f2c] text-white text-lg py-3 rounded-lg hover:bg-blue-950 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
