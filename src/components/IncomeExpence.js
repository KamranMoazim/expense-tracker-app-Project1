import React, {useContext} from 'react'
import {GlobalContext} from '../context/Context'

function IncomeExpence() {

    const { transactions } = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.expense);
    // console.log(amounts)

    const income = amounts.filter( (amount) => amount > 0 ).reduce( (first, second) => (first += second) , 0)
    // console.log(income)
    
    const expense = amounts.filter( (amount) => amount < 0 ).reduce( (first, second) => (first += second) , 0)
    // console.log(expense)


    return (
        <div className="inc-exp-container">
            <div >
                <h4 >Income</h4>
                <p className="money plus">{income}</p>
            </div>

            <div >
                <h4 >Expense</h4>
                <p className="money minus">{expense}</p>
            </div>
        </div>
    )
}

export default IncomeExpence
