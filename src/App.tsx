import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TodoItem from './pages/todo';

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <TodoItem />,  
    children: [
      {
        path: "todo",       
        element: <TodoItem />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return (
    <RouterProvider router={myRouter} />
  );
};

export default App;
