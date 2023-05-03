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
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  }

  return (
    <>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </>
  );
}
//==================== General Notes ===========================

/**
 * we can extract the "signature" of an object using "typeof",
 * hover over the type bellow to see that it has the same 
 * properties and types that "user" has and if we change
 * something in user, it'll automatically change in the type
 * "UserAttributes" as well.
 */ 
const user = {
  id: 1,
  name: "Clayton",
  age: 36,
  isAdmin: true,
  birthDate: new Date("1987-01-21"),
};

type UserAttributes = typeof user;
