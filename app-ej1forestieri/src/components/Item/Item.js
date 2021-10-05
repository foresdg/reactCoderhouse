import BtnDet from '../Btn-det/Btn-Det.js'

const Item = ({product}) => {

    console.log(product)

    return (

        
        <div className="container-tarjeta">
            <img src={product.img} alt="img-track"></img>
            <h1 className="nombre-producto">{product.title}</h1>
            <div className="producto">
                <h3 className="h3-producto">${product.price}</h3>
            </div>
            <BtnDet product={product}/>
        </div>
    )

}

export default Item;