import React,{useState} from "react";
import { useContext } from "react";
import { CartContext } from "./context";

const Cart=()=>{
    const {item}=useContext(CartContext)
    
    
    const total=item.reduce((a,b)=> a+ b.price,0)
    return(
        <>
        <h1>Cart</h1>

        <h2>all products</h2>
         {item&&item.map((i)=>{
            return <li>{i.name }{i.price}</li>

         })}

         <h1>total :{total}</h1>
        </>
    )
}
export default Cart