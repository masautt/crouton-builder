import React from 'react';
import { Navbar, Nav } from 'reactstrap';

const ScriptBar = ({distro, options, name}) => {
  return (
    <div > 
      <Navbar color="light" light className="text-center">
        {!distro && !options && !name && <Nav><code>sudo crouton ...</code></Nav>}
      </Navbar>
    </div>
  );
}

export default ScriptBar;