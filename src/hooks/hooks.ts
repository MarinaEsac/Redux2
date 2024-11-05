import { useState } from "react";
import { useDispatch } from "react-redux";
import { ToDo } from "../redux";

export const useTodo = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState<string>("");
  const [todos, setTodos] = useState<ToDo[]>([]);

  return {
    state,
    setState,
    todos,
    setTodos,
    dispatch,
  };
};
