import React from 'react'
import Bounce from 'react-reveal/Bounce';

import { 
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarWrap,
    SidebarRoute,
} from './SidebarElements';

function Sidebar({ isOpen, toggle}) {
    return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
          <Icon onClick={toggle}>
              <CloseIcon />
          </Icon>
          <SidebarWrapper>
              <SidebarMenu>
                  <SidebarLink to='about' onClick={toggle}>
                  <Bounce left duration={600}>
                      About
                      </Bounce>
                      </SidebarLink>
                  <SidebarLink to='exercises' onClick={toggle}>
                  <Bounce right duration={1200}>
                      Exercises
                      </Bounce>
                      </SidebarLink>
                  <SidebarLink to='diets' onClick={toggle}>
                  <Bounce left duration={1800}> 
                      Diets
                      </Bounce>
                      </SidebarLink>
                  <SidebarLink to='workouts' onClick={toggle}>
                  <Bounce right duration={2400}>
                      Workouts
                      </Bounce>
                      </SidebarLink>
                  <SidebarLink to='signin' onClick={toggle}>
                  <Bounce left duration={3000}>
                      Sign In
                      </Bounce>
                      </SidebarLink>
              </SidebarMenu>
              <SidebarWrap>
                  <SidebarRoute to='/signup'>Sign Up</SidebarRoute>
              </SidebarWrap>
          </SidebarWrapper>
      </SidebarContainer>
    )
}

export default Sidebar
