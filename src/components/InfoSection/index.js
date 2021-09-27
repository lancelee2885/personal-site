import React from 'react'
import { Button } from '../ButtonElement'
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
  icons
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
                  <p>
                  {description}
                  </p>
                  <p>
                  {description2}
                  </p>
                  <br/>
                  <h3>
                  - {icons.map(icon => (<span className='icon-link'><a href={icon['link']}><i className={icon['name']}></i></a></span>))}
                  </h3>
                </Subtitle>
                <BtnWrapper>
                  <Button to='home'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}>
                    {buttonLabel}
                  </Button>
                </BtnWrapper>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrapper>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
