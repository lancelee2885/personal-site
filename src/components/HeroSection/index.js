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

/** HeroSection: The section on the landing page containing background video 
 * and a brief description.
 * 
 * States: 
 *  - hover: used for display different information upon hovering onto something.
 * 
 * @category React Components
 * @component 
 */
function HeroSection() {
  const [hover, setHover] = useState(false);

  function onHover() {
    setHover(!hover);
  }

  return (
    <HeroCountainer id='/'>
      <HeroBg>
        <VideoBg autoPlay loop muted src='https://personal-site-lance.s3.us-west-1.amazonaws.com/Hero.mp4' type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>
          <h6>Hello, I am</h6>
          <div>Lance Lee.</div>
        </HeroH1>
        <HeroP>
          A software engineer and scientist.
          <hr />
          <a className='blog-link' href='https://feed.leehplance.com' target="_blank" rel="noopener noreferrer">Check out my newly deployed blogging platform!</a>
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
