


export const reducer = (state, action) => {
    switch(action.type){

        case "Add_Transaction":
            return {  ...state,   transactions: [action.payload, ...state.transactions]  }

        case "Delete_Transaction":
            return {  ...state,   transactions: state.transactions.filter(transaction => transaction.description !== action.payload)  }
        default:
            return state
    }
}







