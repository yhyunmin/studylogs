import React from "react";

const Todos: React.FC<{ items: string[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item, i) => (
        <li key={item + i}>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;
