// components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import Button from './ui/button';
import { FaDonate, FaHandsHelping, FaCookie } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  const navigate = useNavigate(); // Initialize navigate

  // Navigate to Donate page when "Donate Now" is clicked
  const handleDonateNowClick = () => {
    navigate('/donate');
  };

  // Navigate to Request page when "Request Now" is clicked
  const handleRequestNowClick = () => {
    navigate('/request');
  };

  return (
    <section
  className="flex flex-col items-center text-center py-20 px-6 md:px-12 lg:px-24"
  style={{
    backgroundImage: `url('/img.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-gray-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Donate Surplus Food & Help Those in Need
      </motion.h2>
      

      <motion.div
  className="text-gray-600 mt-4 max-w-2xl text-sm md:text-lg"
  initial={{ opacity: 0, y: -20 }} // Fade in + slight upward motion
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  <Typewriter
    words={[
      "Whether you're a restaurant or an individual, contribute to reducing food waste by donating surplus food.NGOs will pick it up and distribute it to those in need."
    ]}
    cursor
    cursorStyle="_"
    typeSpeed={15}  // Faster typing speed
    deleteSpeed={10} // Faster deleting speed
  />
</motion.div>



      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <motion.div whileHover={{ scale: 1.1 }}>
          <Button className="bg-green-600 text-white flex items-center gap-2" onClick={handleDonateNowClick}>
            <FaDonate /> Donate Money
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Button className="bg-green-600 text-white flex items-center gap-2" onClick={handleDonateNowClick}>
            <FaCookie/> Donate Food
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Button variant="outline" className="border-green-600 text-green-600 flex items-center gap-2" onClick={handleRequestNowClick}>
            <FaHandsHelping /> Request Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

