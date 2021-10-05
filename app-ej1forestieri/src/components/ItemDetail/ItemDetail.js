import { useState, useContext } from 'react'
import Contador from '../Contador/Contador'
import BtnTerminar from '../Btn-terminarCompra/BtnTerminarCompra'
import cartContext from '../../context/cartContext'

const ItemDetail = ({product}) => {
    const [cantidad, setCantidad] = useState(0)
    console.log('cantidad almacenada: ' + cantidad)
    
    const {isInCart, addItem, quantity} = useContext(cartContext)

    const [cambio, setCambio] = useState(0)



    const Bterminar = BtnTerminar
    const Counter = cambio <= 0 ? 
    Contador : Bterminar

    console.log(product)

    return (
        <div className="container-tarj">
            
            <div className="seccion1">
                <img src={product.img} alt="img"></img>

            </div>

            <div className="seccion2">
                <div className="producto-spc">
                <h1 className="nombre-spc">{product.title}</h1>
                <p>{product.description}</p>            
                    <h3 className="h3-spc">${product.price}</h3>
                    <Counter track={product} setCambio={setCambio} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail






