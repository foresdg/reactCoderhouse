import { createContext, useState } from "react";
import Cart from "../components/CartWidget/cartWidget";

const Context = createContext()

export const CartCacheMask = ({children}) => {

    const [cartCache, setCartCache] = useState([])

    function addItem (item, quantity) {
        setCartCache(item + quantity)
    }

    function removeItem (itemId) {
        setCartCache(itemId)
    }

    function clear () {
        setCartCache('borrar todo')
    }
    
    function isInCart (id) {
        setCartCache(id)
        //ciclar y buscar por id y responder true | false
    }
    return (
            <Context.Provider value={{cartCache, addItem, removeItem, clear, isInCart}}>
                {children}
            </Context.Provider>
    )
}

export default Context