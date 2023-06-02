import React, { useRef } from "react";
import classes from "./NewTodo.module.css";
const NewTodo: React.FC<{
  onAddTodo: (text: string) => void;
}> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = todoTextInputRef.current?.value;
    if (!enteredText || enteredText.trim().length === 0) {
      alert("빈칸 입력");
      return;
    }
    console.log(enteredText);
    props.onAddTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">
        Todo Text
        <input type="text" id="text" ref={todoTextInputRef} />
        <button>ADD Todo</button>
      </label>
    </form>
  );
};

export default NewTodo;
