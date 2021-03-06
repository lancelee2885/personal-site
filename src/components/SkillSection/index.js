import React from 'react'
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
  description1,
  description2,
  description3,
  img,
  alt,
  shadow,
  langSkills,
  frameworkSkills,
  tools,
  }. These properties are necessary for displaying data and styles on page.
 *  
 * @category React Components
 * @component
 */
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
  shadow,
  langSkills,
  frameworkSkills,
  tools,
}) {

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper extendHeight={true}>
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
                    <b>{description1}</b><br/>
                    {langSkills.map(lang => (<small>{lang} <br /></small>))}
                  </Subtitle>
                  <Subtitle darkText={darkText}>
                    <b>{description2}</b><br/>
                    {frameworkSkills.map(framework => (<small>{framework} <br /></small>))}
                  </Subtitle>
                  <Subtitle darkText={darkText}>
                    <b>{description3}</b><br/>
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
