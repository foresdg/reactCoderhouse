import {useEffect, useState} from 'react'
import Item from '../Item/Item.js'

function ItemDetailContainer (props) {

    function getProductos() {
        return new Promise ((resolve, reject) => {
    
            setTimeout(() => resolve(props.tracks), 2000)
            })
    }

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

            

            {listaProductos.map(soundClip => <Item nombre={soundClip.title} precio={soundClip.price} image={soundClip.pictureUrl} descripcion={soundClip.descripcion} link={`/item/${soundClip.id}`}/>)}

        </div>
    
    )
}

export default ItemDetailContainer