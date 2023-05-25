import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodoStatus } from '../redux/TodoSlice';

export function TodoList(){
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

    function  handleToggleTodo(id){
      dispatch(toggleTodoStatus(id))
    }
    return(
        <>
        <ul style={{listStyle:"none"}}>
            {todos.map((todo)=>(

                <li
                 key={todo.id}
                 style={{
                    textDecoration: todo.status === "complete"? "line-through" : "none",
                 }}
                 >
                    <span>{todo.name}</span>
                    <button onClick={() => handleToggleTodo(todo.id)} >
                        {todo.status === "completed"? "Pending":"Completed"}
                    </button>
                </li>
            ))}
        </ul>
        </>
    )
}