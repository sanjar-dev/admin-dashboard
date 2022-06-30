import React from "react";

interface TodoData {
  id: number;
  task: string;
  complete: boolean;
}

interface TodoItemProps {
  todo: TodoData;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <div>
      <p>
        <input type="checkbox" name="" id="" checked={todo.complete} />
        {todo.task}
      </p>
    </div>
  );
};
