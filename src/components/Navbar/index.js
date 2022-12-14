import React from 'react';
import {
  NavbarContainer,
  LeftContainer,
  NavbarInnerContainer,
  NavbarLink,
} from './index.style';

const Navbar = () => {

  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <LeftContainer>
        <NavbarLink to="/"> Employees Portal</NavbarLink>
        </LeftContainer>
      </NavbarInnerContainer>
    </NavbarContainer>
  );
};

export default Navbar;