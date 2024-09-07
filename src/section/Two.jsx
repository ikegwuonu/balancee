import React from 'react';
import { motion } from 'framer-motion';
import { category, dollar, Group, logo, wallet } from '../assets';
import Card from '../components/Card';
import { mockTransactions } from '../data';

const Two = () => {
  const headVariants = {
    hidden: { opacity: 0, y: '-100vh' }, // Slide in from the top
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    },
  };

  const transactionsVariants = {
    hidden: { opacity: 0, y: '100vh' }, // Slide in from the bottom
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    },
  };

  return (
    <section className='two'>
      <motion.div
        className="head"
        initial="hidden"
        animate="visible"
        variants={headVariants}
      >
        <img src={logo} alt="logo" />
        <p>Track your online transactions here</p>
      </motion.div>

      <div className='card'>
        <Card imgURL={wallet} text="Total Transaction" amount={145332.45} colour="active" />
        <Card imgURL={dollar} text="Total Cashback" amount={8532.45} colour="notactive-card" />
        <Card imgURL={dollar} text="Cash spent" amount={592.45} colour="notactive-card" />
      </div>

      <motion.div
        className="transactions"
        initial="hidden"
        animate="visible"
        variants={transactionsVariants}
      >
        <h3>Transaction History</h3>
        <div className='transaction heading'>
          <p>Name</p>
          <p>Booking Id</p>
          <p>Service</p>
          <p>Date</p>
          <p>Status</p>
          <p>Cost</p>
        </div>
        
        {mockTransactions.map((transaction, index) => (
          <div key={index} className='transaction'>
            <p>{transaction.mechanic}</p>
            <p>{transaction.bookingDetails}</p>
            <p>{transaction.service}</p>
            <p>{transaction.date}</p>
            <p>{transaction.status}</p>
            <p>{transaction.amount}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Two;
