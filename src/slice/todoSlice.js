
import { createSlice,nanoid } from "@reduxjs/toolkit";

export const todoHandler=createSlice({
    name:"todo",
    initialState:{
        todo:[]
    },
    reducers:{
        setTodo(state,action){
        state.todo.push(action.payload)
          
        }
        ,
        removeList(state,action){
            //add the remove logic
          state.todo= state.todo.filter((i)=>i.id!==action.payload)
        },
        updateTodo(state,action){
            //add here update logic
            const item = state.todo.find((i) => i.id === action.payload.data.id);
         
            state.todo.map((i)=>{
                if( i.id==item.id){
                    i.text=item.text
                }
               
              
            })
     

            

        }
    }
})

export const {setTodo,removeList,updateTodo}=todoHandler.actions

export default todoHandler.reducer