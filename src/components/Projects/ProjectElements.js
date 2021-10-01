import styled from 'styled-components'

/**
 * @category Styled Components
 * @subcategory ProjectElements
 * @component
 */
export const ProjectsContanier = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  padding-top: 50px;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

/**
 * @category Styled Components
 * @subcategory ProjectElements
 * @component
 */
export const ProjectsWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px; 
  }
 `;

/**
 * @category Styled Components
 * @subcategory ProjectElements
 * @component
 */
export const ProjectsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 400px;
  width: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 768px){
    max-height: 500px;
    width: 220px;
  }

  @media screen and (max-width: 480px){
    max-height: 500px;
    width: 180px;
  }

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
 `;

/**
 * @category Styled Components
 * @subcategory ProjectElements
 * @component
 */
export const ProjectsIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
 `;

/**
 * @category Styled Components
 * @subcategory ProjectElements
 * @component
 */
export const ProjectsH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  } 
`;

/**
 * @category Styled Components
 * @subcategory ProjectElements
 * @component
 */
export const ProjectsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

/**
 * @category Styled Components
 * @subcategory ProjectElements
 * @component
 */
export const ProjectsP = styled.p`
  font-size: 1rem;
  text-align: center;
`;