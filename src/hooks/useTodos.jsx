import { useCallback } from "react";
import useLocalStorage from "./useLocalStorage";

/**
 * Custom hook encapsulating all todo-list CRUD operations.
 * Persists data to localStorage via useLocalStorage.
 *
 * @returns {{
 *   todos:      Array<{ id: string, text: string, completed: boolean }>,
 *   addTodo:    (text: string) => void,
 *   toggleTodo: (id: string) => void,
 *   deleteTodo: (id: string) => void,
 * }}
 */
export default function useTodos() {
  // Load persisted todos – fall back to empty array
  const [todos, setTodos] = useLocalStorage("todos", []);

  // Append a new todo with a unique id
  const addTodo = useCallback(
    (text) => {
      setTodos((prev) => [
        ...prev,
        { id: crypto.randomUUID(), text, completed: false },
      ]);
    },
    [setTodos],
  );

  // Flip the completed flag on the matching todo (immutable update)
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

  // Remove the matching todo entirely
  const deleteTodo = useCallback(
    (id) => {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    },
    [setTodos],
  );

  return { todos, addTodo, toggleTodo, deleteTodo };
}
