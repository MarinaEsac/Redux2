interface ToDo {
    id: number;
    text: string;
}
export const AddTodo = (todo: ToDo) => {
    return {
      type: 'ADD_TODO',
      todo,
    };
  };

export const RemoveTodo = (todo: ToDo) => ({
  type:'DELETE_TODO',
  todo,
});
