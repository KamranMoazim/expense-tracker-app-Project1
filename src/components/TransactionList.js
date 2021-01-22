import React, { useContext } from 'react'
import {GlobalContext} from '../context/Context'

function TransactionList() {

    const {transactions, deleteTransaction} = useContext(GlobalContext)



    return (
        <>
        <h3>History</h3>
        <ul className="list"> 
            {transactions.map( (transaction, index) => (
                <li className={transaction.expense < 0 ? 'minus' : 'plus'} key={index}>
                    <button className="delete-btn" onClick={() => deleteTransaction(transaction.description)}>x</button>
                    {transaction.description}
                    <span>{transaction.expense < 0 ? '-' : '+'}${Math.abs(transaction.expense)}</span>
                </li>
             ) )}
        </ul>
        </>
    )
}

export default TransactionList
