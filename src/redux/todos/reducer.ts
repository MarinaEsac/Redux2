import { ADD_TODO } from "./actionTypes";

export interface Todo {
  todo: string;
}

export interface TodoAction {
  type: string;
  todo: string;
}

const initialState: Todo[] = [];

export const todos = (state: Todo[] = initialState, action: TodoAction): Todo[] => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { todo: action.todo }];

    default:
      return state;
  }
};