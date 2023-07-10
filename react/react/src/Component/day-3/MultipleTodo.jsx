import React,{memo} from "react";

const MultipleTodo = ({ todo, addTodo }) => {
    console.log('multiple component')
  return (
    <React.Fragment>
      <p>Todo</p>
      {
        todo.map((item,index)=>{
            return <div key={index}>
                <p>{item}</p>
            </div>
        })
      }
      <button className="btn" onClick={addTodo}>Add todo</button>
    </React.Fragment>
  );
};

export default memo(MultipleTodo);
