import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import {
  HeroCountainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from './HeroElements'
import { Button } from '../ButtonElement'


function HeroSection() {
  const [hover, setHover] = useState(false);

  function onHover() {
    setHover(!hover);
  }

  return (
    <HeroCountainer id='/'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>
          <h6>Hello, I am</h6>
          <div>Lance Lee.</div>
        </HeroH1>
        <HeroP>
          I am a software engineer.
        </HeroP>
        <HeroBtnWrapper>
          <Button to='about' 
                  onMouseEnter={onHover} 
                  onMouseLeave={onHover}
                  primary='true'
                  dark='true'>
            See who I am {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroCountainer >
  )
}

export default HeroSection
