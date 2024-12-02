
import { React } from "react";

import { useDispatch, useSelector } from 'react-redux'
import { useState } from "react";
import { setTodo, removeList, updateTodo } from "../slice/todoSlice";
import { nanoid } from "@reduxjs/toolkit";

const Counter = () => {
    const [input, setInput] = useState('')
    const[update,setUpdate]=useState(input)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!input.trim()) {
            console.log('Input is empty. Action not dispatched.');
            return;
        }

        dispatch(setTodo({ id: nanoid(), text: input }))

        setInput('')
    }

    const updateHandler = (data) => {
        console.log(input, 'chcking what data is getting dispatched ')

        setInput(data)
        console.log(data,input,'checking things out')
        dispatch(updateTodo({data:data,updated:input}))
        setInput(input)
    }

    const data = useSelector((state) => state.todo.todo)
    const updatedText=useSelector((state)=>state.todo.update)
    console.log(updatedText,'updated text')
    console.log(data, "whole state")
    //console.log(data,'here is useselector data')
    return (
        <>
            <div>
                <h2>todo list</h2>
                <input type="text" value={input} onChange={(e) => { setInput(e.target.value) }}  onClick={(e)=>{setUpdate(e.target.value)}} />

                <button onClick={handleSubmit}>add</button>
            </div>
            <ul>
                {data.map((i) => {
                    return (
                        <li key={i.id}>
                            <div>{i.text}</div>
                            <button onClick={() => { dispatch(removeList(i.id)) }}>Delete</button>
                            <button onClick={() => { updateHandler({ id: i.id, text: i.text }) }}>update</button>
                        </li>
                    );
                })}
            </ul>

        </>
    )
}
export default Counter