import {  useReducer } from "react";
import { TransectionsContext } from "../Context/transectionContext";
import { TransectionsReducer } from "../Reducer/transectionReducer";
import { TRANSECTIONTYPE } from "../types";

const initialTransections : TRANSECTIONTYPE[] = [
    {
      title: "Income1",
      amount: 100,
    },
    {
      title: "Income2",
      amount: 200,
    },
    {
      title: "Income3",
      amount: 300,
    },
    {
      title: "Bill",
      amount: -100,
    },
  ];

export const TransectionsProvider = ({ children  } : any ) : any => {
    const [transections , dispatch] : any = useReducer(
      TransectionsReducer,
      initialTransections
    );
  
    const addTransection = (data : TRANSECTIONTYPE)  => {
      dispatch({
        type: "ADD",
        payload: {
          title: data.title,
          amount: data.amount,
        },
      } );
    };
  
    const updateTransection =  (data : TRANSECTIONTYPE) => {
      dispatch({
        type: "UPDATE",
        payload: {
          title: data.title,
          amount: data.amount,
        },
      });
    };
  
    const delTransection = (transID : any) => {
      dispatch({
        type: "DEL",
        payload: {
          transID,
        },
      });
    };
  
    const getIncome = (trans : any) => {
      dispatch({
        type: "TOTAL_INCOME",
        payload: {
          trans,
        },
      });
    };
    return (
      <TransectionsContext.Provider
        value={{
          transections,
          addTransection,
          delTransection,
          updateTransection,
          getIncome,
        }}
      >
        {children}
      </TransectionsContext.Provider>
    );
  };