import React ,{useState} from 'react';
import  './ExpenesForm.css';
const ExpenesForm = (props) => {
    
    const [toggleDiv,setToggleDiv]=useState(true);
    const [userInput,setUserinput]=useState({
        expenseTitle:'',
        expenseAmount:'',
        expenseDate:''
    })
    const titleChangeHandler=(event)=>{
        setUserinput({...userInput,expenseTitle:event.target.value})
        
    }

    const amountChangeHandler=(event)=>{
        setUserinput({...userInput,expenseAmount:event.target.value})
        
    }

    const dateChangeHandler=(event)=>{
        setUserinput({...userInput,expenseDate:event.target.value})
     
    }

    const sumbitHandler=(event)=>{
     event.preventDefault();
    //  console.log(userInput);
     props.onSaveExpenesData(userInput)
     setUserinput({
        expenseTitle:'',
        expenseAmount:'',
        expenseDate:''
     });
    }
    const addExHandler=()=>{
        setToggleDiv(!toggleDiv);
    }
    return (
        <div>
        {(toggleDiv)?<button onClick={addExHandler}>Add New Expense</button>:
         <form onSubmit={sumbitHandler}>
         <div className='new-expense__controls'>
           <div className='new-expense__control'>
                 <label htmlFor="">Title</label>
                 <input value={userInput.expenseTitle} type="text" onChange={titleChangeHandler} />
           </div>
           <div className='new-expense__control'>
                 <label htmlFor="">Amount</label>
                 <input value={userInput.expenseAmount} onChange={amountChangeHandler} type="number" min="0.01" step="0.01" />
           </div>
   
           <div className='new-expense__control'>
                 <label htmlFor="">Date</label>
                 <input value={userInput.expenseDate} onChange={dateChangeHandler} type="date" min="2020-01-01" max="2023-01-01" />
           </div>
         </div>
          <div className='new-expense__actions'>
             <button type='button' onClick={addExHandler}>Cancel</button>
             <button type='submit' >Add Expenes</button>
          </div>
          
           </form>
        }
       
        </div>
    );
};

export default ExpenesForm;