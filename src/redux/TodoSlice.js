import {createSlice} from '@reduxjs/toolkit'

const TodoSlice = createSlice({
    name:"todos",

    initialState:[],

    reducers:{
        AddInput:(state,action)=>{
             state.push(action.payload)
        },

        toggleTodoStatus:(state, action)=>{
          const todo = state.find((todo)=> todo.id === action.payload)
          if(todo){
            todo.status = todo.status === "pending"? "completed" : "pending"
          }
        },
    }
})

export const {AddInput,toggleTodoStatus} = TodoSlice.actions
export default TodoSlice.reducer