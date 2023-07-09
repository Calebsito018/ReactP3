import React from 'react'
import { useParams } from 'react-router-dom'
import { JsonData } from '../json/asyncMock';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
const Category = () => {
    const {categoryId} = useParams();
    const filterByCategory = JsonData.filter(product => product.category === categoryId)
    return (
        <ItemListContainer jsonData={filterByCategory}/>
    )
}

export default Category