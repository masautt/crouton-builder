import React from 'react';
import { Nav, NavItem, NavExpander } from "../MyBootstrap";

const NavBar = (props) => {
    return (
        <Nav>
            <NavItem
                href="https://github.com/dnschneid/crouton"> crouton</NavItem>
            <NavExpander/>
            <NavItem
                href="https://github.com/masautt">@masautt
          </NavItem>
        </Nav>
    );
}

export default NavBar;