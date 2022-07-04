import { useCallback, useState, useEffect } from "react";
import React, { Component } from "react";
import InsertBar from "../components/InsertBar";
import ToDoList from "../components/ToDoList";

const EditableToDoList = ({ list, setList, listIdx, todolist }) => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    todolist && setTodo(todolist);
  }, []);

  useEffect(() => {
    // 로컬스토리지에서 값을 가져온다
    let datas = "";
    // todo에서 map을 돌려 datas object에 추가한다
    todo.map((item) => {
      // stuff 에는 Item object에 들어있는 [idx, content, done]가 들어간다.
      datas += JSON.stringify(item) + ",";
    });
    if (datas !== null && datas !== "null,") localStorage.setItem(listIdx, "[" + datas.slice(0, -1) + "]");
  }, [todo]);

  return (
    <div className="inline-flex">
      <div className="bg-primary-darken text-bold text-black">
        <b className="text-grey-darkest">To Do</b>
        <button
        className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-green text-green border-green hover:bg-green"
          type="button"
          onClick={() => {
            setList(list.filter((e) => e.idx !== listIdx));
          }}
        >
          [-]
        </button>
        <InsertBar
          className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
          todo={todo}
          setTodo={setTodo}
        />
        <ToDoList todo={todo} setTodo={setTodo} />
      </div>
    </div>
  );
};

export default EditableToDoList;
