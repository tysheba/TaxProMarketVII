import React, { Component } from 'react';
import logo from "./logo.jpg"
import './logo.css'
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';


class AppNavbar extends Component {
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    
    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/"><img src={logo} alt="Tax Pro Market"></img>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/"> Home </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/"> About </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/"> Services </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/"> News </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/"> Testimonials </NavLink>
                                </NavItem>
                            </Nav>
                    </Container>
                </Navbar>
            </div>
        );

    }
}

export default AppNavbar;