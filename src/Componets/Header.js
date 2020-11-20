import { Navbar, Nav } from 'react-bootstrap'
import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Header extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand className="monospace" href="">COVID-19 STATS</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/kerala">Kerala</Link>
                        <Link className="nav-link btn" to="/india">India</Link>
                        <Link className="nav-link btn" to="/world">World</Link>
                    </Nav>
                     <a className="nav-link text-white btn" rel="noreferrer" href="https://midlajc.live/" target="_blank">Meet the Developer</a>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}