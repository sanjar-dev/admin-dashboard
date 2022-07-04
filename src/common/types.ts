import { Dispatch } from "@reduxjs/toolkit";

export interface TodoData {
  id: number;
  task: string;
  complete: boolean;
}

export interface TodoItemProps {
  todo: TodoData;
  // handleToggle: Function;
  dispatch: Dispatch;
}

export interface TodoFormProps {
  dispatch: Dispatch;
  // addTask: Function;
}
