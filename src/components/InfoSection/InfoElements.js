import styled from 'styled-components'

/**
 * @category Styled Components
 * @subcategory InfoElements
 * @component
 */
export const InfoContainer = styled.div`
  color: #fff;
  background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};

  @media screen and (max-width: 768px){
    padding: 100px 0;
  }
`;

/**
 * @category Styled Components
 * @subcategory InfoElements
 * @component
 */
export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: ${({extendHeight}) => (extendHeight ? '1100px' : '860px')};
  }
`;

/**
 * @category Styled Components
 * @subcategory InfoElements
 * @component
 */
export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px){
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  }
`;

/**
 * @category Styled Components
 * @subcategory InfoElements
 * @component
 */
export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

/**
 * @category Styled Components
 * @subcategory InfoElements
 * @component
 */
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

/**
 * @category Styled Components
 * @subcategory InfoElements
 * @component
 */
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

/**
 * @category Styled Components
 * @subcategory InfoElements
 * @component
 */
export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

/**
 * @category Styled Components
 * @subcategory InfoElements
 * @component
 */
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({lightText}) => (lightText ? '#f7f8f8' : '#010606')};

  @media screen and (max-width: 480px){
    font-size: 32px;
  }
`;
 
/**
 * @category Styled Components
 * @subcategory InfoElements
 * @component
 */
export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 16px;
  line-height: 28px;
  color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`;

/**
 * @category Styled Components
 * @subcategory InfoElements
 * @component
 */
export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

/**
 * @category Styled Components
 * @subcategory InfoElements
 * @component
 */
export const ImgWrapper = styled.div`
  max-width: 555px;
  height: 100%;
`;

/**
 * @category Styled Components
 * @subcategory InfoElements
 * @component
 */
export const Img = styled.img`
  width: 80%;
  margin: 0 0 40px 40px;
  padding-right: 0;
  box-shadow: ${({shadow}) => (shadow ? 'rgba(0, 0, 0, 0.35) 0px 5px 15px' : '')};
  border-radius: ${({shadow}) => (shadow ? '50px' : '')};

  @media screen and (max-width: 768px) {
    max-width: 250px;
    max-height: 250px;
  }

  @media screen and (max-width: 480px) {
    max-width: 150px;
    max-height: 150px;
  }
`
export const SkillWrapper = styled.div`
  max-width: 1100px;
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px; 
  }
`;