import "../styles/TodoList.css";
// the type of the "props" we want to receive
interface TodoListProps {
  items: { id: string; text: string }[];
}

// attributing the created type to the props.
/**
 * The JSX.Element type is implicitly returned by TS, so there's
 * no need to add it, here we're just being explicit for the sake
 * of exercising.
 */
export default function TodoList(props: TodoListProps): JSX.Element {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
