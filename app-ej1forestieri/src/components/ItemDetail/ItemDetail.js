import { useState, useContext } from 'react'
import Contador from '../Contador/Contador'
import BtnTerminar from '../Btn-terminarCompra/BtnTerminarCompra'
import cartContext from '../../context/cartContext'

const ItemDetail = ({track}) => {
    const [cantidad, setCantidad] = useState(0)
    console.log('cantidad almacenada: ' + cantidad)
    
    const {isInCart, addItem, quantity} = useContext(cartContext)

    const [cambio, setCambio] = useState(0)


    const Bterminar = BtnTerminar
    const Counter = cambio <= 0 ? 
    Contador : Bterminar

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
                    <Counter track={track} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail






