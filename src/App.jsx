import React from 'react';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider>
    <div className="App">
      <h2 className='header'>
        Expense Tracker
      </h2>
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList/>
        <AddTransaction/>
      </div>
    </div>
    </GlobalProvider>
  );
}

export default App;
