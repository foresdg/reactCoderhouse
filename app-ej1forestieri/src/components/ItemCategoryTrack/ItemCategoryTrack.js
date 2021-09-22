import {useParams} from 'react-router-dom'
import Item from '../Item/Item.js'




function ItemCategoryTrack (props) {

    const tracksIn = props.tracks
    const { song } = useParams()
    const catTracks = tracksIn.filter(tr => tr.cat === 'song')

    return(

        <div className="itemList-container"> 

            {catTracks.map(ctr => <Item nombre={ctr.title} precio={ctr.price} image={ctr.pictureUrl} />)}

        </div>
    
        )
    }

export default ItemCategoryTrack

