import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

const NavBar = (props) => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand 
            href="https://github.com/dnschneid/crouton"
            target="_blank" rel="noopener noreferrer" > crouton</NavbarBrand>
          <Nav className="mr-auto" navbar>
          </Nav>
          <Nav>
          <NavItem>
              <NavLink href="https://github.com/masautt">@masautt</NavLink>
          </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;