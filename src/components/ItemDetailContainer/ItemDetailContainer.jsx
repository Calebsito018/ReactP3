import React from 'react'
import CardsDetail from "../CardsDetail/CardsDetail"

const ItemDetailContainer = ({dataProducts}) => {
    console.log(dataProducts);
    return (
        <section className='card-container'>
            {
                dataProducts.map((product) =>{
                    return <CardsDetail dataProducts={product} key={product.id}/>
                })
            }
        </section>
    )
}

export default ItemDetailContainer