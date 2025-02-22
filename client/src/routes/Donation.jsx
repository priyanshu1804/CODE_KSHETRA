import { useState } from "react";
import { makeAuthenticatedPOSTRequest } from "../utils/ServerHelpers";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Donation = () => {
  const [Item_names, setItemName] = useState("");
  const [Item_quantity, setItemQuantity] = useState("");
  const [Item_pics, setItemPic] = useState("");
  const [donor_name, setDonorName] = useState("");
  const [donor_email, setDonorEmail] = useState("");
  const [donor_phone, setDonorPhone] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const submitDonation = async (e) => {
    e.preventDefault();

    const data = {
      Item_names,
      Item_quantity,
      Item_pics,
      donor_name,
      donor_email,
      donor_phone,
    };

    console.log("Sending data to backend:", data);

    const response = await makeAuthenticatedPOSTRequest("/donate/", data);

    if (response.err) {
      setError("Could not create donation");
      return;
    }
    setSuccess("Donation created successfully!");
    setTimeout(() => navigate("/"), 2000);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-[#0a0f2c] to-[#1a1f4c] p-6">
      <motion.div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-2xl border border-white/20 w-full max-w-2xl">
        <h2 className="text-4xl font-bold mb-6 text-center text-white drop-shadow-md">
          Donation Form
        </h2>

        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
        {success && <p className="text-green-400 text-sm text-center mb-4">{success}</p>}

        <form onSubmit={submitDonation} className="space-y-5">
          <InputField label="Item Name" value={Item_names} setValue={setItemName} type="text" />
          <InputField label="Item Quantity" value={Item_quantity} setValue={setItemQuantity} type="number" />
          <InputField label="Item Image (URL)" value={Item_pics} setValue={setItemPic} type="text" />
          <InputField label="Donor Name" value={donor_name} setValue={setDonorName} type="text" />
          <InputField label="Donor Email" value={donor_email} setValue={setDonorEmail} type="email" />
          <InputField label="Donor Phone" value={donor_phone} setValue={setDonorPhone} type="text" />

          <motion.button
            type="submit"
            className="w-full bg-[#1a2b5c] text-white py-4 rounded-xl hover:bg-[#2a3c7c] transition-all text-lg font-semibold shadow-lg"
          >
            Donate Now
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

const InputField = ({ label, value, setValue, type }) => (
  <div>
    <label className="block text-white text-lg font-medium mb-2">{label}:</label>
    <input
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="w-full px-6 py-4 bg-[#1a1f4c] text-white border border-white/30 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all text-lg"
      required
    />
  </div>
);

export default Donation;
