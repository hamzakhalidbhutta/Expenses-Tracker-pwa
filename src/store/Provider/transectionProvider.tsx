import { useReducer } from "react";
import { TransectionsContext } from "../Context/transectionContext";
import { TransectionsReducer } from "../Reducer/transectionReducer";
import { TRANSECTIONTYPE, TRANSECTION_ACTION } from "../types";

const initialTransections: TRANSECTIONTYPE[] = [
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

export const TransectionsProvider = ({ children }: any): JSX.Element => {
  const [transections, dispatch]: any = useReducer(
    TransectionsReducer,
    initialTransections
  );

  const addTransection = (data: TRANSECTIONTYPE) => {
    dispatch({
      type: TRANSECTION_ACTION.ADD,
      payload: {
        title: data.title,
        amount: data.amount,
      },
    });
  };

  const updateTransection = (data: TRANSECTIONTYPE) => {
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
