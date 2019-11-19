import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const ScriptBar = (props) => {
  return (
    <div>
      <Navbar color="light" light className="text-center">
        <Nav ><code>sudo crouton -t xfce</code></Nav>
      </Navbar>
    </div>
  );
}

export default ScriptBar;