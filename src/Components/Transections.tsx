import React, { useContext, useState } from "react";
import { TransectionsContext } from "../store/Context/transectionContext";
import Card from "./Card";

const Transections = () => {
  const context: any = useContext(TransectionsContext);
  const delTransection = (dt: any) => {
    
    context.delTransection(dt);
  };

  const updateTransection = (dt: any) => {
    context.updateTransection(dt);
  };

  return (
    <div className="transections">
      {context.transections.map((v: any, i: any) => {
        return (
          <Card
            key={i}
            title={v.title}
            amount={v.amount}
            id={i}
            updateTransection={updateTransection}
            delTransection={delTransection}
          />
        );
      })}
    </div>
  );
};

export default Transections;
