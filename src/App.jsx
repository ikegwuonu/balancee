import React, { useState } from 'react';
import { mockEarnings, mockTransactions } from './data';
import One from './section/One';
import Two from './section/Two';
import Three from './section/Three';
import './assets/index'


const App = () => {


  return (
    <main className="app">
      <One  />
      <Two />
      <Three  />
    </main>
  );
};

export default App;
