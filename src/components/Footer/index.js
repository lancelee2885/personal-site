import React from 'react'
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinkItems,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterLink,
  FooterLinkScroll,
  WebsiteRights
} from './FootElements'

function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Page</FooterLinkTitle>
              <FooterLinkScroll to='/'>Home</FooterLinkScroll>
              <FooterLinkScroll to='about'>About</FooterLinkScroll>
              <FooterLinkScroll to='projects'>Projects</FooterLinkScroll>
              <FooterLinkScroll to='skills'>Skills</FooterLinkScroll>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contact</FooterLinkTitle>
              <FooterLink to={{ pathname: 'https://www.linkedin.com/in/lancele3/' }} target="_blank">Linkedin</FooterLink>
              <FooterLink to={{ pathname: 'mailto:lancelee2885@gmai.conm' }} target="_blank">Email</FooterLink>
              <FooterLink to={{ pathname: 'https://github.com/lancelee2885' }} target="_blank">Github</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <WebsiteRights>
          <hr/>
          Lance Lee © 2021 All Rights Reserved
        </WebsiteRights>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
