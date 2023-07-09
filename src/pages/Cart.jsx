import React, { useContext } from 'react'
import CartProducts from '../components/CartProducts/CartProducts'
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const ClearContext = () =>{
    const { setCart, setCount } = useContext(CartContext);

        setCart([]);
        setCount(0);
    }

    return (
        <div>
            <h1>carrito</h1>
            <CartProducts/>
            <button onClick={ClearContext}>Vaciar Carrito</button>
        </div>
    )
}

export default Cart