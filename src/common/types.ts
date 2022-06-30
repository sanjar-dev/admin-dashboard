export interface TodoData {
  id: number;
  task: string;
  complete: boolean;
}

export interface TodoItemProps {
  todo: TodoData;
  handleToggle: Function;
}

export interface TodoFormProps {
  addTask: Function;
}
