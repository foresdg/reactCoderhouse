import ItemCountLight from '../ItemCountLight/ItemCountLight.js'

const Item = (props) => {


    return (
        <div className="container-card">
            <img src={props.image}></img>
            <h1 className="nombre-producto">{props.nombre}</h1>
            <p>{props.descripcion}</p>
            <div className="producto">
                <h3 className="h3-producto">${props.precio}</h3>
            </div>
            <ItemCountLight contInicial="1" />
        </div>
    )

}

export default Item;


