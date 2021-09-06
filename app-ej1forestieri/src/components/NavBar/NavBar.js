import logo from './img/logo.png'
import Cart from '../CartWidget/cartWidget.js'

const NavBar = () => {

    return (
    <nav className="menu">
       <ul>
       <li><a href="index.html" className="logoImagen"><img src={logo} alt="logoAplicacion" /></a></li>
         <li><a href="#">Inicio</a></li>
         <li><a href="#">Sobre nosotros</a></li>
         <li><a href="#">Contacto</a></li>
         <Cart />
       </ul>
       
     </nav>
    )}

export default NavBar;