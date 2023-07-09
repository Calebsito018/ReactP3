import React from 'react'
//components
import CartWidget from '../CartWidget/CartWidget';
// import bootstrap
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import fontawesome
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
//Link Router Dom
import { Link } from 'react-router-dom';
//css
import "./navbar.css"

const NavBar = () => {
    return (
        <Navbar bg='dark' expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Electro Baires</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link className='nav-link'to="/">Inicio</Link>
                    <Link className='nav-link'to="/products">Productos</Link>
                    <Link className='nav-link'to="/404">Contacto</Link>
                    <Link className='nav-link'to="/404">Referencias</Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <Link className='dropdown-item' to="/category/cabezales">Cabezales</Link>
                        <Link className='dropdown-item' to="/category/farolas">Farolas</Link>
                        <Link className='dropdown-item' to="/category/industriales">Industriales</Link>
                        <Link className='dropdown-item' to="/category/lineales">Lineales</Link>
                        <Link className='dropdown-item' to="/">Action</Link>
                        <Link className='dropdown-item' to="/">Action</Link>
                        <Link className='dropdown-item' to="/">Action</Link>
                        <Link className='dropdown-item' to="/">Action</Link>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    )
}

export default NavBar