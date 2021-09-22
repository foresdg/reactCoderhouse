import {useParams} from 'react-router-dom'
import Item from '../Item/Item.js'




function ItemCategorySoundFx (props) {

    const tracksIn = props.tracks
    const { soundfx } = useParams()
    const catTracks = tracksIn.filter(tr => tr.cat === 'soundfx')


    return(

        <div className="itemList-container"> 

            {catTracks.map(ctr => <Item nombre={ctr.title} precio={ctr.price} image={ctr.pictureUrl} />)}

        </div>
    
        )
    }

export default ItemCategorySoundFx