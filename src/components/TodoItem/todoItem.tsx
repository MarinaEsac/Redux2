import React from "react";
import { ToDo } from "../../redux";
import { useTodo } from "../../hooks/hooks";

interface TodoItemProps {
    todo: ToDo;
    index: number;
  }

const TodoItem: React.FC<TodoItemProps> =({todo, index}) =>{
    const hooks = useTodo()
    return (
    <>
      <li key={index}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>{todo.text}</span>
        </div>
        <hr style={{ margin: "20px", borderColor: "#fff" }} />
      </li>
    </>
  );
}
export default TodoItem