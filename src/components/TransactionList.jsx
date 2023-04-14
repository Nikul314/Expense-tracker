import React, {useContext} from 'react'
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState'

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  

  return (
    <>
        <h3 className='hst'>History</h3>
        <ul className="list-group">
          {transactions.map(transaction =>(<Transaction key={transaction.id} transaction={transaction} />))}
        </ul>
    </>
  )
}
