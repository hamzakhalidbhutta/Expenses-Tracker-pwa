import React from "react";

const EnterTransections = () => {
  function enterTrans(e: any) {
    const titleField: any = document.getElementById("t_title");
    console.log(titleField);
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
        <button>Submit</button>
      </form>
    </div>
  );
};

export default EnterTransections;
