import {useEffect, useState} from 'react'
import Item from '../Item/Item.js'

const tracks = [
    {id: 1, title: 'Space wrapper', price: 5, pictureUrl:''},
    {id: 2, title: 'Sioux', price: 3, pictureUrl:''},
    {id: 3, title: 'PFL Track', price: 8, pictureUrl:''},
    {id: 4, title: 'Quiet room', price: 2, pictureUrl:''},
    {id: 5, title: 'DXL flute', price: 4, pictureUrl:''}
];

function getProductos() {
    return new Promise ((resolve, reject) => {

        setTimeout(() => resolve(tracks), 2000)
        })
}

function ItemList () {

    const [listaProductos, setListaProductos] = useState([])

    useEffect(() => {

        const lista = getProductos()

        lista.then(lista => {
            setListaProductos(lista)
        })

    }, [])

    return(

        <div className="itemList-container">

            {listaProductos.map(soundClip => <Item nombre={soundClip.title} precio={soundClip.price} />)}

        </div>
    
    )
}

export default ItemList