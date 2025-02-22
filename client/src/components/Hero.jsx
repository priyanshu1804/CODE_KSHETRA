
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; 
import Button from './ui/button';
import { FaDonate, FaHandsHelping } from 'react-icons/fa';

const Hero = () => {
  const navigate = useNavigate(); 
  const handleDonateNowClick = () => {
    navigate('/donate');
  };
  const handleRequestNowClick = () => {
    navigate('/request');
  };

  return (
    <section className="flex flex-col items-center text-center py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-green-200 to-green-400">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-gray-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Donate Surplus Food & Help Those in Need
      </motion.h2>
      <motion.p
        className="text-gray-600 mt-4 max-w-2xl text-sm md:text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Whether you're a restaurant or an individual, contribute to reducing food waste by donating surplus food. NGOs will pick it up and distribute it to those in need.
      </motion.p>
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <motion.div whileHover={{ scale: 1.1 }}>
          <Button className="bg-green-600 text-white flex items-center gap-2" onClick={handleDonateNowClick}>
            <FaDonate /> Donate Now
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

