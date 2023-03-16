import React from "react";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { addTodo, incrementId } from "../../../store/features/todosSlice/todosSlice";

import "./InputTodo.css";

function InputTodo() {
  const [todo, setTodo] = useState("");
  const todoId=useSelector((state)=>state.todos.todosLength);
  const dispatch = useDispatch();

  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (todo !== "") {
      dispatch(incrementId());
      dispatch(addTodo([todo,todoId+1]));
      setTodo("");
    }
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        data-testid="inputTodo"
        value={todo}
        onChange={handleTodoChange}
        name="inputTodo"
        placeholder="What do you need to do today?"
      />
      {/* <button >Add todo</button> */}
      <i data-testid="addTodo" className="fa-solid fa-plus" onClick={handleAddTodo}></i>
    </div>
  );
}

export default InputTodo;
