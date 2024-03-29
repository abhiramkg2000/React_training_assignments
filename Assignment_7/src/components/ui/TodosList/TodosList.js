import React from 'react'
import {useSelector} from "react-redux";
import TodoCard from '../TodoCard/TodoCard';

function TodosList() {
  const todos=useSelector((state)=>state.todos.todos);
  // console.log(...todos);
  return (
    <>
      {
      todos?
        todos.map((todo,index)=>{
        return (
          <TodoCard todo={todo} key={index}/>
        )
        }):<p className="api_error">Check the api call,not able to get todos...</p>
      }
    </>
  );
}

export default TodosList;