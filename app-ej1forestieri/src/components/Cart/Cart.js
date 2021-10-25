import CartItem from '../CartItem/CartItem'
import {useContext, useState, useEffect} from 'react'
import cartContext from '../../context/cartContext'
import {Link} from 'react-router-dom'
import { 
    collection, addDoc, getDoc, doc ,
    Timestamp, writeBatch 
} from 'firebase/firestore'
import { db } from '../../services/firebase'
import FinCompra from '../FinCompra/FinCompra'


const Cart = () => {

    const {products, getTotal, clearCart} = useContext(cartContext)
    const [listaProductos, setListaProductos] = useState(products)
    const [total, setTotal] = useState()
    const [processingOrder, setProcessingOrder] = useState(false)
    const [datosUsuario, setDatosUsuario] = useState({
        nombre:'',
        telefono:'',
        email:''
    })

    const handleInputChange = (event) => {
        setDatosUsuario({
            ...datosUsuario,
            [event.target.name] : event.target.value

        })
    }

    useEffect(() => {
        setTotal(getTotal())
    }, [getTotal])

    const vaciaCarrito = () => {
        clearCart()
        setListaProductos([])
    }


    const finalizar = () => {




        const orden = {
            buyer: datosUsuario,
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
                    console.log('Pedido exitoso')
                })
            }).catch((error) => {
                console.log('Error en el pedido')
            }).finally(() => {
                setProcessingOrder(false)
                clearCart()
                setTotal(0)
            })
        }

        return <FinCompra />


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

            <div className="actions-container">
            <h2>Por favor, ingrese sus datos para completar la compra</h2>
                <form>
                <input type="text" placeholder="Nombre y Apellido" className="campo-form" name="nombre" onChange={handleInputChange} />
                <input type="text" placeholder="Teléfono" className="campo-form" name="telefono" onChange={handleInputChange} />
                <input type="text" placeholder="Email" className="campo-form" name="email" onChange={handleInputChange} />
                </form>

            <div className="final">
                <h2>Total ${getTotal()}</h2>
                <Link to="/FinCompra"><button className="btn-general"onClick={()=>finalizar()}>FINALIZAR COMPRA</button></Link>
                <button className="btn-general" onClick={()=>vaciaCarrito()}>Vaciar Carrito</button>
                
            </div> </div>
            
        </div>        
    )
}

export default Cart
