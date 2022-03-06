import {React ,createContext, useReducer} from "react";
import { reducer } from "./Reducer";


export const itemDetails={
    expenses: [
      {
        id:1,
        name: 'Buy Milk',
        amount: 10
      }
    ]
  };


export const PriceContext=createContext(itemDetails);


export const PriceContextProvider=({children})=>{

    const [state,dispatch]=useReducer(reducer,itemDetails)
    return(
        <PriceContext.Provider value={[state, dispatch]}>
        {children}
        </PriceContext.Provider>
    )
}