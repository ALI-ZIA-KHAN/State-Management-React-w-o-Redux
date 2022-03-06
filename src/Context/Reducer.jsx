import React from 'react'
// import  {itemDetails as state} from './Store'



export const reducer = (state, action) => {

    console.log("rst",state,"rd",reducer)
    console.log("ap",action.payload)


      switch (action.type) {
        case 'ADD_ITEMS':
          return {
            expenses: [...state.expenses, action.payload]
          };

          case 'SUBTRACT_ITEM':
          return {
           expenses:state.expenses.filter((items)=>{
               return items.name != action.payload.name;
           })
          };
        default:
          return {
            state
          };
      }
    };
  