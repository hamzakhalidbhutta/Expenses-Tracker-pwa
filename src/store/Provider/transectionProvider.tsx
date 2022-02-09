import { useReducer } from "react";
import { TransectionsContext } from "../Context/transectionContext";
import { TransectionsReducer } from "../Reducer/transectionReducer";
import {
  TRANSECTION,
  TRANSECTION_ACTION,
  TRANSECTION_TYPE,
} from "../types";

const initialTransections: TRANSECTION[] = [
  {
    title: "Income1",
    amount: 100,
    type : TRANSECTION_TYPE.RECEIVED
  },
  {
    title: "Income2",
    amount: 200,
    type : TRANSECTION_TYPE.RECEIVED
  },
  {
    title: "Income3",
    amount: 300,
    type : TRANSECTION_TYPE.RECEIVED
  },
  {
    title: "Bill",
    amount: 100,
    type : TRANSECTION_TYPE.PAYED
  },
];

export const TransectionsProvider = ({ children }: any): JSX.Element => {
  const [transections, dispatch]: any = useReducer(
    TransectionsReducer,
    initialTransections
  );

  const addTransection = (data: TRANSECTION) => {  
    dispatch({
      type: TRANSECTION_ACTION.ADD,
      payload: {
        title: data.title,
        amount : data.amount,
        type: data.type
      },
    });
  };

  const updateTransection = (data: TRANSECTION) => {
    dispatch({
      type: TRANSECTION_ACTION.UPDATE,
      payload: {
        title: data.title,
        amount: data.amount,
    
      },
    });
  };

  const delTransection = (transID: number) => {
    dispatch({
      type: TRANSECTION_ACTION.DELETE,
      payload: {
        transID,
      },
    });
  };

  const getIncome = (trans: any) => {
    dispatch({
      type: TRANSECTION_ACTION.TOTAL_INCOME,
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
