import { useState } from "react";
import axios from "axios"; // For API calls
import { motion } from "framer-motion"; // For animations

const Donation = () => {
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [itemPic, setItemPic] = useState("");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donorPhone, setDonorPhone] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleDonationSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validate the fields
    if (!itemName || !itemQuantity || !itemPic || !donorName || !donorEmail || !donorPhone) {
      setError("All fields are required!");
      return;
    }

    const donationData = {
      Item_names: itemName,
      Item_quantity: itemQuantity,
      Item_pics: itemPic,
      donor_name: donorName,
      donor_email: donorEmail,
      donor_phone: donorPhone,
    };

    try {
      // API call to your backend to submit the donation
      const response = await axios.post("/api/donate", donationData);
      if (response.status === 200) {
        setSuccess("Thank you for your generous donation!");
      }
    } catch (err) {
      setError("An error occurred during donation submission. Please try again.");
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 flex items-center justify-center min-h-screen flex-col text-center text-white p-6 md:p-12">
        <motion.h1
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Donate to Make a Difference
        </motion.h1>
        <motion.p
          className="text-lg mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Help us reduce waste and feed those in need by donating food items.
        </motion.p>

        <motion.div
          className="bg-white p-8 rounded-lg shadow-2xl w-full lg:w-2/3 xl:w-1/2 mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Donation Form</h2>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          {success && <p className="text-green-500 text-sm text-center">{success}</p>}

          <form onSubmit={handleDonationSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 text-lg font-medium">Item Name:</label>
              <input
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                className="w-full px-6 py-3 border-2 border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-lg font-medium">Item Quantity:</label>
              <input
                type="number"
                value={itemQuantity}
                onChange={(e) => setItemQuantity(e.target.value)}
                className="w-full px-6 py-3 border-2 border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-lg font-medium">Item Image (URL):</label>
              <input
                type="text"
                value={itemPic}
                onChange={(e) => setItemPic(e.target.value)}
                className="w-full px-6 py-3 border-2 border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-lg font-medium">Donor Name:</label>
              <input
                type="text"
                value={donorName}
                onChange={(e) => setDonorName(e.target.value)}
                className="w-full px-6 py-3 border-2 border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-lg font-medium">Donor Email:</label>
              <input
                type="email"
                value={donorEmail}
                onChange={(e) => setDonorEmail(e.target.value)}
                className="w-full px-6 py-3 border-2 border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-lg font-medium">Donor Phone:</label>
              <input
                type="text"
                value={donorPhone}
                onChange={(e) => setDonorPhone(e.target.value)}
                className="w-full px-6 py-3 border-2 border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                required
              />
            </div>

            <motion.button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-all"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Donate Now
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Donation;
