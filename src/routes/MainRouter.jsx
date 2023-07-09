import React from 'react'
//router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//components
import NavBar from '../components/NavBar/NavBar'
//pages
import Home from "../pages/Home"
import Category from "../pages/Category"
import Item from "../pages/Item"
import Products from '../pages/Products'
import Cart from '../pages/Cart'
const MainRouter = () => {
    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path='/category/:categoryId' element={<Category/>}/>
                <Route path='/item/:itemId' element={<Item/>}/>
                <Route path='/products' element={<Products/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path="*" element={<h1 style={{textAlign:'center'}}>404 Not Found</h1>}/>
            </Routes>
        </Router>
    )
}

export default MainRouter