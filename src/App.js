import logo from './logo.svg';
import './App.css';
import Expenes from './components/Expenes/Expenes';
import NewExpenes from './components/NewExpenes/NewExpenes';
import { useState } from 'react';

function App() {
    const [expenesState,setExpenses]=useState([
      {id:'e1',expenseDate:new Date(2022,2,28).toDateString()
      ,expenseTitle:'Car Instance'
      ,expenseAmount:294.67
        },
        {id:'e2',expenseDate:new Date(2023,2,28).toDateString()
      ,expenseTitle:'Bus Instance'
      ,expenseAmount:294.67
        },
        {id:'e3',expenseDate:new Date(2020,2,28).toDateString()
      ,expenseTitle:'Bicycle Instance'
      ,expenseAmount:294.67
        },{id:'e4',expenseDate:new Date(2021,2,28).toDateString()
        ,expenseTitle:'Train Instance'
        ,expenseAmount:294.67
          }
    ]);
  const addExpensHandler=expenes=>{
           console.log('In App');
           console.log(expenes);
           setExpenses(oldExpenes=> {return [expenes,...oldExpenes]});
  }
  return (
    <div >
      <h2>Let's Start</h2>
      <NewExpenes onAddExpenes={addExpensHandler}></NewExpenes>
        <Expenes expenes={expenesState}></Expenes>
    </div>
  );
}

export default App;
