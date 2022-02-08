import React from "react";

const EnterTransections = () => {
  function enterTrans(e: any) {
    const titleField: any = document.getElementById("t_title");

    const amountField: any = document.getElementById("t_amount");

    console.log(`${titleField.value} , ${amountField.value}`);
  }
  return (
    <div className="enterTransections">
      <p>
        Enter amount with negative sign if you want to withdraw amount and
        without any sign if you want to deposit amount.
      </p>{" "}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          enterTrans(e);
        }}
        className="enterTransectionForm"
      >
        <input type="text" placeholder="Title" name="t_title" id="t_title" />
        <input type="text" placeholder="Amount" name="t_amount" id="t_amount" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default EnterTransections;
