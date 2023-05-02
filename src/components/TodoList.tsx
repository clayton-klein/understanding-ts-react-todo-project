import "../styles/TodoList.css";

// the type of the "props" we want to receive.
interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

// attributing the created type to the props.
export default function TodoList(props: TodoListProps): JSX.Element {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          {/**
           * We expect to receive the "todo id" as a parameter of
           * this handler, so we had to "bind" it, the first
           * argument is about the "this" keyword, we don't care
           * about it in this case so we set it to "null" and the
           * second argument will be the first argument of the
           * "onDeleteTodo" handler. Without binding, it wouldn't
           * work.
           */}
          <button onClick={props.onDeleteTodo.bind(null, todo.id)}>
            DELETE
          </button>
        </li>
      ))}
    </ul>
  );
}
