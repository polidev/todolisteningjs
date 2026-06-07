import { useCallback } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useTodos() {
  const [todos, setTodos] = useLocalStorage("todos", []);

  const addTodo = useCallback(
    (text) => {
      setTodos((prev) => [
        ...prev,
        { id: crypto.randomUUID(), text, completed: false },
      ]);
    },
    [setTodos],
  );

  const toggleTodo = useCallback(
    (id) => {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo,
        ),
      );
    },
    [setTodos],
  );

  const deleteTodo = useCallback(
    (id) => {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    },
    [setTodos],
  );

  return { todos, addTodo, toggleTodo, deleteTodo };
}
