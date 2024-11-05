import React from "react";
import { connect, useDispatch } from "react-redux";
import { generate } from "shortid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToDo } from '../../redux/todos/model';
import { AddTodo, RemoveTodo } from '../../redux/todos/actions';
import { useFormik } from "formik";

const Todo: React.FC = () => {
  const [todos, setTodos] = React.useState<ToDo[]>([]);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { text: "" },
    onSubmit: (values, { resetForm }) => {
      const newTodo: ToDo = new ToDo(generate() as unknown as number, values.text);
      dispatch(AddTodo(newTodo));
      setTodos([...todos, newTodo]);
      toast.success(`Added a Todo: ${values.text}`);
      resetForm(); 
    },
    validate: (values) => {
      const errors: { text?: string } = {};
      if (values.text.length < 3 || values.text.length > 30) {
        errors.text = "Text should be between 3 and 30 characters.";
      }
      return errors;
    },
  });

  const deleteTodo = (todo: ToDo) => {
    dispatch(RemoveTodo(todo));
    setTodos(todos.filter(t => t.id !== todo.id)); 
    toast.info(`Deleted: ${todo.text}`);
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="container">
          <ToastContainer />
          <h2>Add Todo</h2>
          <p>What do you want to do?</p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <input
              name="text"
              type="text"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.text}
              required
              style={{ flexGrow: 1, marginRight: '10px' }}
            />
            <button type="submit" className="btn btn-primary">
              Create
            </button>
          </div>
          {formik.touched.text && formik.errors.text ? (
            <div style={{ color: "red", marginTop: "5px" }}>{formik.errors.text}</div>
          ) : null}
        </div>
      </form>
      <div>
        <hr style={{ margin: "20px", borderColor: "#ddd" }} />
        <h3>Your Todos:</h3>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>{todo.text}</span>
                <button className="btn btn-danger" type="button" onClick={() => deleteTodo(todo)}>
                  Delete
                </button>
              </div>
              <hr style={{ margin: "20px", borderColor: "#fff" }} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default connect()(Todo);
