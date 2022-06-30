import React from "react";

import data from "./data.json";
import { TodoItem } from "./TodoItem/TodoItem";

export const Todo = () => {
  return (
    <div>
      {data.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
};
