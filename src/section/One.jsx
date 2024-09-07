import React from 'react';
import { motion } from 'framer-motion';
import { cards, category, login, message, setting, tenx } from '../assets';

const menuItems = [
  { img: category, label: 'Record Summary' },
  { img: cards, label: 'Analytics' },
  { img: message, label: 'News' },
  { img: tenx, label: 'E-pay' },
  { img: setting, label: 'Settings' },
  { img: login, label: 'Log-out' },
];

const containerVariants = {
  hidden: { opacity: 0, x: '-100vw' },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1, // Increase duration for smoother transition
      ease: "easeOut", // Use easeOut for a smoother finish
      staggerChildren: 0.3, // Increase stagger duration for smoother appearance
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: '-100vw' },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7, // Slightly longer duration for smoother entrance
      ease: "easeOut", // Use easeOut to create a smoother motion
    },
  },
};

const One = () => {
  return (
    <motion.section
      className="one"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h4>Welcome, Juliet</h4>
      {menuItems.slice(0, 4).map((item, index) => (
        <motion.div className="menu" key={index} variants={itemVariants}>
          <img src={item.img} alt={`${item.label} Icon`} />
          <p>{item.label}</p>
        </motion.div>
      ))}
      <div className="center">
        <p>GENERAL</p>
        {menuItems.slice(4).map((item, index) => (
          <motion.div className="menu" key={index} variants={itemVariants}>
            <img src={item.img} alt={`${item.label} Icon`} />
            <p>{item.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default One;
