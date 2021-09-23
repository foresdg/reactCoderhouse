import { useState } from 'react'


const Contador = ({onConfirm, props}) => {
    const [count, setCount] = useState(0)
    

    const handleRemove = () => {
        if(count > 0) {
            setCount(count - 1)
            console.log('resta')
        }
    }

    const handleAdd = () => {
        if(count >= props.stock) {
            setCount(count + 1)
            console.log(count)
        }
    }

    return (
        <div className="container-contador">
            <div className="contador">
                <button className="btn-contador" onClick={handleRemove}>-</button>
                    <div className="div-contador"><p>{count}</p></div>
                <button className="btn-contador" onClick={handleAdd}>+</button>              
            </div>
            <button className="btn-addCarrito" onClick={() => onConfirm(count)}>Agregar al Carrito</button>
        </div>
    )
}


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
                    <Count onConfirm={addToCart} contInicial="0" stock={props.stock} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail






