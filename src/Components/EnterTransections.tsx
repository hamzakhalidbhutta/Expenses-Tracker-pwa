import { useContext, useState } from "react";
import { TRANSECTION_TYPE } from "../store/types";
import { TransectionsContext } from "./../store/Context/transectionContext";

const EnterTransections = () : JSX.Element => {
  const context: any = useContext(TransectionsContext);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");

  function validate(e: any) {
    const titleField: any = document.getElementById("t_title");
    const amountField: any = document.getElementById("t_amount");
    const typeField: any = document.getElementById("t_type");

    if (titleField.value.trim().length < 2) {
      console.log(`Title should be greater than 2 characters or more`);
      return;
    } else if (amountField.value.trim().length < 1) {
      console.log(`Amount should be greater than 0 `);
      return;
    } else if (typeField.value.length < 2) {
      console.log(`Please select transection type `);
      return;
    } else {
      context.addTransection({ title, amount, type });
      setTitle("");
      setAmount("");
      setType("");
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
          validate(e);
        }}
        className="enterTransectionForm"
      >
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          name="t_title"
          id="t_title"
        />
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          name="t_amount"
          id="t_amount"
        />
        <select
          name="t_type"
          id="t_type"
          value={type}
          onChange={(e) => {
            setType(e.target.value);
          }}
        >
          <option value="">--Select Transection Type--</option>
          <option value={TRANSECTION_TYPE.RECEIVED}>
            {TRANSECTION_TYPE.RECEIVED}
          </option>
          <option value={TRANSECTION_TYPE.PAYED}>
            {TRANSECTION_TYPE.PAYED}
          </option>
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default EnterTransections;
