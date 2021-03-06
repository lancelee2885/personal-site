import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'

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

/** Navbar: Navigation bar appears and stays on top of the page throughout scrolling.
 * 
 * Props:
 *  - toggle: function rec'd from parent(Home).
 * 
 * States:
 *  - scrollNav: When scroll over a certain distance, it will cause a state change.
 * 
 * @category React Components
 * @component
 */
function Navbar({ toggle }) {

  const [scrollNav, setScrollNav] = useState(false);

   /**
    * When scroll over 80px vertically from top to bottom, 
    * it triggers state change of scrollNav.
    */
  function changeNav() {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  function toggleHome () {
    scroll.scrollToTop();
  }

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}><img className='logo' alt='lance-logo' src={logo}></img></NavLogo>
          <MobileIcon onClick={() => toggle()}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'
                        duration={300}
                        spy={true}
                        exact='true'>
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='projects'
                        duration={300}
                        spy={true}
                        exact='true'>
                Projects
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='skills'
                        duration={300}
                        spy={true}
                        exact='true'>
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
    </IconContext.Provider>
  )
}

export default Navbar