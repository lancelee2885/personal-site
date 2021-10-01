import React from 'react'
import { Button, ButtonExternal } from '../ButtonElement'
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrapper,
  Column2,
  Img,
  ImgWrapper
} from './InfoElements'

/** InfoSection: Renders about section of the application
 * 
 * Props: props contains {
  lightBg, 
  id, 
  imgStart, 
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  description2,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
  icons,
  shadow,
  hasButton }. These properties are necessary for displaying data and styles on page.
 *  
 * @category React Components
 * @component
 */
function InfoSection({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  description2,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
  icons,
  shadow,
  hasButton,
}) {

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>
                  {topLine}
                </TopLine>
                <Heading lightText={lightText}>
                  {headLine}
                </Heading>
                <Subtitle darkText={darkText}>
                  {description}
                  <br />
                  <br />
                  {description2}
                  <br />
                  <br />
                  {icons.map(icon => (<span className='icon-link'><a href={icon['link']}><i className={`${icon['name']} fa-lg`}></i></a></span>))}
                  <br />
                </Subtitle>
                {hasButton
                  ? (<BtnWrapper>
                    <ButtonExternal to={{ pathname: 'https://personal-site-lance.s3.us-west-1.amazonaws.com/lance-resume-2021.pdf' }} target="_blank"
                      smooth={true}
                      duration={500}
                      offset={-80}
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                      dark2={dark2 ? 1 : 0}>
                      {buttonLabel}
                    </ButtonExternal>
                  </BtnWrapper>) :
                  <></>}
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrapper>
                <Img src={img} alt={alt} shadow={shadow} />
              </ImgWrapper>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
