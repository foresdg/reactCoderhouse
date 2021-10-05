import {Link} from 'react-router-dom'

function BtnDet ({product}) {

return <Link to='/item/:itemid'><button className="btn-detalles">Ver detalles</button></Link>
}

export default BtnDet