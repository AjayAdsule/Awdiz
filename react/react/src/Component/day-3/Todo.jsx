import React, { useCallback, useState } from "react";
import MultipleTodo from "./MultipleTodo";

const Todo = () => {
  const [counter, setCounter] = useState(0);
  const [todo, setTodo] = useState(["eat launch", "make application"]);
  const addTodo =useCallback(()=>{
    setTodo([...todo, "new item"]);
  },[])
  return (
    <React.Fragment>
      <MultipleTodo todo={todo} addTodo={addTodo} />
      <h3>The count is : {counter}</h3>
      <button className="btn" onClick={() => setCounter(counter + 1)}>
        Add
      </button>
    </React.Fragment>
  );
};

export default Todo;
