import logo from './img/logo.png'
import Cart from '../CartWidget/cartWidget.js'
import { Link, NavLink } from 'react-router-dom'


const NavBar = () => {

    return (
    <nav className="menu">
       <ul>
       <li><Link to='/'><img src={logo} alt="logoAplicacion" /></Link></li>
         <li><a href="#">Inicio</a></li>
         <li><a href="#">Tracks</a></li>
         <li><a href="#">Efectos de sonido</a></li>
         <Cart contInicial="0" />
       </ul>
       
     </nav>
    )}

export default NavBar;