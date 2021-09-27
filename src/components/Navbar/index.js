import React from 'react';
import { FaBars } from 'react-icons/fa'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from './NavbarElements'
import logo from '../../images/LanceLogo-removebg-preview.png'

function Navbar({ toggle }) {

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'><img className='logo' src={logo}></img></NavLogo>
        <MobileIcon onClick={() => toggle()}>
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
          {/* <NavBtn> // this part is for signup but for now we don't need this functionality
            <NavBtnLink to='123'>
              123123
            </NavBtnLink>
          </NavBtn> */}
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar