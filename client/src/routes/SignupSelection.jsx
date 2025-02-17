import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SignupSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      <h1 className="text-4xl font-bold text-white mb-8">Welcome to the Food Donation Portal</h1>
      <p className="text-lg text-white mb-6 text-center">Choose your role to proceed with the signup</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
        
        <motion.div 
          className="bg-white p-8 rounded-2xl shadow-2xl text-center cursor-pointer hover:shadow-3xl transition transform hover:scale-105"
          onClick={() => navigate("/restaurant-signup")} // Navigate to Restaurant Signup
          whileHover={{ scale: 1.1 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Restaurant Signup</h2>
          <p className="text-gray-700">Sign up as a restaurant to manage food donations and help reduce waste.</p>
        </motion.div>

        <motion.div 
          className="bg-white p-8 rounded-2xl shadow-2xl text-center cursor-pointer hover:shadow-3xl transition transform hover:scale-105"
          onClick={() => navigate("/NGO-signup")} // Navigate to NGO Signup
          whileHover={{ scale: 1.1 }}
        >
          <h2 className="text-2xl font-semibold mb-4">NGO Signup</h2>
          <p className="text-gray-700">Sign up as an NGO to accept food donations and distribute them to those in need.</p>
        </motion.div>

        <motion.div 
          className="bg-white p-8 rounded-2xl shadow-2xl text-center cursor-pointer hover:shadow-3xl transition transform hover:scale-105"
          onClick={() => navigate("/individual-signup")} // Navigate to Individual Signup
          whileHover={{ scale: 1.1 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Individual Signup</h2>
          <p className="text-gray-700">Sign up as an individual to donate food and make a difference in your community.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default SignupSelection;
