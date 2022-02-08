import React, { useState } from "react";
import Card from "./Card";

const Transections = () => {
  const [transections, setTransections] = useState([
    { title: "Food", amount: "56" },
    { title: "Internet Bill", amount: "156"},
    {title : "Electricity Bill", amount : "28"}
  ]);

  return (
    <div className="transections">
      {transections.map((v, i) => {
        return <Card key={i} title={v.title} amount={v.amount} />;
      })}
    </div>
  );
};

export default Transections;
