const Card = (props: any): JSX.Element => {
  return (
    <>
      <div className="card">
        <div className="controls">
          {" "}
          <button
            className="spanDel"
            onClick={(e) => {
              e.preventDefault();
              props.delTransection(props.id);
            }}
          >
            X
          </button>
          <button
            className="spanUpdate"
            onClick={(e) => {
              e.preventDefault();
              props.updateTransection(props.id);
            }}
          >
            !
          </button>
        </div>
        <div className="title">{props.title}</div>
        <div className="c_amount">{props.amount}$</div>
      </div>
    </>
  );
};

export default Card;
