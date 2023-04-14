import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
const {deleteTransaction} = useContext(GlobalContext);

    const sign  = transaction.amount < 0 ? '-' : '+';

  return (
    <>
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text}
            <div>
              <span>{sign}${Math.abs(transaction.amount)}</span>
              <button className='del-btn'
                onClick={()=>deleteTransaction(transaction.id)}>
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
        </li>
    </>
  )
}
