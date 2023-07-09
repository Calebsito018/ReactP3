import React, { useContext } from 'react'
//css
import "./cardsdetail.css"
import { CartContext } from '../../context/CartContext';

const CardsDetail = ({dataProducts}) => {
    const { cart, setCart, state, setState, count, setCount } = useContext(CartContext);


    //funcion para renderizar productos y cantidad al carrito
    const addToCart = (product) => {
        const existingProductIndex = cart.findIndex((item) => item.id === product.id);
        if (existingProductIndex !== -1) {
            // si esta en el carrito actualiza la cantidad,  quantity
            const updatedCart = cart.map((item, index) =>
            index === existingProductIndex ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCart(updatedCart);
        } else {
            // si no esta en el carrito añade quantity 1
            setCart([...cart, { ...product, quantity: 1 }]);
        }
        };

    const handeClckplus = () =>{
            setCount (count + 1);
            setState (state + 1);
            console.log("agregado");
    };

    return (
        <section className='card-detail'>
            <div className='div1'>
                <h3>{dataProducts.description}</h3>
            </div>
            {/* <div className='card-detail-img-container div2'>
                <img src={dataProducts.images} alt="" />
            </div> */}
            <div className='div3'>
                <h2>{dataProducts.title}</h2>
                <span>{dataProducts.price}</span>
                <button className='btn-add-cart'onClick={() => {addToCart(dataProducts); handeClckplus()}} >Agregar al Carrito</button>
            </div>
        </section>
    )
}

export default CardsDetail