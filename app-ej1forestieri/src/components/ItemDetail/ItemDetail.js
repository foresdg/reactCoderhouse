import ItemCountLight from '../ItemCountLight/ItemCountLight.js'

const ItemDetailSingle = (props) => {


    return (
        <div className="container-tarj">
            
            <div className="seccion1">
                <img src={props.image}></img>

            </div>

            <div className="seccion2">
                <div className="producto-spc">
                <h1 className="nombre-spc">{props.nombre}</h1>
                <p>{props.descripcion}</p>            
                    <h3 className="h3-spc">${props.precio}</h3>
                    <ItemCountLight contInicial="1" />
                </div>
            </div>
        </div>
    )

}

export default ItemDetailSingle;


