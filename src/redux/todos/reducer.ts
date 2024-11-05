import { ADD_TODO } from "./actionTypes";

const initialState:any=[]
export interface TodoType{
    type:string;
    todo:string
}

export const todos = (state: any = initialState , {type , todo}:TodoType)=> {
   switch (type) {
    case ADD_TODO:
    return[...state , todo] 
   
    default:
        return state;
   }
};

