import React from 'react'
import { SidebarContainer,
         Icon, 
         CloseIcon,
         SidebarWrapper,
         SidebarMenu,
         SidebarLink } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={() => toggle()}>
        <Icon onClick={() => toggle()}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to='about' onClick={() => toggle()}>
              About
            </SidebarLink>
            <SidebarLink to='projects' onClick={() => toggle()}>
              Projects
            </SidebarLink>
            <SidebarLink to='skills' onClick={() => toggle()} >
              Skills
            </SidebarLink>
          </SidebarMenu>
          {/* <SideBtnWrap> // for sign up btn, not used atm
            <SidebarRoute to='/signin'>
              Sign In
            </SidebarRoute>
          </SideBtnWrap> */}
        </SidebarWrapper>
      </SidebarContainer>
    </>
  )
}

export default Sidebar
