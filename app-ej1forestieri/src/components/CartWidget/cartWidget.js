import logo from './img/cw.png'
import {useContext} from 'react'
import CartContext from '../../context/cartContext'



const CartWidget = () => {

    const { getQuantity, clearCart } = useContext(CartContext)

    {console.log('esto es ' + getQuantity())}

    const limpiaCarrito = () => {
        clearCart()
    }

    return (
        <div className="derecha">
        <img src={logo} alt="logo-carrito" className="cart-right" />
        <p className="numero-cart">{getQuantity()}</p>
        <button className="clear-cart" onClick={()=>limpiaCarrito()}>VACIAR</button>
        </div>

    )}

export default CartWidget;