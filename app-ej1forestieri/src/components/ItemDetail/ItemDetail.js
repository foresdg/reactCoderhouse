import { useState } from 'react'
import Contador from '../Contador/Contador'
import BtnTerminar from '../Btn-terminarCompra/BtnTerminarCompra'

const ItemDetail = (props) => {
    const [cantidad, setCantidad] = useState(0)
    console.log('cantidad almacenada: ' + cantidad)
    
    const [cambio, setCambio] = useState(0)
    const Bterminar = BtnTerminar
    const Counter = cambio === 0 ? 
    Contador : Bterminar

    const addToCart = (numberOfProductsAdd) => {
        console.log('agregado al carrito')
        setCantidad(numberOfProductsAdd)
        console.log(cambio)
        setCambio(1)
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
                    <Counter onConfirm={addToCart} stock={parseInt(props.stock)} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail






