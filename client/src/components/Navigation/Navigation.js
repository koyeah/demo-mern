import React from 'react'

import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'


const Navigation = (props) => {
    return (
        <Navbar inverse>
            <Nav>
                <NavItem >
                    <Link to="/articles">Article List</Link>
                </NavItem>

                <NavItem >
                    <Link to="/articles/new">Create An Article</Link>
                </NavItem>

            </Nav>
            {/* <Nav pullRight>
                <NavItem>
                    <Link to="/articles">Log out</Link>
                </NavItem>
            </Nav> */}
        </Navbar>
    )
}
export default Navigation;