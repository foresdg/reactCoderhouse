import {useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router'
import Item from '../Item/Item.js'
import CartContext from '../../context/cartContext'
import { db } from '../../services/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'


function ItemList () {

    const [products, setProducts] = useState([])
    const {categoryid} = useParams()
    
    useEffect(() => {
        if(!categoryid) {
            getDocs(collection(db, 'elementos')).then((querySnapshot) => {
                const products = querySnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                }) 
                
                setProducts(products)
            }).catch((error) => {
                console.log('Error searching intems', error)
            }).finally(() => {
                
            })
        } else {
   
            getDocs(query(collection(db, 'elementos'), where('category', '==', categoryid))).then((querySnapshot) => {
                const products = querySnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                }) 
                setProducts(products)
            }).catch((error) => {
                console.log('Error searching intems', error)
            }).finally(() => {
                
            })
        }      
    }, [categoryid])

    

    return(

        <div className="itemList-container">

            {products.map(product => <Item product={product} />)}

        </div>
    
    ) 

}

export default ItemList