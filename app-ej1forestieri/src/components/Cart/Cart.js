import CartItem from '../CartItem/CartItem'
import {useContext, useState, useEffect} from 'react'
import cartContext from '../../context/cartContext'
import {Link} from 'react-router-dom'
import { 
    collection, addDoc, getDoc, doc ,
    Timestamp, writeBatch 
} from 'firebase/firestore'
import { db } from '../../services/firebase'


const Cart = () => {

    const {products, getTotal, clearCart} = useContext(cartContext)
    const [listaProductos, setListaProductos] = useState(products)
    const [total, setTotal] = useState()
    const [processingOrder, setProcessingOrder] = useState(false)


    useEffect(() => {
        setTotal(getTotal())
    }, [getTotal])

    const vaciaCarrito = () => {
        clearCart()
        setListaProductos([])
    }


    const finalizar = () => {


        const orden = {
            buyer: 'user',
            items: products,
            total: total,
            date: Timestamp.fromDate(new Date())
        }
                    
        const lote = writeBatch(db)
        const sinStock = []
            
        orden.items.forEach((prod, i) => {
            getDoc(doc(db, 'elementos', prod.id)).then(DocumentSnapshot => {
                if(DocumentSnapshot.data().stock >= orden.items[i].quantity) {
                    lote.update(doc(db, 'elementos', DocumentSnapshot.id), {
                        stock: DocumentSnapshot.data().stock - orden.items[i].quantity
                    })
                } else {
                    sinStock.push({...DocumentSnapshot.data(), id: DocumentSnapshot.id})
                }
                    
            })
        })

        if(sinStock.length === 0) {
            addDoc(collection(db, 'pedidos'), orden).then(() => {
                lote.commit().then(() => {
                    console.log('Orden exitosa')
                })
            }).catch((error) => {
                console.log('Error de ejecución')
            }).finally(() => {
                setProcessingOrder(false)
                clearCart()
                setTotal(0)
            })
        }

    }

    if (listaProductos.length === 0) {
      
        return (
            <div className="cartList-container-row">
            <h2>El carrito está vacío</h2>
            <Link exact to='/'><button className="btn-general">Volver al Home</button></Link>
            </div>
        )

        
    }

    return(

        <div className="cartList-container">

            <div className="productRow">
            {listaProductos.map(prod => <CartItem nombre={prod.title} precio={prod.price} image={prod.img} descripcion={prod.descripcion} id={prod.id} quantity={prod.quantity} />)}
            
            </div>
            <form>
                <h2>Por favor, ingrese sus datos para completar la compra</h2>
                <input type="text" placeholder="Nombre y Apellido" className="campo-form"></input>
                <input type="text" placeholder="Teléfono" className="campo-form"></input>
                <input type="text" placeholder="Email" className="campo-form"></input>
            </form>

            <div className="final">
                <h2>Total ${getTotal()}</h2>
                <button className="btn-general" onClick={()=>vaciaCarrito()}>Vaciar Carrito</button>
                {/* <button className="btn-general"onClick={()=>finalizar()}>FINALIZAR COMPRA</button></div> */}
                </div>
        
        </div>        
    )
}

export default Cart
