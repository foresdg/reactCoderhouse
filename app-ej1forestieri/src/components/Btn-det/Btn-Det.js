import {Link} from 'react-router-dom'

function BtnDet () {

return <Link to='item/:id'><button className="btn-detalles">Ver detalles</button></Link>
}

export default BtnDet