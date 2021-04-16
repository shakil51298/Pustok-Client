import React from 'react';
import {Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NaviGationBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

const NavigationBar = () => {
    return (
        <Navbar expand="lg">
            <Navbar.Brand><Link to="/" className="navBrand" style={{color:'rgba(98,171,0,255)' , fontSize:'35px' , fontWeight:'1000'}}>
                <FontAwesomeIcon className="pr-2" icon={faBookOpen}/>
                PUSTOK</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link className="navBarText"><Link to="/">HOME</Link></Nav.Link>
                    <Nav.Link className="navBarText"><Link to = "/dashboard">Dashboard</Link></Nav.Link>
                    <Nav.Link className="navBarText"><Link to = "/">ADMIN</Link></Nav.Link>
                    <Nav.Link className="navBarText"><Link to = "/login">LOGIN</Link></Nav.Link>
                    <Nav.Link className="navBarText"><Link to = "/">SERVICES</Link></Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="navBarText">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="navBarText"><Link to = "/">PROFILE</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar; <Link to="/">Home</Link>