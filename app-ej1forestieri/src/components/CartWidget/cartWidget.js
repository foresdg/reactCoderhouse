import logo from './img/cw.png'
import {useContext} from 'react'
import CartContext from '../../context/cartContext'



const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)

    {console.log('esto es ' + getQuantity())}

    return (
        <div className="derecha">
        <img src={logo} alt="logo-carrito" className="cart-right" />
        <p className="numero-cart">{getQuantity()}</p>
        </div>

    )}

export default CartWidget;