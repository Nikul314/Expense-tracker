import React, {useContext, useRef, useState} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {
  const clearInput = useRef(null)
  const [text, setText] = useState('')
  const [amount, setAmount] = useState('')
  const {addTransaction} = useContext(GlobalContext);

  const onSubmit = e=>{
    e.preventDefault();
    clearInput.current.value ="";
    setText("");
    setAmount("");

    const newTransaction = {
      id:Math.floor(Math.random()*1000),
      text,
      amount: +amount
    }
    addTransaction(newTransaction);
  }

  return (
    <>
    <h3 className='ant'>Add new transaction</h3>
    <form onSubmit={onSubmit}>
        <div className='form-control'>
            <label htmlFor="text">Text</label><br />
            <input type="text"
            ref={clearInput}
            placeholder='Enter text...'
            value={text}
            onChange={(e)=>setText(e.target.value)}
            required
            />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
          ref={clearInput}
          type='number'
          placeholder='Enter amount...'
          value={amount}
          onChange={(e)=>setAmount(e.target.value)}
          required
          />
        </div>
        <button className='add-btn'>Add</button>
    </form>
    </>
  )
}
