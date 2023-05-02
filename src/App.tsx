import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

export default function App(): JSX.Element {
  const todos = [{ id: "td1", text: "finish course" }];

  function todoAddHandler(text: string) {
    console.log(text);    
  }

  return (
    <>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} />
    </>
  );
}
