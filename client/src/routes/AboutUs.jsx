import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-yellow-400">About Us</h2>
        <p className="text-gray-300 mt-4 text-lg">
          The world's financial industry is evolving from a traditional and centralized 
          system to a transparent, technology-driven, decentralized one. We believe in 
          leveraging blockchain technology to shape the future of finance.
        </p>
      </div>

      {/* Section with Image & Vision */}
      <div className="flex flex-col md:flex-row items-center mt-12 gap-8">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold text-blue-400">Our Vision</h3>
          <p className="text-gray-300 mt-4 text-lg">
            We aim to build a secure, comprehensive, and fast financial ecosystem 
            that empowers users worldwide. The fourth industrial revolution is here, 
            and we are at the forefront of this transformation.
          </p>
        </div>
        <div className="md:w-1/2">
          <img 
            src="/your-image-path.jpg" 
            alt="Team discussing project" 
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>

      {/* Statistics Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h4 className="text-3xl font-bold text-yellow-400">20,123+</h4>
          <p className="text-gray-300">Transactions Processed</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h4 className="text-3xl font-bold text-yellow-400">1,400+</h4>
          <p className="text-gray-300">Established Partnerships</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h4 className="text-3xl font-bold text-yellow-400">13,560+</h4>
          <p className="text-gray-300">Active Users</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
