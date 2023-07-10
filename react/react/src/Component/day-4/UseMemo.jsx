import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [counter,setCounter]=useState(0);
    const [todo,setTodo]=useState(['Make Breakfast','eat launch'])
    const number=useMemo(()=> {return higherCalculation(counter)},[counter])
    const handleTodo=()=>{
        setTodo([...todo,'new item'])
    }
  return (
    <React.Fragment>
      <h2 style={{textAlign:'center'}}>Use memo page</h2>
      <h1>Calculation </h1>
      <p>{number}</p>
      <button className='btn' onClick={()=>setCounter(counter+1)}>Add</button>
      {
        todo.map((item,index)=>{
            return (
                <div className='item' key={index}>
                    <p>{item}</p>
                </div>
            )
        })
      }
      <button className="btn" onClick={handleTodo}>Add todo</button>
    </React.Fragment>
  )
}
const higherCalculation=(number)=>{
    console.log('inside calculation...');
    for(let i=0;i<100000;i++){
        number=number+1
    }
    return number;
}
export default UseMemo
