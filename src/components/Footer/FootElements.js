import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

/**
 * @category Styled Components
 * @subcategory FootElements
 * @component
 */
export const FooterContainer = styled.footer`
  background: #101522;
`;

/**
 * @category Styled Components
 * @subcategory FootElements
 * @component
 */
export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

/**
 * @category Styled Components
 * @subcategory FootElements
 * @component
 */
export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px){
    padding-top: 32px;
  }
`;

/**
 * @category Styled Components
 * @subcategory FootElements
 * @component
 */
export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px){
    flex-direction: column;
  }
`;

/**
 * @category Styled Components
 * @subcategory FootElements
 * @component
 */
export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
  text-align: center;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px){
    margin: 0;
    padding: 10px;
    width: 100%  
  }
`;

/**
 * @category Styled Components
 * @subcategory FootElements
 * @component
 */
export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

/**
 * @category Styled Components
 * @subcategory FootElements
 * @component
 */
export const FooterLink = styled(LinkRouter)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;

/**
 * @category Styled Components
 * @subcategory FootElements
 * @component
 */
export const FooterLinkScroll = styled(LinkScroll)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #01bf71;
    cursor: pointer;
    transition: 0.3s ease-out;
  }
`;

/**
 * @category Styled Components
 * @subcategory FootElements
 * @component
 */
export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;