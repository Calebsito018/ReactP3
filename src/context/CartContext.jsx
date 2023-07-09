import React, { createContext, useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from "firebase/firestore";

export const CartContext = React.createContext()

export const CartProvider = ({children}) => {
    const [dataProducts, setDataProducts] = useState ([])
    const [cart, setCart] = useState([]);   
    const [state, setState] = useState(0);
    const [count, setCount] = useState(0);

    const [loading, setLoading] = useState (false)

    useEffect(() => {
        const db = getFirestore();
        const productCollection = collection(db, "products");
        getDocs(productCollection)
        .then((snapshot) => {
            if (snapshot.docs) {
                setDataProducts(
                    snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                    );
                    setLoading(false);
                }
            })
            .catch((error) => console.log(error))
            .then(() => setLoading(false));
        }, []);

    return (
            <CartContext.Provider  value={{dataProducts, setDataProducts, loading, setLoading, cart, setCart, state, setState, count, setCount}}>
                {children}
            </CartContext.Provider>
    )
}

// export default CartContext