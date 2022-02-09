import React from "react";

const EnterTransections = () => {
  function enterTrans(e: any) {
    const titleField: any = document.getElementById("t_title");

    const amountField: any = document.getElementById("t_amount");
    const typeField: any = document.getElementById("t_type");

    if (titleField.value.trim().length < 2) {
      console.log(`Title should be greater than 2 characters or more`);
      return;
    } else if (amountField.value.trim().length < 1) {
      console.log(`Amount should be greater than 0 `);
      return;
    } else if (typeField.value < 2) {
      console.log(`Please select transection type `);
      return;
    } else {
      console.log(
        `${titleField.value} , ${amountField.value}, ${typeField.value}`
      );
    }
  }
  return (
    <div className="enterTransections">
      <p>
        <b>Enter withdraw or deposit transections here.</b>
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
        <select name="t_type" id="t_type">
          <option value="">--Select Transection Type--</option>
          <option value="withdraw">Withdraw</option>
          <option value="deposit">Deposit</option>
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default EnterTransections;
