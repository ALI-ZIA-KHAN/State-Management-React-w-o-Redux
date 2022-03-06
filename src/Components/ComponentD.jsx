import React, { useContext } from 'react';

import { PriceContext } from '../Context/Store';


export default function CompD() {
    const [state] = useContext(PriceContext);
    return (
      <>
    <h1>This is the list of item from D</h1>
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