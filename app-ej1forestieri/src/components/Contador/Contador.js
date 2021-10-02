import {useState, useEffect, useContext} from 'react';
import CartContext from '../../context/cartContext'


const Contador = ({track}) => {

    const [quantity, setquantity] = useState (0)
    const { addItem, isInCart, getProduct, removeProduct } = useContext(CartContext)

    useEffect(() => {
        if(isInCart(track.id)) {
           const oldQuantity = getProduct(track.id)?.quantity
           setquantity(oldQuantity)
        }
        return(() => {
            setquantity(0)
        })
    }, [track, getProduct, isInCart])

    const sumaProducto = () => {

        if (quantity >= track.stock) {
            alert(`Disculpe, el stock disponible es de ${track.stock}`)
        } else {
            setquantity(quantity + 1)
        }        
    };

    const restaProducto = () => {
        if (quantity <= 0) {
            console.log('No hay productos para agregar')
        } else {
            setquantity(quantity - 1)
        }
    }

    const sumaProductoCarrito = () => {
        
        isInCart(track.id) ? alert("El producto ya fue agregado al carrito") : addItem(track, quantity)
    }

    const eliminaProductoCarrito = () => {
        removeProduct(track.id)
    }

    return (
        <div className="container-contador">
            {/* <h1 className="nombre-producto">{track.nombre}</h1> */}
            <div className="contador">
                    <button className="btn-contador" onClick={restaProducto}>-</button>
                    <h3 className="h3-contador">{quantity}</h3>                
                    <button className="btn-contador" onClick={sumaProducto}>+</button>                
            </div>
                <div className="botones-count">
                    <button className="btn-addCarrito" onClick={()=>sumaProductoCarrito()}>Agregar al carrito</button>
                    <button className="btn-addCarrito" onClick={()=>eliminaProductoCarrito()}>Eliminar del carrito</button>
                </div>
        </div>
    )

}

export default Contador;