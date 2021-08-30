import logo from './img/logo.png'

const NavBar = () => {

    return (
    <nav className="menu">
       <ul>
         <li><a href="index.html"><img src={logo} alt="logoAplicacion" /></a></li>
         <li><a href="#">Inicio</a></li>
         <li><a href="#">Sobre nosotros</a></li>
         <li><a href="#">Contacto</a></li>
       </ul>
     </nav>
    )}

export default NavBar;