import React from "react";

import { TodoItemProps } from "../../../common/types";
import style from "../Todo.module.scss";

export const TodoItem = ({ todo, handleToggle }: TodoItemProps) => {
  return (
    <div className={`${style.todo_item}`}>
      <p>
        <input
          type="checkbox"
          name=""
          id=""
          checked={todo.complete}
          onChange={() => handleToggle(todo.id)}
        />
        <i className={`${todo.complete ? style.linethrough : ""}`}>
          {todo.task}
        </i>
      </p>
    </div>
  );
};
