import React, { FC } from "react";
import classes from "./Todos.module.css";

const TodoItem: FC<{
  id: string;
  text: string;
  onRemoveTodo: (id: string) => void;
}> = ({ text, onRemoveTodo, id }) => {
  return (
    <li className={classes.item} onClick={() => onRemoveTodo(id)}>
      {text}
    </li>
  );
};

export default TodoItem;
