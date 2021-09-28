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
  Column2,
  Img,
  ImgWrapper,
  SkillWrapper
} from '../InfoSection/InfoElements'


function SkillSection({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description1,
  description2,
  description3,
  img,
  alt,
  icons,
  shadow,
  langSkills,
  frameworkSkills,
  tools,
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
                <SkillWrapper>
                  <Subtitle darkText={darkText}>
                    <b>{description1}</b>
                    {langSkills.map(lang => (<small>{lang} <br /></small>))}
                  </Subtitle>
                  <Subtitle darkText={darkText}>
                    <b>{description2}</b>
                    {frameworkSkills.map(framework => (<small>{framework} <br /></small>))}
                  </Subtitle>
                  <Subtitle darkText={darkText}>
                    <b>{description3}</b>
                    {tools.map(tool => (<small>{tool} <br /></small>))}
                  </Subtitle>
                </SkillWrapper>
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

export default SkillSection
