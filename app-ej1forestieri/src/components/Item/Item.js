import BtnDet from '../Btn-det/Btn-Det.js'

const Item = (props) => {


    return (

        
        <div className="container-tarjeta">
            <img src={props.image} alt="img-track"></img>
            <h1 className="nombre-producto">{props.nombre}</h1>
            <div className="producto">
                <h3 className="h3-producto">${props.precio}</h3>
            </div>
            <BtnDet enlace={props.link}/>
        </div>
    )

}

export default Item;