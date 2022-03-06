import React, { useContext } from 'react';

import { PriceContext } from '../Context/Store';


export default function CompC() {
    const [state] = useContext(PriceContext);
    console.log("st",state)
    return (
      <>
    <h1>This is the list of item from C</h1>
      <div>
        {state.expenses.map(item => {
          return (
            <p key={item.id}>
              {item.name} - $ {item.amount}
            </p>
          );
        })}
      </div>
      </>
    );
  }