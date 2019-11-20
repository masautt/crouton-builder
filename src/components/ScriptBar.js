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
    <div style={{position: "fixed", bottom: "0"}}> 
      <Navbar color="light" light className="text-center">
        <Nav ><code>sudo crouton ...</code></Nav>
      </Navbar>
    </div>
  );
}

export default ScriptBar;