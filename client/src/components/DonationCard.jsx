import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { motion } from "framer-motion";
import Button from './ui/button'; 

const DonationCard = ({ donation }) => {
  const handleDonateNowClick = () => {
    console.log("Donate Now clicked");
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <img
        src={donation.Item_pics}
        alt={donation.Item_names}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800">{donation.Item_names}</h3>
      <p className="text-gray-600"><strong>Quantity:</strong> {donation.Item_quantity}</p>
      <p className="text-gray-600"><strong>Donor Name:</strong> {donation.donor_name}</p>
      <p className="text-gray-600"><strong>Phone:</strong> {donation.donor_phone}</p>
      <p className="text-gray-600"><strong>Address:</strong> {donation.donor_address || "N/A"}</p>
      
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <motion.div whileHover={{ scale: 1.1 }}>
          <Button className="bg-green-600 text-white flex items-center gap-2" onClick={handleDonateNowClick}>
            <FaThumbsUp /> Approved
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default DonationCard;
