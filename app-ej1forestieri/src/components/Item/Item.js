import BtnDet from '../Btn-det/Btn-Det.js'
import {Link} from 'react-router-dom'

const Item = (props) => {


    return (

        
        <div className="container-card">
            <img src={props.image}></img>
            <h1 className="nombre-producto">{props.nombre}</h1>
            <div className="producto">
                <h3 className="h3-producto">${props.precio}</h3>
            </div>
            <BtnDet key={props.id}/>
        </div>
    )

}

export default Item;