import React, {Component} from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import styled from 'styled-components';

export default class Navbar extends Component {
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-primary navbar-style px-sm-5">
            <Link to="/">                
            <ButtonContainer>
                    <span className="mr-2">
                    <i className="fas fa-home" />
                    </span>
                    Home
                </ButtonContainer>                    
            </Link>
            <ul className="navbar-nav">
            <li className="nav-item ml-5">
                <Link to="/" className="nav-link">
                <ButtonContainer>
                  Products
                </ButtonContainer>
                </Link>
            </li>
            </ul>
            <Link to="/cart" className="nav-item ms-auto">
                <ButtonContainer>
                    <span className="mr-2">
                    <i className="fas fa-cart-plus" />
                    </span>
                    Cart
                </ButtonContainer>
            </Link>
            </nav>
        )
    }
}
const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color: var(--mainWhite) !important;
    font-size: 2.3rem;
    text-transform: capitalize;
}
`;
