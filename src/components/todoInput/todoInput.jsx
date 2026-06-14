import "./todoInput.css";

export default function TodoInput({ addTodo }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const todoInput = document.getElementById("todo-input");
    console.log(todoInput.value.trim());
    addTodo(todoInput.value.trim());
    todoInput.value = "";
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <form id="todo-form" onSubmit={handleSubmit}>
      <input
        id="todo-input"
        type="text"
        placeholder="What needs to be done?"
        onKeyDown={handleKeyDown}
      />
      <button type="submit">+ Add</button>
    </form>
  );
}
