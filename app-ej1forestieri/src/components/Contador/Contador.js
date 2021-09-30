import {useState, useEffect, useContext} from 'react';
import CartContext from '../../context/cartContext'


const Contador = (track) => {

    const [quantity, setquantity] = useState ([])
    const { addItem, isInCart, getProduct } = useContext(CartContext)

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
            alert(`el stock disponible es de ${track.stock}`)
        } else {
            setquantity(quantity + 1)
        }        
    };

    const restaProducto = () => {
        if (quantity <= 0) {
            console.log('No puede comprar negativo')
        } else {
            setquantity(quantity - 1)
        }
    }

    const sumaProductoCarrito = () => {
        addItem(track, quantity)
        setquantity(quantity)
        console.log('este es el product >' + track.stock)
    }

    return (
        <div className="container-contador">
            {/* <h1 className="nombre-producto">{track.nombre}</h1> */}
            <div className="contador">
                    <button className="btn-contador" onClick={restaProducto}>-</button>
                    <h3 className="h3-contador">{quantity}</h3>                
                    <button className="btn-contador" onClick={sumaProducto}>+</button>                
            </div>
            <button className="btn-addCarrito" onClick={()=>sumaProductoCarrito()}>Agregar al carrito</button>
        </div>
    )

}

export default Contador;