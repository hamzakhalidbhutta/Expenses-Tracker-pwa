import React, { useContext } from "react";
import { TransectionsContext } from "../store/Context/transectionContext";
import { TRANSECTION_TYPE } from "../store/types";

const Balance = (): JSX.Element => {
  const context: any = useContext(TransectionsContext);

  const getBalance = (total: any) => {
    let totaltransection = 0;
    total.map((v: any) => {
      if (v.type === TRANSECTION_TYPE.RECEIVED) {
        totaltransection = Number(v.amount) + totaltransection;
      } else if (v.type === TRANSECTION_TYPE.PAYED) {
        totaltransection = totaltransection - Number(v.amount);
      }
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
