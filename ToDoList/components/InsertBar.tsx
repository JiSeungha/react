import React, { useRef, useState } from "react";

const InsertBar = ({ todo, setTodo }) => {
  const [inputs, setInputs] = useState("");

  const onChange = (e) => {
    setInputs(e.target.value);
  };

  const addData = (e) => {
    if (e.key === "Enter") {
      const newTodoList = todo.concat({
        idx: +new Date(),
        content: e.target.value,
        done: false,
      });
      setTodo(newTodoList);
      setInputs("");
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-black hover:bg-teal"
        value={inputs}
        placeholder=" Insert Here ... "
        onChange={onChange}
        onKeyPress={addData}
      />
    </form>
  );
};

export default InsertBar;
