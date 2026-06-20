import "./todoItem.css";

export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <>
      <div className="todo-item">
        <input
          type="checkbox"
          id={`taskCheckbox-${todo.id}`}
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <label htmlFor={`taskCheckbox-${todo.id}`} id={`taskLabel-${todo.id}`}>
          {todo.text}
        </label>
        <button onClick={() => deleteTodo(todo.id)}>X</button>
      </div>
    </>
  );
}
