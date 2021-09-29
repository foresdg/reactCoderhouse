import { useState } from "react"

const Contador = ({onConfirm}) => {
   
    const [count, setCount] = useState(0)
    

    const handleRemove = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }

    const handleAdd = () => {
        if(count <= 1000) {
            setCount(count + 1)
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

export default Contador