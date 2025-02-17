import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Assuming you will use Axios for the API call

const NGOSignup = () => {
  const [organizationName, setOrganizationName] = useState("");
  const [organizationAddress, setOrganizationAddress] = useState("");
  const [organizationContact, setOrganizationContact] = useState("");
  const [organizationEmail, setOrganizationEmail] = useState("");
  const [password, setPassword] = useState("");
  const [organizationWebsite, setOrganizationWebsite] = useState("");
  const [gstNumber, setGstNumber] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    // Validate all fields
    if (
      !organizationName ||
      !organizationAddress ||
      !organizationContact ||
      !organizationEmail ||
      !password ||
      !gstNumber
    ) {
      setError("All fields are required!");
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
      // API call to your backend to create the NGO
      const response = await axios.post("/api/ngo-signup", ngoData);
      if (response.status === 200) {
        navigate("/NGO-login"); // Redirect to login page after successful signup
      }
    } catch (err) {
      setError("An error occurred during signup. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">NGO Signup</h2>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block text-gray-700">Organization Name:</label>
            <input
              type="text"
              value={organizationName}
              onChange={(e) => setOrganizationName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Organization Address:</label>
            <input
              type="text"
              value={organizationAddress}
              onChange={(e) => setOrganizationAddress(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Contact Number:</label>
            <input
              type="number"
              value={organizationContact}
              onChange={(e) => setOrganizationContact(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              value={organizationEmail}
              onChange={(e) => setOrganizationEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Website:</label>
            <input
              type="text"
              value={organizationWebsite}
              onChange={(e) => setOrganizationWebsite(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">GST Number:</label>
            <input
              type="number"
              value={gstNumber}
              onChange={(e) => setGstNumber(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default NGOSignup;
