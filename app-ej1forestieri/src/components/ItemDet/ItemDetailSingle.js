import {useParams} from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail.js'



function ItemDetailSingle (props) {

    const tracks = props.productos
    const { id } = useParams()
    const track = tracks.find(tr => tr.id === id)


    console.log(track)
    return(

        <div className="itemList-container"> 


            <ItemDetail nombre={track.title} precio={track.price} image={track.pictureUrl} descripcion={track.descripcion} />
        </div>
    
        )
    }

export default ItemDetailSingle