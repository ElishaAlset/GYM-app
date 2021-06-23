import React from 'react'
import { Button } from '../ButtonElement';
import './Info.css'
import {
    BtnWrap,
    Column1,
     Column2, 
     Heading,  
      ImgWrap, 
      InfoContainer,
      InfoRow,
      InforWrapper,
      Subtitle,
      TextWrapper,
      TopLine,
     } from './InfoElements'

function Info({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headline,
    darkText,
    description,
    buttonLabel,
    img,
    alt,
}) {
    return (
        <div>
         <InfoContainer lightBg={lightBg} id={id}>
        <InforWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                    <Heading lightText={lightText}>{headline}</Heading>
                    <Subtitle darkText={darkText}>{description}</Subtitle>
                    <BtnWrap>
                        <Button to=''>{buttonLabel}</Button>
                    </BtnWrap>
                </TextWrapper>
                </Column1>
                <Column2>
                  <ImgWrap>
                  <img src={`./${img}.jpg`} alt={alt}></img>
                  </ImgWrap>
                </Column2>
            </InfoRow>
        </InforWrapper>     
        </InfoContainer>   
        </div>
    )
}

export default Info
