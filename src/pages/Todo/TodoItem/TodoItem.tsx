import React from "react";

import { TodoItemProps } from "../../../common/types";
import { toggleTodo } from "../TodoSlice";
import style from "../Todo.module.scss";

export const TodoItem = ({ todo, dispatch }: TodoItemProps) => {
  return (
    <div className={`${style.todo_item}`}>
      <label className={style.todo_checkbox}>
        <input
          type="checkbox"
          name=""
          id=""
          checked={todo.complete}
          onChange={() => dispatch(toggleTodo(todo))}
        />
        <span className={style.todo_checkmark}></span>
      </label>
      <i className={`${todo.complete ? style.linethrough : ""}`}>{todo.task}</i>
    </div>
  );
};
