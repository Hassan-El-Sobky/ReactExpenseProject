import { useState } from 'react';
import './ExpenseItem.css'
function ExpenseItem(props){
    // const expenseDate=new Date(2022,2,28).toDateString();
    // const expenseTitle='Car Instance';
    // const expenseAmount=294.67;
    console.log(props);
    const[title,setTitle]=useState(props.Obj.expenseTitle)
    function clickHandler()
    {
        setTitle('Updated');
        console.log('Cliked !!!!!!!!!!');
    }
    return (
        <div className='expense-item'>
            <div>
                {props.Obj.expenseDate}
            </div>
            <div className='expense-item__description'>
                <h2 className='expense-item h2'>{title}</h2>
                <div className='expense-item__price'>${props.Obj.expenseAmount}</div>
                   <button onClick={clickHandler}>Change Title</button>
            </div>
        </div>
        
    )
}

export default ExpenseItem;