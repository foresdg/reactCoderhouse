import {useState} from 'react';

const ItemCountLight = (props) => {

    const [contador, setContador] = useState (parseInt(props.contInicial));

    function restaProducto () {
        if (contador <= 0) {
            console.log('No puede comprar negativo')
        } else {
            setContador(contador - 1)
        }
    };

    function sumaProducto () {

        if (contador >= props.stock) {
            alert(`el stock disponible es de ${props.stock}`)
        } else {
            setContador(contador + 1)
        }        
    };

    return (
        <div className="container-contador">
            <div className="contador">
                <button className="btn-contador" onClick={restaProducto}>-</button>
                    <div className="div-contador"><p>{contador}</p></div>
                <button className="btn-contador" onClick={sumaProducto}>+</button>              
            </div>
            <button className="btn-addCarrito">Agregar al carrito</button>
        </div>
    )

}

export default ItemCountLight;