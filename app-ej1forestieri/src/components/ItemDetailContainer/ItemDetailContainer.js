import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
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
            setProduct(product)
            console.log(product)
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

        <div className="main-itemlist">

            {loading ? 'loading...' : <ItemDetail product={product} />}

        </div>
    
    ) 
}

export default ItemDetailContainer