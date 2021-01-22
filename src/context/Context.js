import React, { createContext, useReducer } from 'react'
import {reducer} from './Reucer.js'

let initialData = {
    transactions : [
        // {description : "book", expense : 74},
        // {description : "cake", expense : -86},
        // {description : "drink", expense : 6},
    ]
}

export const GlobalContext = createContext(initialData)

function Context({children}) {


    const [state, dispatch] = useReducer(reducer, initialData)

    // console.log(state.transactions)

    const deleteTransaction = (description) => {
        dispatch({
            type : "Delete_Transaction",
            payload : description
        })
    }

    const addTransaction = (transaction) => {
        dispatch({
            type : "Add_Transaction",
            payload : transaction
        })
    }

    return (
        <GlobalContext.Provider value={
            {deleteTransaction,
            addTransaction,
            transactions : state.transactions}
            }>

            {children}

        </GlobalContext.Provider>
    )
}

export default Context
















