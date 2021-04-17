import React, { useContext } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NaviGationBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { userContext } from '../../../App';
import styled, { keyframes } from 'styled-components';

const NavigationBar = () => {
    const rotate = keyframes`
    form{
        transform : rotate(0deg);
    }
    to{
        transform : rotate(360deg);
    }
    `
    const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;
    const [loggedInUser, serLoggedInUser] = useContext(userContext)

    return (
        <Navbar expand="lg">
            <div className="" >
                <Rotate>
                    <Navbar.Brand><Link to="/" className="navBrand" style={{ color: 'rgba(98,171,0,255)', fontSize: '35px', fontWeight: '1000' }}>
                        <FontAwesomeIcon className="pr-2" icon={faBookOpen} />
                PUSTOK</Link></Navbar.Brand>
                </Rotate>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link ><Link className="text-secondary navBarText" to="/">HOME</Link></Nav.Link>
                    <Nav.Link ><Link className="text-secondary navBarText" to="/dashboard">Dashboard</Link></Nav.Link>
                    <Nav.Link ><Link className="text-secondary navBarText" to="/allAdmin">ADMIN</Link></Nav.Link>
                    <Nav.Link ><Link className="text-secondary navBarText" to="/login">LOGIN</Link></Nav.Link>
                    <Nav.Link href="#featureBooks" className="text-secondary navBarText">SERVICES</Nav.Link>
                    {
                        loggedInUser.email ? <Nav.Link ><Link to="/userProfile">
                            <img className="ml-0 rounded-circle" width="40%" src={loggedInUser.photoURL} alt="profile photo" />
                        </Link>
                        </Nav.Link>
                            :
                            <Nav.Link ><Link to="/login" className="text-secondary navBarText">log in</Link></Nav.Link>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar; <Link to="/">Home</Link>