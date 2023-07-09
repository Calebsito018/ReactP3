import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import CartCount from '../CartCount/CartCount'
const CartWidget = () => {
    return (
        <Link className='cart-button' to="/cart">
            <FontAwesomeIcon icon={faBagShopping} />
            <CartCount/>
        </Link>
    )
}

export default CartWidget