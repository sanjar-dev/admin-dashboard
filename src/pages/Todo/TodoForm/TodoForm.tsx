import React, { useState } from "react";

import { addTodo } from "../TodoSlice";
import { TodoFormProps } from "../../../common/types";
import style from "../Todo.module.scss";

export const TodoForm = ({ dispatch }: TodoFormProps) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (ev: React.FormEvent<HTMLInputElement>) => {
    setUserInput(ev.currentTarget.value);
  };

  const handleSubmit = (ev: React.FormEvent<HTMLElement>) => {
    ev.preventDefault();
    if (userInput !== "") dispatch(addTodo(userInput));
    setUserInput("");
  };

  return (
    <div className={style.todo_form_wrapper}>
      <input type="text" value={userInput} onChange={handleChange} />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};
