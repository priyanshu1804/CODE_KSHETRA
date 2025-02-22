
import React from 'react';
import FeatureCard from './FeatureCard';
import { FaDonate, FaHandsHelping } from 'react-icons/fa';
import { MdOutlineFoodBank } from 'react-icons/md';

const Features = () => {
  const features = [
    {
      icon: <FaDonate size={40} className="text-green-600 mx-auto" />,
      title: 'Easy Donations',
      text: 'Restaurants and individuals can donate surplus food with just a few clicks.',
    },
    {
      icon: <FaHandsHelping size={40} className="text-green-600 mx-auto" />,
      title: 'NGO Pickup',
      text: 'Registered NGOs will collect food donations and ensure proper distribution.',
    },
    {
      icon: <MdOutlineFoodBank size={40} className="text-green-600 mx-auto" />,
      title: 'Reduce Food Waste',
      text: 'Your contribution helps minimize food waste and supports the hungry.',
    },
  ];

  return (
    <section className="top-0 left-0 w-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 md:px-12 lg:px-24 py-12">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </section>
  );
};

export default Features;
