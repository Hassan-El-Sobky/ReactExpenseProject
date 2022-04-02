import ExpenseItem from "./ExpenseItem";
import ExpenesFilter from './ExpenesFilter';
import { useState } from 'react';



function Expenes(props){
     let {expenes}=props
     const [filterYear,setFilterYear]=useState(2020);
    console.log(expenes);
    const filterValue=(year)=>{
          setFilterYear(year);
        
    };
    
    const filterdExpenes=expenes.filter(exp=>exp.expenseDate.includes(filterYear));
    console.log(filterdExpenes);
    
    return (
           <div>
         <ExpenesFilter filterValue={filterValue}></ExpenesFilter>  
               {filterdExpenes.map(exp=><ExpenseItem key={exp.id} Obj={exp}></ExpenseItem>)};

           </div>
    )
}

export default Expenes;