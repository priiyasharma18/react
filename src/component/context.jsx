import { createContext, useState } from "react";

export const CartContext = createContext(null)

export const CartProvider = (props) => {
    const [item, setItem] = useState([])

    return (
        <CartContext.Provider value={{name:"priya"}}>
            {props.children}
        </CartContext.Provider>
    )
}
