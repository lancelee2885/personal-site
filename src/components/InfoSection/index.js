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

function InfoSection() {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow >
            <Column1>
              <TextWrapper>
                <TopLine>
                  TopLine
                </TopLine>
                <Heading>
                  Heading
                </Heading>
                <Subtitle>
                  SubTitle
                </Subtitle>
                <BtnWrapper>
                  <Button to='home' >
                    Button
                  </Button>
                </BtnWrapper>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrapper>
                <Img />
              </ImgWrapper>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
