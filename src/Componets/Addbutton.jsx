import React, { useEffect, useState } from "react";

function Addbutton(props) {
  const [show1, setShow1] = useState({ display: "inline" });
  const [show2, setShow2] = useState({ display: "none" });
  const [editInput, seteditInput] = useState(props.id);

  useEffect(() => {
    renderEdit();
  }, [show1]);
  function editTask(e) {
    e.preventDefault();
    setShow1({ display: "none" });
    setShow2({ display: "block" });
  }
  function deleteTask(e) {
    setShow1({ display: "none" });
    const divID = props.id + "div";
    document.getElementById(divID).style.display = "none";
  }

  function updateTask() {
    const todoID = props.id + "id";
    document.getElementById(todoID).innerText = editInput;
    setShow2({ display: "none" });
    setShow1({ display: "inline" });
  }
  function renderEdit() {
    return (
      <div>
        <input
          className="editInput"
          value={editInput}
          onChange={(e) => {
            seteditInput(e.target.value);
          }}
        ></input>
        <button onClick={updateTask}>Save</button>
      </div>
    );
  }
  return (
    <div>
      <button
        className="edit-task"
        style={{ display: show1.display }}
        id={props.id}
        onClick={editTask}
      >
        Edit
      </button>
      <button
        className="delete-task"
        style={{ display: show1.display }}
        id={props.id + "del"}
        onClick={deleteTask}
      >
        Delete
      </button>
      <div style={{ display: show2.display }}>{renderEdit()}</div>
    </div>
  );
}
export default Addbutton;
