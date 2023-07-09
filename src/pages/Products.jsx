import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Products = () => {
    const { dataProducts } = useContext(CartContext);

    return dataProducts.map((product) =>{
        return(
            <div key={product.id}>
                <h2>{product.title}</h2>
                <span>{product.price}</span>
                <Link to={`/item/${product.id}`}>Comprar</Link>
            </div>)
    })
}

export default Products