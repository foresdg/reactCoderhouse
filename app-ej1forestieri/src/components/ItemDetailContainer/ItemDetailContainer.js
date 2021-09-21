import {useEffect, useState} from 'react'
import Item from '../Item/Item.js'


const tracks = [
    {id: 1, title: 'Space wrapper', price: 5, pictureUrl:'/img/1.jpg', descripcion: 'Un track de sonidos espaciales producido por XLR'},
    {id: 2, title: 'Sioux', price: 3, pictureUrl:'/img/2.jpg', descripcion: 'El protagonismo ambient con los pads de Brex22'},
    {id: 3, title: 'PFL Track', price: 8, pictureUrl:'/img/3.jpg', descripcion: 'Otra descripción de un track aún mejor de XLR'},
    {id: 4, title: 'Quiet room', price: 2, pictureUrl:'/img/4.jpg', descripcion: 'Sonidos tribales para videos de tonos anaranjados'},
    {id: 5, title: 'DXL flute', price: 4, pictureUrl:'/img/5.jpg', descripcion: 'El nuevo ingreso a la colección de manos de AmbientMST'}
];

function getProductos() {
    return new Promise ((resolve, reject) => {

        setTimeout(() => resolve(tracks), 2000)
        })
}

function ItemDetailContainer () {

    const [listaProductos, setListaProductos] = useState([])

    useEffect(() => {

        const lista = getProductos()

        lista.then(lista => {
            setListaProductos(lista)
        })

    }, [])

    if(listaProductos.length === 0) {
        return <h2>Cargando</h2>
    }

    return(

        <div className="itemList-container">

            

            {listaProductos.map(soundClip => <Item nombre={soundClip.title} precio={soundClip.price} image={soundClip.pictureUrl} descripcion={soundClip.descripcion} />)}

        </div>
    
    )
}

export default ItemDetailContainer