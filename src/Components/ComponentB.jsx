import React, { useState, useContext } from 'react';

import { PriceContext } from '../Context/Store';





export default function CompB() {
    const [state, dispatch] = useContext(PriceContext);
  const [itemsId,setItemId]=useState(1)
  
 const [name, setName] = useState('');
const [amount, setAmount] = useState('');


const handleName = event => {
    console.log('Name ', event.target.value);
    setName(event.target.value);
  };
  
  const handleAmount = event => {
    console.log('Amount ', event.target.value);
    setAmount(event.target.value);
  };





  const handleSubmitForm = event => {
    event.preventDefault();
    if (name !== '' && amount > 0) {
      dispatch({
        type: 'ADD_ITEMS',
        payload: { id:itemsId+1, name, amount }
      });
  
      // clean input fields
      setName('');
      setAmount('');
    } else {
      console.log('Invalid expense name or the amount');
    }
  };

  const handleClick = event => {
    event.preventDefault();
    if (name !== '' && amount > 0) {
      dispatch({
        type: 'SUBTRACT_ITEM',
        payload: { id:itemsId+1, name, amount }
      });
  
      // clean input fields
      setName('');
      setAmount('');
    } else {
      console.log('Invalid expense name or the amount');
    }
  };

  return (
    <form style={{ margin: 10 }} onSubmit={handleSubmitForm}>
      
        <label for="exampleEmail" >
          Name of Item
        </label>
        
          <input
            type="text"
            name="name"
            id="expenseName"
            placeholder="Name of expense?"
            value={name}
            onChange={handleName}
          />
        
     
      
        <label for="exampleEmail" >
          Amount
        </label>
      
          <input
            type="number"
            name="amount"
            id="expenseAmount"
            placeholder="$ 0"
            value={amount}
            onChange={handleAmount}
          />
    
      <button type="submit" >
        Add
      </button>

      <button onClick={handleClick}>
        SUBTRACT
      </button>
    </form>
  );
  }