import React, { useContext, useState, useEffect } from "react";
import { ExpensesContext } from "../store/context/expensesContext";
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';

const UpdateTransection = (props: any) => {
  const expenseCnxt: any = useContext(ExpensesContext);
  const [t_id, setId] = useState("");
  const [t_name, setName] = useState("");
  const [t_amount, setAmount] = useState("");

  const updateExpenses = (e: any) => {
    e.preventDefault();
    if (t_id !== "" && t_name !== "" && t_amount !== "") {
      expenseCnxt.updateTransection(t_id, t_name, t_amount)
      props.transId.setShowUpdateTransectionsOption({
        id: "",
        status: false
      })
    } else {
      console.log("Inputs are required");
    }
  };

  useEffect(() => {
    expenseCnxt.transections.map((v: any, i: number) => {
      if (props.transId.showUpdateTransectionsOption.id === v.t_id) {
        setId(v.t_id);
        setName(v.t_name);
        setAmount(v.t_amount);
      }
    });
  }, [props.transId.showUpdateTransectionsOption.id]);


  if (props.transId.showUpdateTransectionsOption.id === "") {
    return <div>Upadte Transection</div>;
  } else {
    return expenseCnxt.transections.map((v: any, i: number) => {
      if (props.transId.showUpdateTransectionsOption.id === v.t_id) {
        return (
          <div key={i}>
            <br />
            <br />
            <br />


            <form noValidate autoComplete="off" onSubmit={updateExpenses}>
              <FormControl>
                <InputLabel htmlFor="transection-id">ID</InputLabel>
                <Input
                  type="number"
                  placeholder="ID"
                  value={t_id}
                  onChange={(e: any) => {
                    e.preventDefault();
                    setId(e.target.value);
                  }}
                />
              </FormControl>

              <br />
              <br />
              <FormControl>
                <InputLabel htmlFor="transection-name">Transection</InputLabel>
                <Input
                  type="text"
                  placeholder="Name"
                  value={t_name}
                  onChange={(e: any) => {
                    e.preventDefault();
                    setName(e.target.value);
                  }}
                />
              </FormControl>

              <br />
              <br />
              <FormControl>
                <InputLabel htmlFor="transection-amount">Amount</InputLabel>
                <Input
                  type="text"
                  placeholder="Amount"
                  value={t_amount}
                  onChange={(e: any) => {
                    e.preventDefault();
                    setAmount(e.target.value);
                  }}
                />
              </FormControl>

              <br />
              <br />
              <Button variant="contained" color="primary" type="submit">Update</Button>
            </form>
          </div>
        );
      } else {
        return null;
      }
    });
  }
};

export default UpdateTransection;
