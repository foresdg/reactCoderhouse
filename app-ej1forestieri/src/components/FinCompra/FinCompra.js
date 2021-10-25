import {Link} from 'react-router-dom'

const FinCompra = () => {

    return (
        <div className="main-finCompra"><h3>Gracias por su compra</h3>
        <Link exact to='/'> <button className="btn-general">Volver al Home</button> </Link>
        </div>
    )

}

export default FinCompra