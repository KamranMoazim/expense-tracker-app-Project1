import React, { useContext } from 'react'
import {GlobalContext} from '../context/Context'


function Balance() {

    const { transactions } = useContext(GlobalContext)

    // console.log(transactions[0].expense)

    const amounts = transactions.map(transaction => transaction.expense);

    // console.log(amount)

    const total = amounts.reduce( (first, second) => (first += second) , 0)

    // console.log(total)

    return (
        <div>
            <h3>Your Balance </h3>
            <h1>${total}</h1>
        </div>
    )
}

export default Balance
