import CartItem from '../CartItem/CartItem'
import {useContext, useEffect, useState} from 'react'
import cartContext from '../../context/cartContext'
import {Link} from 'react-router-dom'

const Cart = () => {

    const {products, getTotal, clearCart} = useContext(cartContext)
    console.log(products)

    const [listaProductos, setListaProductos] = useState(products)

    const vaciaCarrito = () => {
        clearCart()
        setListaProductos([])
    }


    if (listaProductos.length === 0) {
      
        return (
            <div className="cartList-container-row">
            <h2>El carrito está vacío</h2>
            <Link exact to='/'><button className="btn-general">Volver al Home</button></Link>
            </div>
        )

        
    }

    return(

        <div className="cartList-container">

            {listaProductos.map(soundClip => <CartItem nombre={soundClip.title} precio={soundClip.price} image={soundClip.img} descripcion={soundClip.descripcion} id={soundClip.id} quantity={soundClip.quantity} />)}
            
            <div>
                <h2>Total ${getTotal()}</h2>
                <button className="btn-general" onClick={()=>vaciaCarrito()}>Vaciar Carrito</button>
                </div>
        
        </div>        
    )
}

export default Cart
