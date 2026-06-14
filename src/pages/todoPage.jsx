import TodoInput from "../components/todoInput/todoInput.jsx";
import TodoItem from "../components/todoItem/todoItem.jsx";
import useTodos from "../hooks/useTodos.jsx";

export default function TodoPage() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  const completed = todos.filter((t) => t.completed).length;
  const total = todos.length;

  return (
    <>
      <TodoInput addTodo={addTodo} />
      <section>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </section>

      <section>
        {total > 0 && (
          <p>
            {completed} of {total} tasks complete
          </p>
        )}
      </section>
    </>
  );
}
