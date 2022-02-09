import React, { useContext, useState } from "react";
import { TransectionsContext } from "../store/Context/transectionContext";
import Card from "./Card";

const Transections = () => {
  const context: any = useContext(TransectionsContext);

  return (
    <div className="transections">
      {context.transections.map((v :any, i:any) => {
        return <Card key={i} title={v.title} amount={v.amount} />;
      })}
    </div>
  );
};

export default Transections;
