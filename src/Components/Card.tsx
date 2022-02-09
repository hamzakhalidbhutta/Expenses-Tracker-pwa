import React from "react";

const Card = (props: any): JSX.Element => {
  return (
    <>
      <button
        className="spanUpdate"
        onClick={(e) => {
          e.preventDefault();
          props.updateTransection(props.id);
        }}
      >
        Edit
      </button>
      <button
        className="spanDel"
        onClick={(e) => {
          e.preventDefault();
          props.delTransection(props.id);
        }}
      >
        Delete
      </button>
      <div className="card">
        <div className="title">{props.title}</div>
        <div className="c_amount">{props.amount}$</div>
      </div>
    </>
  );
};

export default Card;
