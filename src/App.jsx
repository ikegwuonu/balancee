import React, { useState } from 'react';
import EarningOverview from './section/EarningOverview';
import CashbackHistory from './section/CashbackHistory';
import CashoutOptions from './section/CashoutOptions';
import { mockEarnings, mockTransactions } from './data';
import One from './section/One';
import Two from './section/Two';
import Three from './section/Three';
import './assets/index'


const App = () => {
  const [earnings] = useState(mockEarnings);
  const [transactions] = useState(mockTransactions);


  return (
    <main className="app">
      <One 
        totalCashback={mockEarnings.totalCashback} 
        currentBalance={earnings.currentBalance} 
      />
      <Two transactions={transactions} />
      <Three  />
    </main>
  );
};

export default App;
