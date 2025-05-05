import { useState } from "react";

export default function TaskList({ list = [], addList }) {
  const [task, setNewTask] = useState("");
  const [state, setState] = useState("Add");
  const [indexTrack, setIndexTrack] = useState(-1);

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "auto",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#333" }}>Task Manager</h2>

      <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
        <input
          placeholder="Enter new task"
          name="task"
          onChange={(e) => setNewTask(e.target.value)}
          value={task}
          style={{
            flex: "1",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />

        <button
          onClick={() => {
            if (state === "Add") {
              if (task.trim() !== "") {
                if (list[0] === "Tasks will be shown here") {
                  list.pop();
                }
                addList([...list, task]);
                setNewTask("");
              }
            } else if (state === "Edit") {
              if (task.trim() !== "") {
                let updatedList = list.map((item, idx) =>
                  idx === indexTrack ? task : item
                );
                addList(updatedList);
                setNewTask("");
              }
              setState("Add");
            }
          }}
          style={{
            padding: "8px 12px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {state}
        </button>
      </div>

      <h3 style={{ color: "#333" }}>Tasks</h3>

      <ul
        style={{
          listStyle: "None",
          padding: "0",
        }}
      >
        {list.map((i, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
              backgroundColor: "white",
              borderRadius: "5px",
              marginBottom: "8px",
              boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <li style={{ flex: "1" }}>{i}</li>
            <button
              name={index}
              onClick={(e) => {
                let updatedList = list.filter(
                  (_, idx) => idx !== parseInt(e.target.name)
                );
                addList(updatedList);
              }}
              style={{
                backgroundColor: "#FF5733",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              Remove
            </button>

            <button
              name={index}
              onClick={(e) => {
                setIndexTrack(index);
                setNewTask(list[index]);
                setState("Edit");
              }}
              style={{
                backgroundColor: "#FF5733",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              Edit
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}
