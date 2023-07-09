import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
const Item = () => {
    // const filterById = JsonData.filter ((product) => product.id === parseInt(itemId))

    const [dataProducts, setDataProducts] = useState([])
    const { itemId } = useParams();
    const [loading, setLoading] = useState(true)
    // const [error, setError] = useState("")

    useEffect(()=> {
        const db = getFirestore();
        const productCollection = doc(db, "products", itemId)
        getDoc(productCollection).then((snapshot) =>{
            setDataProducts([{id: snapshot.id, ...snapshot.data()}]);
            setLoading(false);
        })
        .catch((error) => console.log(error))
        .then(() => setLoading(false))
    }, [itemId])
    return (
        <div>
            <ItemDetailContainer dataProducts ={dataProducts}/>
        </div>
    )
}

export default Item