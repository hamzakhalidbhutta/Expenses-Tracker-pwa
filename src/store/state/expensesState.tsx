import React, { useReducer, useEffect } from 'react'
import { ExpensesContext } from '../context/expensesContext'
import { expensesReducer } from '../reducers/expensesReducer'
import { ADD_TRANSECTION, DELETE_TRANSECTION, UPDATE_TRANSECTION } from '../storeActionTypes'


const ExpensesState = (props: any) => {

    const initialValue: any = {
        transections: []
    }
    const [state, dispatch] = useReducer(expensesReducer,[],() => JSON.parse(localStorage.getItem("localExpensesTransection") || initialValue));

    useEffect(() => {
        localStorage.setItem("localExpensesTransection", JSON.stringify(state));
      }, [state]);
    
      const addTransection = (id: number, name: String, amount: number) => {
        dispatch({
            type: ADD_TRANSECTION,
            payload: {
                t_id: id,
                t_name: name,
                t_amount: amount
            }
        })
    }
    const updateTransection = (id: number, name: String, amount: number) => {
        dispatch({
            type: UPDATE_TRANSECTION,
            payload: {
                t_id: id,
                t_name: name,
                t_amount: amount
            }
        })
    }
    const deleteTransection = (id: number) => {
        dispatch({
            type: DELETE_TRANSECTION,
            payload: {
                t_id: id
            }
        })
    }
    return (
        <ExpensesContext.Provider value={{ transections: state.transections, addTransection, updateTransection, deleteTransection }}>
            {props.children}
        </ExpensesContext.Provider>
    )
}

export default ExpensesState
