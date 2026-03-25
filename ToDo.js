import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Todo() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  // Add Task
  const addTask = () => {
    if (task.trim() === "") {
      alert("Enter a task");
      return;
    }

    if (list.some(item => item.text === task)) {
      alert("Task already exists");
      return;
    }

    const updatedList = [...list, { text: task, done: false }]
      .sort((a, b) => a.text.localeCompare(b.text));

    setList(updatedList);
    setTask("");
  };

  // Delete Task
  const deleteTask = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  // Toggle Done
  const toggleDone = (index) => {
    const newList = [...list];
    newList[index].done = !newList[index].done;
    setList(newList);
  };

  return (
    <div style={container}>

      {/* Header */}
      <div style={header}>✔ TODO</div>

      {/* Input */}
      <div style={inputBox}>
        <input
          type="text"
          placeholder="Add task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") addTask();
          }}
          style={input}
        />

        <button
          onClick={addTask}
          style={addBtn}
          onMouseDown={(e) => e.target.style.transform = "translateY(2px)"}
          onMouseUp={(e) => e.target.style.transform = "translateY(0)"}
        >
          Add
        </button>
      </div>

      {/* Animated List */}
      <AnimatePresence>
        {list.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.03 }}
            style={taskBox}
          >
            <input
              type="checkbox"
              checked={item.done}
              onChange={() => toggleDone(index)}
            />

            <span
              style={{
                ...taskText,
                textDecoration: item.done ? "line-through" : "none",
                color: item.done ? "gray" : "black"
              }}
            >
              {item.text}
            </span>

            <button
              onClick={() => deleteTask(index)}
              style={deleteBtn}
            >
             Delete
            </button>
          </motion.div>
        ))}
      </AnimatePresence>

    </div>
  );
}

/* ===== STYLES ===== */

const container = {
  width: "350px",
  margin: "40px auto",
  background: "#d8ead2",
  borderRadius: "8px",
  fontFamily: "Arial",
  boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
};

const header = {
  background: "#1b5e20",
  color: "white",
  padding: "12px",
  fontWeight: "bold",
  boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
};

const inputBox = {
  display: "flex",
  background: "#7cb342",
  padding: "10px",
  boxShadow: "inset 0 2px 5px rgba(0,0,0,0.2)"
};

const input = {
  flex: 1,
  padding: "8px",
  border: "none",
  outline: "none",
  borderRadius: "4px"
};

const addBtn = {
  marginLeft: "10px",
  padding: "8px 12px",
  background: "#cddc39",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
  borderRadius: "4px",
  boxShadow: "0 4px 0 #9e9d24",
  transition: "0.2s"
};

const taskBox = {
  display: "flex",
  alignItems: "center",
  background: "#eee",
  margin: "10px",
  padding: "10px",
  borderRadius: "5px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
  transition: "0.3s"
};

const taskText = {
  flex: 1,
  marginLeft: "10px"
};

const deleteBtn = {
  background: "transparent",
  border: "none",
  cursor: "pointer",
  color: "red",
  fontWeight: "bold",
  transition: "0.2s"
};

export default Todo;