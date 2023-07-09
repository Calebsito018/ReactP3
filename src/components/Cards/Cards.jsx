import React from 'react'
//css
import "./cards.css"
//link
import { Link } from 'react-router-dom';
const Cards = ({jsonData}) => {
    // console.log(jsonData);
    return (
        <Link to={`/item/${jsonData.id}`}className='card'>
            <h2>{jsonData.title}</h2>
            <img src={jsonData.images} alt="" />
        </Link>
    )
}

export default Cards