import { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo.model";

/**
 * The JSX.Element type is implicitly returned by TS, so there's
 * no need to add it, here we're just being explicit for the sake
 * of exercising.
 */
export default function App(): JSX.Element {
  const [todos, setTodos] = useState<Todo[]>([]);

  function todoAddHandler(text: string) {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  }

  function todoDeleteHandler(todoId: string) {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  }

  return (
    <>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </>
  );
}
