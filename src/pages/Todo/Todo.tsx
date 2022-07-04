import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { filterTodo } from "./TodoSlice";
import { TodoForm } from "./TodoForm";
import { TodoItem } from "./TodoItem";
import { RootState } from "../../app/store";

import style from "./Todo.module.scss";

export const Todo = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <div className="center">
      <div className={`${style.todo_wrapper}`}>
        <TodoForm dispatch={dispatch}></TodoForm>
        <div className={style.todo_item_wrapper}>
          {todos.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />;
          })}
        </div>
        <button
          onClick={() => {
            dispatch(filterTodo());
          }}
          className={style.todo_clear}
        >
          Clear completed tasks
        </button>
      </div>
    </div>
  );
};
