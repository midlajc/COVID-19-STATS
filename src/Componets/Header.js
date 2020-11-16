import { Navbar, Nav } from 'react-bootstrap'
import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Header extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="">COVID-19 STATS</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/india">India</Link>
                        <Link className="nav-link" to="/world">World</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}