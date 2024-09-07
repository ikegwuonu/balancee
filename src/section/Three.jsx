import React from 'react';
import { motion } from 'framer-motion';
import { bell, Ellipse45, Group, mail } from '../assets';

const Three = () => {
  const onCashout = (method) => {
    if (method === 'direct') {
      alert("Cashout directly to bank account");
    } else if (method === 'promoCode') {
      alert("Convert cashback to promo code");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, x: '100vw' },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    },
  };

  return (
    <motion.section
      className="three"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className='head'>
        <img src={mail} alt="mail icon" />
        <img src={bell} alt="bell icon" />
        <img src={Ellipse45} alt="man icon" />
        <div>
          <p className='name'>Juliet Ikegwuonu</p>
          <p className='email'>juliet.kegwuonu@gmail.com</p>
        </div>
      </div>
      
      <div className='cash-out'>
        <h2>Cashout Options</h2>
        <button onClick={() => onCashout('direct')}>Direct Cashout</button>
        <button onClick={() => onCashout('promoCode')}>Convert to Promo Code</button>
      </div>
      
      <img src={Group} alt="Group Illustration" />
    </motion.section>
  );
};

export default Three;
