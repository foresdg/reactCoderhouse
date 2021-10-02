import logo from './img/cw.png'
import {useContext} from 'react'
import CartContext from '../../context/cartContext'
import { Link } from 'react-router-dom'


const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)

    {console.log('esto es ' + getQuantity())}

    return (
        <div className="derecha">
        <Link exact to='/cart'><img src={logo} alt="logo-carrito" className="cart-right" /></Link>
        <p className="numero-cart">{getQuantity()}</p>
        </div>

    )}

export default CartWidget;