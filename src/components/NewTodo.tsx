import React, { useRef } from "react";
import "../styles/NewTodo.css";

// the type of the function we'll receive as props.
interface NewTodoProps {
  onAddTodo: (todoText: string) => void;
}

/**
 * if we needed to pass JSX elements or React components as 
 * "children" in "props", the type would be "React.ReactNode".
 */ 
export default function NewTodo(props: NewTodoProps): JSX.Element {
  /**
   * useRef hook has a generic type,so we need to specify
   * the type of the element we're receiveing.
   */
  const textInputRef = useRef<HTMLInputElement>(null);

  // React's type for the event object.
  function todoSubmitHandler(event: React.FormEvent) {
    event.preventDefault();

    // add ! to tell TS we know this will not return null.
    const enteredText = textInputRef.current!.value;

    props.onAddTodo(enteredText);
  }
  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">ToDo Text</label>
        <input id="todo-text" ref={textInputRef} type="text" />
      </div>
      <button>ADD TODO</button>
    </form>
  );
}
