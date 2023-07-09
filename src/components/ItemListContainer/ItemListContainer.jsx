import React from 'react'

//css
import "./itemlistcontainer.css"
//components
import Cards from "../Cards/Cards"
//axios
const ItemListContainer = ({jsonData}) => {
    return (
        <section className='card-container'>
            {
                jsonData.map((product) =>{
                    return <Cards jsonData={product} key={product.id}/>
                })
            }
        </section>
    )
}

export default ItemListContainer