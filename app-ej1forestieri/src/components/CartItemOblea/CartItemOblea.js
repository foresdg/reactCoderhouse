import {useContext, useState} from 'react'
import cartContext from '../../context/cartContext'

const CartItemOblea = (props) => {

    const { removeProduct } = useContext(cartContext)
    const [visibilidad, setVisiblidad] = useState(true)

    const eliminaProducto = () => {
        
        removeProduct(props.id)
        setVisiblidad(false)
    }

    return (
        <div>
            {visibilidad ?
            <div className="container-oblea">
                <img src={props.image} alt="img-oblea"></img>
                <h1 className="nombre-producto">{props.nombre}</h1>
            <div className="producto-oblea">
                <h3 className="h3-producto-oblea">Precio ${props.precio}</h3>
                <h3 className="h3-producto-oblea">Cantidad {props.quantity}</h3>
            </div>
                <button className="btn-delete" onClick={()=>eliminaProducto()}>ELIMINAR</button>
            </div> : <div></div>}
    </div>

)

}
export default CartItemOblea