import React, { useEffect, useRef, useState } from "react";

const DoneItem = ({ todoitem, todo, setTodo }) => {
  const toggleDone = () => {
    const newTodoList = todo.map((item) => ({
      ...item,
      done: item.idx === todoitem.idx ? !item.done : item.done,
    }));
    setTodo(newTodoList);
  };

  return (
    <div>
      <button className="overflow-hidden" onClick={toggleDone}>
        <s>- {todoitem.content}</s>
      </button>
      <button
        className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-red hover:bg-red"
        type="button"
        onClick={() => {
          setTodo(todo.filter((item) => item.idx !== todoitem.idx));
        }}
      >
        [DELETE]
      </button>
    </div>
  );
};

export default DoneItem;
