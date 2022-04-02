import React from 'react';
import  './NewExpenes.css';
import ExpenesForm from './ExpenesForm';
const NewExpenes = (props) => {

    const saveExpenseHandler=(expenesData)=>{
      const expData={
          ...expenesData,
          id:Math.random().toString()
      }
    props.onAddExpenes(expData)
    }
    return (
        <div className='new-expense'>
            <ExpenesForm onSaveExpenesData={saveExpenseHandler} ></ExpenesForm>
        </div>
    );
};

export default NewExpenes;