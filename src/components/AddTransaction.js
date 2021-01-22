import React, { useContext, useState } from 'react'
import {GlobalContext} from '../context/Context'

function AddTransaction() {


    const [description, setDescription] = useState("")
    const [expense, setExpense] = useState(0)

    const { addTransaction } = useContext(GlobalContext)

    // console.log(addTransaction)

    const onSubmit = e => {
        e.preventDefault();
    
        const newTransaction = {
            description,
            expense: +expense
        }

        addTransaction(newTransaction);

        setDescription("")
        setExpense(0)
    }

    return (
        <div>
            <form onSubmit={onSubmit} >

                <label htmlFor="text">Text</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter text..." required />

                <br />

                <label htmlFor="amount">Amount</label>
                <input type="number" value={expense} onChange={(e) => setExpense(e.target.value)} placeholder="Enter amount..." required />

                <button className="btn" >Add transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction
