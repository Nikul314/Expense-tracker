import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpenses = () => {
  const {transactions} = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
  .filter(item => item > 0)
  .reduce((acc, item) => (acc += item), 0)
  .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0)
    .reduce((acc, item)=>(acc += item), 0) * -1
  ).toFixed(2);

  return (
    <div className='inc-exp-container'>
        <div className='inc'>
            <h4 className='inc-exp'>INCOME</h4>
            <p className='money' id='money-plus'>${income}</p>
        </div>
        <hr />
        <div className='exp'>
            <h4 className='inc-exp'>EXPENSE</h4>
            <p className='money' id='money-minus'>${expense}</p>
        </div>
    </div>
  )
}
