import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Todo from "./components/Todo/todoItem";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Todo />,  
    children: [
      {
        path: "todo",       
        element: <Todo />,
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
