import {useContext, useEffect, useState} from 'react'
import Item from '../Item/Item.js'
import CartContext from '../../context/cartContext'


function ItemList () {

    const {products} = useContext(CartContext)

    const [listaProductos, setListaProductos] = useState([])

    console.log(products)

    // setListaProductos(products)

    return(

        <div className="itemList-container">

            {listaProductos.map(soundClip => <Item nombre={soundClip.title} precio={soundClip.price} />)}

        </div>
    
    )
}

export default ItemList