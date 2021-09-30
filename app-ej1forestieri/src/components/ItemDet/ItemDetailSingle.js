import {useParams} from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail.js'



function ItemDetailSingle ({tracks}) {

    
    const { id } = useParams()
    const track = tracks.find(tr => tr.id === id)


    // console.log(track)
    return(

        <div className="itemList-container"> 


            <ItemDetail track={track} />
        </div>
    
        )
    }

export default ItemDetailSingle