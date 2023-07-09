import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';

const CartProducts = () => {

    const { cart, removeProduct, updateQuantity, count, setCount, state, setState} = useContext(CartContext)

    return cart.map((product) =>{
        return(
            <div key={product.id}>
                <div>{product.title}</div>
                    <div>
                        <div>
                            <span>{product.price}</span>
                        </div>
                    </div>
            </div>
        )
    })
}

export default CartProducts