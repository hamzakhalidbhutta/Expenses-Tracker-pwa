import React, { useContext } from "react";
import { TransectionsContext } from "../store/Context/transectionContext";

const Balance = (): JSX.Element => {
  const context: any = useContext(TransectionsContext);

  const getBalance = (total: any) => {
    let totaltransection = 0;
    total.map((v: any) => {
      totaltransection = Number(v.amount) + totaltransection;
    });
    return totaltransection;
  };
  return (
    <div className="amount">
      <div className="deposit">
        <h2>Balance</h2>
      </div>
      <div className="withdraw">
        <h2>${getBalance(context.transections)}</h2>
      </div>
    </div>
  );
};

export default Balance;
