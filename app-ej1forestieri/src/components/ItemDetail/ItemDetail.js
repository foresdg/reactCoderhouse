import { useState } from 'react'
import Contador from '../Contador/Contador'


const ItemDetail = (props) => {
    const [cantidad, setCantidad] = useState(0)
    console.log('cantidad almacenada: ' + cantidad)
    
    const Count = Contador

    const addToCart = (numberOfProductsAdd) => {
        console.log('agregado al carrito')
        setCantidad(numberOfProductsAdd)
    }

    
    return (
        <div className="container-tarj">
            
            <div className="seccion1">
                <img src={props.image} alt="img"></img>

            </div>

            <div className="seccion2">
                <div className="producto-spc">
                <h1 className="nombre-spc">{props.nombre}</h1>
                <p>{props.descripcion}</p>            
                    <h3 className="h3-spc">${props.precio}</h3>
                    <Count onConfirm={addToCart} contInicial="2" stock={parseInt(props.stock)} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail






