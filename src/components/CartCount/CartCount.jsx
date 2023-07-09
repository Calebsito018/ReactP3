import React, { useContext } from 'react'
import "./CartCount"
import { CartContext } from '../../context/CartContext'

const CartCount = () => {
    const { cart } = useContext(CartContext)
    const itemQuantity = cart.reduce((acc, el) => acc + el.quantity, 0);
    
    return <span className='count'>{itemQuantity}</span>
}

export default CartCount