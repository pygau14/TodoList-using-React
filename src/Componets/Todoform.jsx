import React, { useEffect, useState } from "react";
import Addbutton from "./Addbutton";

let ta = [];
function Todoform() {
  const [todo, setTodo] = useState("");
  const [taskList, setTaskList] = useState(ta);
  const [show, setShow] = useState({ display: "none" });

  useEffect(() => {
    renderList(taskList);
  }, [taskList]);

  function renderList(taskList) {
    return (
      <div className="list-rect" id="divList">
        {taskList.map((todos) => {
          return (
            <div className="todos-rect" id={todos + "div"}>
              <p className="list" id={todos + "id"}>
                {todos}
              </p>
              <Addbutton id={todos} taskList={taskList} />
            </div>
          );
        })}
      </div>
    );
  }

  function updateTodo(e) {
    e.preventDefault();
    ta.push(todo);
    setTaskList(ta);
    setShow({ display: "block" });
  }

  return (
    <>
      <h3 style={{ fontSize: "30px" }}>what's the plan for today</h3>
      <input
        placeholder="Enter Todo"
        className="todo-input"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      ></input>
      <button onClick={updateTodo} className="todo-button">
        Add Todo
      </button>
      <div style={{ display: show.display }}>{renderList(taskList)}</div>
    </>
  );
}
export default Todoform;
