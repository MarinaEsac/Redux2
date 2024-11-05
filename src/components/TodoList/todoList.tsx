import React, { useState } from 'react';
import { ToDo } from './../../redux/todos/model';

interface Todo {
  id: number;
  text: string;
}

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC = () =>{
  const [todos, setTodos] = useState<ToDo[]>([]); 

  return (
    <section>
        <ul>
            {todos.map((todo: Todo) =>{
              return (
                <div>
                <li key={todo.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                </li>
                    <div>{todo.text}
                    </div>
                </div>
            )}
            )}
        </ul>
    </section>
);
};

export default TodoList;

