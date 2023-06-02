import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";
import React, { useState } from "react";
function App() {
  // 이 useState는 Todo의 배열을 관리한다는 제네릭 타입지정
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prev) => [...prev, newTodo]);
  };
  const removeTodoHandler = (id: string) => {
    console.log(id);
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    // setTodos((prev) => prev.filter((todo) => todo.id !== todoId));
    // setTodos((prev) => prev.filter((todo) => todo.id !== item));
  };
  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
