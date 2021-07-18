import React, { useContext, useState } from "react";
import { ExpensesContext } from "../store/context/expensesContext";
import UpdateTransection from "./UpdateTransection";

const ShowTransections = () => {
  
  const { transections, deleteTransection }: any = useContext(ExpensesContext);
  const [showUpdateTransectionsOption, setShowUpdateTransectionsOption] =  useState({
      id: "",
      status: false,
    });

const UpdatedTransection = () :any => {
  
  return(
  <UpdateTransection transId={{showUpdateTransectionsOption, setShowUpdateTransectionsOption}} />
  )   
}

return transections ==  "" ? (
    <h3> No record Found</h3>
  ) : (
    <>
      {!showUpdateTransectionsOption.status ? null : UpdatedTransection()}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Amount</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {transections.map((v: any, i: number) => {
            return (
              <tr key={i}>
                <td>{v.t_id}</td>
                <td>{v.t_name}</td>
                <td>{v.t_amount}</td>
                <td>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setShowUpdateTransectionsOption({
                        id: v.t_id,
                        status: true,
                      });
                    }}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      deleteTransection(v.t_id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ShowTransections;
