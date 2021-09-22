import logo from './img/logo.png'
import Cart from '../CartWidget/cartWidget.js'
import { Link } from 'react-router-dom'


const NavBar = () => {

    return (
    <nav className="menu">
       <ul>
        <li><Link exact to='/'><img src={logo} alt="logoAplicacion" /></Link></li>
         
         <Link exact to='/'><li>Inicio</li></Link>
         
         <Link exact to='/categoria/:song'><li>Tracks</li></Link>
         
         <Link exact to='/category/:soundfx'><li>Efectos de sonido</li></Link>
         
         <Cart contInicial="0" />
       </ul>
       
     </nav>
    )}

export default NavBar;