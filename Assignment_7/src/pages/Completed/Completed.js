import React from "react";
import { useSelector } from "react-redux";
import TodoCard from "../../components/ui/TodoCard/TodoCard";
import "./Completed.css";

function Completed() {
  const todos = useSelector((state) => state.todos.todos);
  const completedTodos = todos.filter((todo) => todo.complete === true);

  return (
    <div className="completed-page">
      {completedTodos.map((todo, index) => (
        <TodoCard todo={todo} key={index} />
      ))}
    </div>
  );
}

export default Completed;
