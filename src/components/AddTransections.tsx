// import { Button } from '@material-ui/core';
import React, { useContext, useState } from 'react'
import { ExpensesContext } from '../store/context/expensesContext';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';

const AddTransections = () => {

    const expenseCnxt: any = useContext(ExpensesContext);
    const [t_id, setId] = useState("");
    const [t_name, setName] = useState("");
    const [t_amount, setAmount] = useState("");

    const addExpenses = (e: any) => {
        e.preventDefault();
        if (t_id !== "" && t_name !== "" && t_amount !== "") {

            expenseCnxt.addTransection(t_id, t_name, t_amount)
            setId('')
            setName('')
            setAmount('')

        } else {
            console.log("Inputs are required")
        }
    }

    return (
        <div>
            <form noValidate autoComplete="off" onSubmit={addExpenses}>
                
            <FormControl >
                <InputLabel htmlFor="transection-id">ID</InputLabel>
                <Input
                    type="number"
                    id="transection-id"
                    value={t_id}
                    onChange={(e: any) => { e.preventDefault(); setId(e.target.value) }}
                />
            </FormControl>
            <br />
            <br />
            <FormControl >
                <InputLabel htmlFor="transection-name">Transection</InputLabel>
                <Input
                type="text" 
                // placeholder="Name" 
                value={t_name} 
                onChange={(e: any) => { e.preventDefault(); setName(e.target.value) }}
                />

            </FormControl>
            <br />
            <br />
            <FormControl >
                <InputLabel htmlFor="transection-amount">Amount</InputLabel>
                <Input
                 type="text" 
                //  placeholder="Amount" 
                 value={t_amount} 
                 onChange={(e: any) => { e.preventDefault(); setAmount(e.target.value) }}
                />

            </FormControl>
            <br />
            <br />

                {/* <input type="number" placeholder="ID" value={t_id} onChange={(e: any) => { e.preventDefault(); setId(e.target.value) }} /> */}
                {/* <input type="text" placeholder="Name" value={t_name} onChange={(e: any) => { e.preventDefault(); setName(e.target.value) }} /> */}
                {/* <input type="text" placeholder="Amount" value={t_amount} onChange={(e: any) => { e.preventDefault(); setAmount(e.target.value) }} /> */}
                <Button variant="contained" color="primary" type="submit" >Add Transection</Button>

            </form>

        </div>
    )
}

export default AddTransections
