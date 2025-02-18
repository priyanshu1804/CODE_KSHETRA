import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { makeUnauthenticatedPOSTRequest } from "../utils/serverHelpers";
import { motion } from "framer-motion";

const NGOSignup = () => {
  const [organizationName, setOrganizationName] = useState("");
  const [organizationAddress, setOrganizationAddress] = useState("");
  const [organizationContact, setOrganizationContact] = useState("");
  const [organizationEmail, setOrganizationEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [organizationWebsite, setOrganizationWebsite] = useState("");
  const [gstNumber, setGstNumber] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [cookies, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!agreeToTerms) {
      alert("You must agree to the Terms and Services to sign up.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    const ngoData = {
      Organization_Name: organizationName,
      Organization_Address: organizationAddress,
      Organization_Contact: organizationContact,
      Organization_Email: organizationEmail,
      password: password,
      Organization_Website: organizationWebsite,
      GST_Number: gstNumber,
    };

    try {
      const response = await makeUnauthenticatedPOSTRequest("/ngo/signup", ngoData);

      if (response && !response.err) {
        const token = response.token;
        const date = new Date();
        date.setDate(date.getDate() + 30);
        setCookie("token", token, { path: "/", expires: date });
        navigate("/ngo-login");
      } else {
        alert("Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Signup Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">NGO Signup</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <motion.input whileFocus={{ scale: 1.05 }} type="text" placeholder="Organization Name" value={organizationName} onChange={(e) => setOrganizationName(e.target.value)} className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 transition" required />
          <motion.input whileFocus={{ scale: 1.05 }} type="text" placeholder="Address" value={organizationAddress} onChange={(e) => setOrganizationAddress(e.target.value)} className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 transition" required />
          <motion.input whileFocus={{ scale: 1.05 }} type="number" placeholder="Contact Number" value={organizationContact} onChange={(e) => setOrganizationContact(e.target.value)} className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 transition" required />
          <motion.input whileFocus={{ scale: 1.05 }} type="email" placeholder="Email" value={organizationEmail} onChange={(e) => setOrganizationEmail(e.target.value)} className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 transition" required />
          <motion.input whileFocus={{ scale: 1.05 }} type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 transition" required />
          <motion.input whileFocus={{ scale: 1.05 }} type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 transition" required />
          <motion.input whileFocus={{ scale: 1.05 }} type="text" placeholder="Website" value={organizationWebsite} onChange={(e) => setOrganizationWebsite(e.target.value)} className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 transition" />
          <motion.input whileFocus={{ scale: 1.05 }} type="number" placeholder="GST Number" value={gstNumber} onChange={(e) => setGstNumber(e.target.value)} className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 transition" required />
          <div className="mb-4 flex items-center">
            <input type="checkbox" className="mr-2" checked={agreeToTerms} onChange={(e) => setAgreeToTerms(e.target.checked)} />
            <label className="text-sm text-gray-600">
              I agree to the <Link className="text-green-500 underline" to="/terms">Terms and Services</Link>
            </label>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
            type="submit" 
            className={`w-full ${agreeToTerms ? "bg-green-500 hover:bg-green-600" : "bg-gray-300 cursor-not-allowed"} text-white py-2 rounded-lg transition`} 
            disabled={!agreeToTerms}
          >
            Sign Up
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default NGOSignup;
