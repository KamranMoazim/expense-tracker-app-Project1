import Header  from './components/Header'
import Balance  from './components/Balance'
import IncomeExpence  from './components/IncomeExpence'
import TransactionList  from './components/TransactionList'
import AddTransaction  from './components/AddTransaction'

import Context from './context/Context'

import './App.css';

function App() {
  return (
    <Context>
      <div className="container1">
        <Header />
        <Balance />
        <IncomeExpence />
        <TransactionList />
        <AddTransaction />
        <Context />
        </div>
    </Context>
  );
}

export default App;
