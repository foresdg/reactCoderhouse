import { Link } from 'react-router-dom'

const BtnTerminar = () => {

    return (
    <Link exact to ='/cart'><button className="terminarcompra">TERMINAR COMPRA</button></Link>
    )
}

export default BtnTerminar