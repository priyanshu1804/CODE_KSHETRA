// components/Contact.jsx
import React from 'react';
import Button from './ui/button';
import { MdOutlineContactPhone } from 'react-icons/md';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="bg-gray-200 py-12 px-6 md:px-12 lg:px-24 text-center">
      {/* Get in Touch Section Animation */}
      <motion.h2
        className="text-3xl font-bold text-gray-800"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        Contact Us
      </motion.h2>
      <motion.p
        className="text-gray-600 mt-2 max-w-xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Have questions or want to partner with us? Reach out to our team.
      </motion.p>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <Button className="bg-green-600 text-white mt-4 flex items-center gap-2">
          <MdOutlineContactPhone /> Get in Touch
        </Button>
      </motion.div>
    </section>
  );
};

export default Contact;

