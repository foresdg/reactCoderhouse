const ItemCount = (props) => {


    return (
        <div className="container-card">
            <h1 className="nombre-producto">{props.nombre}</h1>
            <div className="producto">
                
                <h3 className="h3-producto">${props.precio}</h3>
                <img src={props.img}></img>
                
            </div>
            <button className="btn-addCarrito">Agregar al carrito</button>
        </div>
    )

}

export default ItemCount;