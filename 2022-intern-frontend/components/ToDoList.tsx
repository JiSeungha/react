import React, { useRef, useState } from "react";
import ToDoItem from "./ToDoItem";
import DoneItem from "./DoneItem";
import SearchBar from "./SearchBar";

const ToDoList = ({ todo, setTodo }) => {
  const [text, setText] = useState("");
  return (
    <div>
      <SearchBar text={text} setText={setText} />
      <ul>
        {todo.map((todoitem) => {
          if (!todoitem.done) {
            if (text === "") return <ToDoItem key={todoitem.idx} todoitem={todoitem} todo={todo} setTodo={setTodo} />;
            else if (todoitem.content.includes(text))
              return <ToDoItem key={todoitem.idx} todoitem={todoitem} todo={todo} setTodo={setTodo} />;
          } else return null;
        })}
      </ul>
      <ul>
        {todo.map((todoitem) => {
          if (todoitem.done) {
            if (text == "") return <DoneItem key={todoitem.idx} todoitem={todoitem} todo={todo} setTodo={setTodo} />;
            else if (todoitem.content.includes(text))
              return <DoneItem key={todoitem.idx} todoitem={todoitem} todo={todo} setTodo={setTodo} />;
          } else return null;
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
