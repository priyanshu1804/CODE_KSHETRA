// components/Request.jsx
import React, { useState } from "react";
import axios from "axios"; // For API calls
import { motion } from "framer-motion"; // For animations

const Request = () => {
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [requesterName, setRequesterName] = useState("");
  const [requesterEmail, setRequesterEmail] = useState("");
  const [requesterPhone, setRequesterPhone] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRequestSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validate all fields
    if (!itemName || !itemQuantity || !requesterName || !requesterEmail || !requesterPhone) {
      setError("All fields are required!");
      return;
    }

    const requestData = {
      Item_names: itemName,
      Item_quantity: itemQuantity,
      requester_name: requesterName,
      requester_email: requesterEmail,
      requester_phone: requesterPhone,
    };

    try {
      const response = await axios.post("/api/food-request", requestData);
      if (response.status === 200) {
        setSuccess("Your food request has been submitted successfully!");
      }
    } catch (err) {
      setError("An error occurred while submitting your request. Please try again.");
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-8">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center min-h-screen flex-col text-center text-white">
        <motion.h1
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Request Food to Help Those in Need
        </motion.h1>
        <motion.p
          className="text-lg mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Submit a request for food items needed to help reduce food waste and support those in need.
        </motion.p>

        <motion.div
          className="bg-white p-12 rounded-lg shadow-xl w-full lg:w-2/3 xl:w-1/2 mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-center">Food Request Form</h2>

          {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
          {success && <p className="text-green-500 text-sm text-center mb-4">{success}</p>}

          <form onSubmit={handleRequestSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 text-lg font-medium">Item Name:</label>
              <input
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                className="w-full px-6 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-lg font-medium">Item Quantity:</label>
              <input
                type="number"
                value={itemQuantity}
                onChange={(e) => setItemQuantity(e.target.value)}
                className="w-full px-6 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-lg font-medium">Requester Name:</label>
              <input
                type="text"
                value={requesterName}
                onChange={(e) => setRequesterName(e.target.value)}
                className="w-full px-6 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-lg font-medium">Requester Email:</label>
              <input
                type="email"
                value={requesterEmail}
                onChange={(e) => setRequesterEmail(e.target.value)}
                className="w-full px-6 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-lg font-medium">Requester Phone:</label>
              <input
                type="text"
                value={requesterPhone}
                onChange={(e) => setRequesterPhone(e.target.value)}
                className="w-full px-6 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <motion.button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit Request
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Request;
