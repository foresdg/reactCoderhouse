import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Item from '../Item/Item.js'
import { db } from '../../services/firebase'
import { doc, getDoc } from 'firebase/firestore'




function ItemDetailContainer () {

    const [product, setProduct] = useState(undefined)
    const [loading, setLoading] = useState(true)
    const {itemid} = useParams()
    
    useEffect(() => {
        setLoading(true)
        getDoc(doc(db, 'elementos' , itemid)).then((querySnapshot) => {
            const product = { id: querySnapshot.id, ...querySnapshot.data()}
            console.log(product)
            setProduct(product)
        }).catch((error) => {
            console.log('Error searching intems', error)
        }).finally(() => {
            setLoading(false)
        })
        return (() => {
            setLoading(true)
            setProduct(undefined)
        })
    },[itemid])

    return(

        <div className="itemList-container">

            {loading ? 'loading...' : <Item product={product} />}

        </div>
    
    ) 
}

export default ItemDetailContainer