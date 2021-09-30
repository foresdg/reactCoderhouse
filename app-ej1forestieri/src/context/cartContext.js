import { createContext, useState } from 'react'

const Context = createContext()

export const CartCacheMask = ({ children }) => {
    const [products, setProducts] = useState([])

    const addItem = (item, quantity) => {
        const newProduct = {
            ...item,
            quantity: quantity
        }

        if(!isInCart(item.id)) {
            setProducts([...products, newProduct])
        } else {
            const newProducts = products.map(prod => {
                if(prod.id === item.id) {
                    const newProduct = {
                        ...prod,
                        quantity: quantity
                    }
                    return newProduct
                } else {
                    return prod
                }
            })
            setProducts(newProducts)
        }
    }


    const removeProduct = (id) => {
        const newProducts = products.filter(prod => prod.id !== id)
        setProducts(newProducts)
    }

    const clearCart = () => {
        setProducts([])
    }

    const isInCart = (id) => {
        return products.some(prod => prod.id === id)
    }

    const getTotal = () => {
        let total = 0
        products.forEach(prod => {
            total = total + prod.price * prod.quantity
        })
        return total
    }

    const getQuantity = () => {
        let count = 0
        products.forEach(prod => {
            count = count + prod.quantity
        })
        return count
    }

    const getProduct = (id) => {
        return products.find(prod => prod.id === id)
    }

    return (
        <Context.Provider 
                value={{
                        products, 
                        addItem, 
                        removeProduct, 
                        clearCart, 
                        isInCart, 
                        getQuantity, 
                        getTotal,
                        getProduct
                }}>
            {children}
        </Context.Provider>

    )
}

export default Context

// import { createContext, useState } from "react";
// import Cart from "../components/CartWidget/cartWidget";

// const Context = createContext()

// export const CartCacheMask = ({children}) => {

//     const [cartCache, setCartCache] = useState([])

//     function addItem (item, quantity) {
//         setCartCache(item + quantity)
//     }

//     function removeItem (itemId) {
//         setCartCache(itemId)
//     }

//     function clear () {
//         setCartCache('borrar todo')
//     }
    
//     function isInCart (id) {
//         setCartCache(id)
//         //ciclar y buscar por id y responder true | false
//     }
//     return (
//             <Context.Provider value={{cartCache, addItem, removeItem, clear, isInCart}}>
//                 {children}
//             </Context.Provider>
//     )
// }

// export default Context