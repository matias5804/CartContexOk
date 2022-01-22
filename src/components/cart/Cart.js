import React, { useContext } from 'react'
import { CartContext } from '../context/useContext'



const Cart = () => {

    const {addedProducts, removeItem, clear} = useContext(CartContext)

    return (
        <div>

            <h1>soy un Carrito</h1>

            {
               addedProducts.map((item) => {
                    <div key={item.id}>

                        <br/><br/>
                        <h1>{item.name} - {item.quantyti}</h1>
                        <h3 onClick={() => removeItem (item.id)}>Borrar Producto</h3>
                    
                    </div>
                })
            }

            <h3 onClick={() => clear()}>Vaciar Carrito</h3>
        
        </div>
    )
}

export default Cart