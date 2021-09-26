import React from 'react';
import { FaBars } from 'react-icons/fa'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks
} from './NavbarElements'

function Navbar() {

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>Lance L</NavLogo>
        <MobileIcon>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to='about'>
              About
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='projects'>
              Projects
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='skills'>
              Skills
            </NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar