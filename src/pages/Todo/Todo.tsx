import React, { useState } from "react";

import { TodoForm } from "./TodoForm";
import { TodoItem } from "./TodoItem";
import { TodoData } from "../../common/types";

import style from "./Todo.module.scss";
import data from "./data.json";

export const Todo = () => {
  const [todos, setTodos] = useState<TodoData[]>(data);

  const handleToggle = (id: number) => {
    let mapped = todos.map((todo) => {
      return todo.id === id
        ? { ...todo, complete: !todo.complete }
        : { ...todo };
    });
    setTodos(mapped);
  };

  const handleFilter = () => {
    let filtered = todos.filter((todo) => {
      return !todo.complete;
    });
    setTodos(filtered);
  };

  const addTask = (userInput: string) => {
    let copy = [...todos];
    let todo: TodoData = {
      id: todos.length + 1,
      task: userInput,
      complete: false,
    };
    copy = [...copy, todo];
    setTodos(copy);
  };

  return (
    <div className="center">
      <div className={`${style.todo_wrapper}`}>
        <TodoForm addTask={addTask}></TodoForm>
        <div className={style.todo_item_wrapper}>
          {todos.map((todo) => {
            return (
              <TodoItem key={todo.id} todo={todo} handleToggle={handleToggle} />
            );
          })}
        </div>
        <button
          onClick={() => {
            handleFilter();
          }}
          className={style.todo_clear}
        >
          Clear completed tasks
        </button>
      </div>
    </div>
  );
};
