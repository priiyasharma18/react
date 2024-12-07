
import React from "react";
import { useContext } from "react";
import {CartContext} from './context'



const Item = (props) => { 

    const {item,setItem}=useContext(CartContext)

   

    return (
        <>
            <div className="item">
                <h2>Item name:{props.name} </h2>
                <h2>Item price : $ {props.price}</h2>
                <button onClick={()=> setItem([...item,{name:props.name,price:props.price}])}>
                    Add to cart
                </button>
            </div>
        </>
    )
}
export default Item 