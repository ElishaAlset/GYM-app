import React, {useState} from 'react';
import Video from '../../videos/d.gif';
import Reveal from 'react-reveal/Reveal';
import Link from 'react-router-dom';
import "./Hero.css"
import {Button} from '../ButtonElement';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements';

function Hero() {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
      <HeroContainer>
          <HeroBg>
          <img src={Video} alt="clip" className="backgb" />
          </HeroBg>
          <HeroContent>
              <HeroH1>
              <Reveal right>
                  Gym Made Easy
                  </Reveal>

                  </HeroH1>
  
            <HeroBtnWrapper>
                
                <Button  onMouseEnter={onHover}
                 onMouseLeave={onHover}
                 
                 dark='true'
                 > 
                  Get started {hover ? <ArrowForward /> : <ArrowRight />}                 
                </Button>
            </HeroBtnWrapper>
          </HeroContent>
      </HeroContainer>
    )
}

export default Hero
