import {Link} from 'react-router-dom'

function BtnDet (props) {

return <Link to={props.enlace}><button className="btn-detalles">Ver detalles</button></Link>
}

export default BtnDet