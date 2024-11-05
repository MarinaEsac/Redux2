import { combineReducers , createStore } from 'redux'
import { ToDo } from './todos/model';
import {  todos } from './todos';
import { AddTodo , RemoveTodo} from './todos/actions';

const reducers =combineReducers({
    todos,
})

export default createStore(reducers)
export {AddTodo , RemoveTodo , ToDo}