import React from "react";
import { useSelector } from "react-redux";
import TodoCard from "../../components/ui/TodoCard/TodoCard";
import "./Pending.css";

function Pending() {
  const todos = useSelector((state) => state.todos.todos);
  const pendingTodos = todos.filter((todo) => todo.complete !== true);

  return (
    <div className="pending-page">
      {pendingTodos.map((todo, index) => (
        <TodoCard todo={todo} key={index} />
      ))}
    </div>
  );
}

export default Pending;
