import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(() => {
    try {
      const storedTodos = localStorage.getItem("todos");
      return storedTodos ? JSON.parse(storedTodos) : [];
    } catch {
      return [];
    }
  });

  const [search, setSearch] = useState("");
  // here I want to filter the todos based on the search term
  const filteredTodos = todos.filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()));
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  const handleAdd = () => {
    const text = inputRef.current.value.trim();
    if (!text) {
      return;
    }
    const newItem = { completed: false, text: text };
    setTodos([...todos, newItem]);
    inputRef.current.value = "";
  };

  const handleItemDone = (index) => {
    const newTodos = todos.map((item, i) => {
      if (i === index) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTodos(newTodos);
    console.log(newTodos);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditValue(todos[index].text);
    setIsEditOpen(true);
  };

  const handleCloseEdit = () => {
    setIsEditOpen(false);
    setEditIndex(null);
    setEditValue("");
  };

  const handleSaveEdit = () => {
    const nextText = editValue.trim();
    if (!nextText || editIndex === null) {
      handleCloseEdit();
      return;
    }

    setTodos((prevTodos) =>
      prevTodos.map((item, index) =>
        index === editIndex ? { ...item, text: nextText } : item,
      ),
    );
    handleCloseEdit();
  };

  const handleEditModalKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSaveEdit();
    }
    if (e.key === "Escape") {
      handleCloseEdit();
    }
  };

  const handleDelete = (index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <div className="header">
        <h2>To Do List</h2>
        <div className="input-container">
          <input ref={inputRef} onKeyDown={handleKeyDown} />
          <button onClick={handleAdd}>Add</button>
        </div>
      </div>
      <div className="to-do-container">
        <ul>
          {todos.map((item, index) => {
            return (
              <div className="to-do-item" key={`${item.text}-${index}`}>
                <li className={item.completed ? "completed" : ""}>
                  <span
                    className="todo-text"
                    onClick={() => handleItemDone(index)}
                  >
                    {item.text}
                  </span>
                </li>
                {/* edit icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                  className="edit-icon"
                  onClick={() => handleEdit(index)}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                  />
                </svg>
                {/* delete icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                  className="delete-icon"
                  onClick={() => handleDelete(index)}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
                {/* Mark as done icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                  className="done-mark"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </div>
            );
          })}
        </ul>
      </div>

      {isEditOpen && (
        <div className="modal-overlay" onClick={handleCloseEdit}>
          <div className="edit-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Edit Task</h3>
            <input
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              onKeyDown={handleEditModalKeyDown}
              autoFocus
            />
            <div className="modal-actions">
              <button className="cancel-btn" onClick={handleCloseEdit}>
                Cancel
              </button>
              <button className="save-btn" onClick={handleSaveEdit}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
