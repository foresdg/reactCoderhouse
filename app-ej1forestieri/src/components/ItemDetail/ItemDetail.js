import { useState } from 'react'
import Contador from '../Contador/Contador'
import BtnTerminar from '../Btn-terminarCompra/BtnTerminarCompra'

const ItemDetail = ({track}) => {
    const [cantidad, setCantidad] = useState(0)
    console.log('cantidad almacenada: ' + cantidad)
    
    const [cambio, setCambio] = useState(0)
    const Bterminar = BtnTerminar
    const Counter = cambio === 0 ? 
    Contador : Bterminar

    const addToCart = (numberOfProductsAdd) => {
        console.log('agregado al carrito')
        setCantidad(numberOfProductsAdd)
        console.log(track.stock)
        setCambio(1)
    }

    
    return (
        <div className="container-tarj">
            
            <div className="seccion1">
                <img src={track.pictureUrl} alt="img"></img>

            </div>

            <div className="seccion2">
                <div className="producto-spc">
                <h1 className="nombre-spc">{track.title}</h1>
                <p>{track.descripcion}</p>            
                    <h3 className="h3-spc">${track.price}</h3>
                    <Counter onConfirm={addToCart} track={track} setCantidad={setCantidad} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail






