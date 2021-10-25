import logo from './img/logo.png'
import CartWidget from '../CartWidget/cartWidget.js'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import cartContext from '../../context/cartContext'

const NavBar = ({widgetChange, setWidgetChange}) => {

  const { getQuantity } = useContext(cartContext)
  const [carritoVisible, setCarritoVisible] = useState(getQuantity())


    return (
    <nav className="menu">
       <ul>
        <li><Link exact to='/'><img src={logo} alt="logoAplicacion" /></Link></li>
         
         <Link exact to='/'><li>Inicio</li></Link>
         
         {(getQuantity() > 0) && <CartWidget /> }
       </ul>
       
     </nav>
    )}

export default NavBar;