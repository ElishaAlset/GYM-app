import React from 'react';
import Video1 from '../../videos/c.gif';
import Video2 from '../../videos/b.gif';
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServicesElements'

function Services() {
    return (
        <div>
           <ServicesContainer id="workouts">
            <ServicesH1>Workouts</ServicesH1>
            <ServicesWrapper>
            <ServicesCard><img src={Video1} alt="clip" width="10%" height="20%" /></ServicesCard>
            <ServicesCard> <img src={Video2} alt="clip" width="10%" height="10%" /></ServicesCard>
            </ServicesWrapper>
            </ServicesContainer> 
        </div>
    )
}

export default Services
