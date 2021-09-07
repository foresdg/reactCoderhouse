import logo from './img/cw.png'

function addProducts () {
    
}

const Cart = (props) => {

    const valorInicial = props.contInicial;



    return (
        <div className="derecha">
        <img src={logo} alt="logo-carrito" className="cart-right" />
        <p className="numero-cart">{valorInicial}</p>
        </div>
    )}

export default Cart;