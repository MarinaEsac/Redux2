// import React, { useState } from 'react';
// import { connect, ConnectedProps, useDispatch } from 'react-redux';
// import { todoAction } from './redux/todos/actions';
// import { ToDo } from './redux/todos/model';
// import { generate } from 'shortid';
// // import { RootState } from './reducers/rootReducer';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import TodoList from './components/TodoList/todoList';

// // const mapStateToProps = (state:RootState) => ({
// //   todos: state.todos,
// // });

// // const connector = connect(mapStateToProps);

// // type PropsFromRedux = ConnectedProps<typeof connector>;

// const App: React.FC= (dispatch) => {
//   const [state, setState] = useState<string>('');

//   const updateState = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setState(event.target.value);
//     console.log(event);
//   };

//   const createTodo = () => {
//     const newTodo :any = new ToDo(generate() as unknown as number, state );
//     dispatch(todoAction(newTodo));
//     toast.success(`Added a Todo: ${state}`);
//     setState('');
//   };

//   return <>
//     <div className="container">
//       <ToastContainer />
//       <h2>Add Todo</h2>
//       <p>What you want to do?</p>
//       <input type="text" value={state} onChange={updateState} required />
//       <button type="button" onClick={createTodo}>Create</button>
//     </div>
//     <div>
//     <hr style={{ margin: '20px 0', borderColor: '#ddd' }} />
//     <TodoList />
//     </div>
//   </>
// };

// export default connect()(App);

import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { AddTodo, RemoveTodo } from "./redux/todos/actions";
import { ToDo } from "./redux/todos/model";
import { generate } from "shortid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TodoList from "./components/TodoList/todoList";

const App: React.FC = () => {
  const [state, setState] = useState<string>("");
  const [todos, setTodos] = useState<ToDo[]>([]);
  const dispatch = useDispatch();

  const updateState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };

  const createTodo = () => {
    const newTodo: ToDo = new ToDo(generate() as unknown as number, state);
    dispatch(AddTodo(newTodo));
    setTodos([...todos, newTodo]);
    toast.success(`Added a Todo: ${state}`);
    setState("");
  };

  const del = (todo: ToDo) => {
    dispatch(RemoveTodo(todo));
    setTodos(todos.filter(t => t.id !== todo.id)); 
    toast.info(`Deleted: ${todo.text}`);
  };

  return (
    <>
      <div className="container">
        <ToastContainer />
        <h2>Add Todo</h2>
        <p>What do you want to do?</p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <input type="text" value={state} onChange={updateState} required style={{ flexGrow: 1, marginRight: '10px' }} />
          <button type="button" onClick={createTodo} className="btn btn-primary">
            Create
          </button>
        </div>
      </div>
      <div>
        <hr style={{ margin: "20px", borderColor: "#ddd" }} />
        <h3>Your Todos:</h3>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>{todo.text}</span>
                <button className="btn btn-danger" type="button" onClick={() => del(todo)}>
                  Delete
                </button>
              </div>
              <hr style={{ margin: "20px", borderColor: "#fff" }} />
            </li>
          ))}
        </ul>
        <TodoList />
      </div>
    </>
  );
};

export default connect()(App);
