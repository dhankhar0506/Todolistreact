import React , {useState} from 'react'
import { useDispatch} from 'react-redux'
import { AddInput } from '../redux/TodoSlice';

export function Todo(){

    const [name , setName] = useState('');

    const dispatch = useDispatch();

 function  handleInput(e){
   setName(e.target.value)
 }

 function handleAddButton(){
    if(name.trim() !== ''){
        const newTodo ={
            id: Date.now().toString(),
            name:name.trim(),
            status:"pending",
        };
        dispatch(AddInput(newTodo));
        setName(" ");
    }
 }

    return(
        <>
        <div>
            <input
             type="text"  
            value={name}
            onChange={handleInput}/>
            <button onClick={handleAddButton}>Add Todo</button>
        </div>
        </>
    )
}