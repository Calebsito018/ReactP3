import React from 'react'
//css
import "./homecontent.css"
//components
import CarouselHome from '../Carousel/CarouselHome'
//img
import image300 from "../../images/300x300.webp"
//Link
import { Link } from 'react-router-dom'

const HomeContent = () => {
    return (
        <div>
            <section className='banner-container'>
                <CarouselHome/>
            </section>
            <section className='categories'>
                <h2>Categorias</h2>
                <div className='categories-container'>
                    <Link to="/category/" className='category-link'>
                        <img src={image300} alt="" />
                        <h3>Novedades</h3>
                    </Link>
                    <Link to="/category/aplidpared" className='category-link'>
                        <img src={image300} alt="" />
                        <h3>Apliques de Pared</h3>
                    </Link>
                    <Link to="/category/cabezales" className='category-link'>
                        <img src={image300} alt="" />
                        <h3>Cabezales</h3>
                    </Link>
                    <Link to="/category/farolas" className='category-link'>
                        <img src={image300} alt="" />
                        <h3>Farolas</h3>
                    </Link >
                    <Link to="/category/industriales" className='category-link'>
                        <img src={image300} alt="" />
                        <h3>Industriales</h3>
                    </Link>
                    <Link to="/category/lineales" className='category-link'>
                        <img src={image300} alt="" />
                        <h3>Lineales</h3>
                    </Link>
                    <Link to="/category/empotrables" className='category-link'>
                        <img src={image300} alt="" />
                        <h3>Spots Empotrables</h3>
                    </Link>
                    <Link to="/category/cintas-led" className='category-link'>
                        <img src={image300} alt="" />
                        <h3>Tiras Led</h3>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default HomeContent