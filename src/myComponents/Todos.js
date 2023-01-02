import React from "react";
import { Todoitem } from "../myComponents/Todoitem";
export const Todos = (props) => {
  return (
    <div className="container my - 3">
      <h3 className="my-3 ">Todos List</h3>
      {props.todos.length === 0
        ? "No to dos to Display !!! "
        : props.todos.map((todo) => {
            return (
              <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
};
