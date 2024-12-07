
import React from "react";
import { useContext } from "react";
import {CartContext} from './context'



const Item = (props) => { 

    const cart=useContext(CartContext)

    console.log(cart,'data')

    return (
        <>
            <div className="item">
                <h2>Item name:{props.name} </h2>
                <h2>Item price : $ {props.price}</h2>
                <button >
                    Add to cart
                </button>
            </div>
        </>
    )
}
export default Item 