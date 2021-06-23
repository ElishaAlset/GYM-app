import React,{useState, useEffect} from 'react'
import Bounce from 'react-reveal/Bounce';
import Reveal from 'react-reveal/Reveal';
import {IconContext} from 'react-icons/lib'
import Slide from 'react-reveal/Slide';
import {animateScroll as scroll} from 'react-scroll'
import { FaBars } from 'react-icons/fa'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavLinks1,
    NavBtn,
    NavBtnLink,

} from './NavbarElements';
function Navbar({ toggle }) {
    const [scrollNav, setScrollNav] = useState(false)
    const [navcolor, setNavcolor] = useState(false)

    const changeNav = ()=> {
        if(window.scrollY >= 80){
            setNavcolor(true)
            setScrollNav(true)
          
        } else{
            setNavcolor(false)
            setScrollNav(false)
         
        }
    }

    useEffect(() => {
         window.addEventListener('scroll', changeNav)
    }, [])

   const toggleHome = () => {
       scroll.scrollToTop();
   }

    return (
        
        <IconContext.Provider value={{ color: '#fff'}}> 
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                
                <NavLogo to='/' onClick={toggleHome}>
                <Bounce left duration={3000}>O</Bounce><Bounce left duration={2000}>R</Bounce><Slide left duration={2000}>I</Slide><Slide right duration={2000}>G</Slide><Bounce right duration={2000}>I</Bounce> <Bounce right duration={3000}>N</Bounce> 
                    </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        navcolor={navcolor}
                        >
                            <Reveal left>
                            About
                            </Reveal>
                            </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='location'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        navcolor={navcolor}
                        >Location</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks1 
                        to='./payments'
                         smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        navcolor={navcolor}
                        >Payments</NavLinks1>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='workouts'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        navcolor={navcolor}
                        >Workouts</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='diets'
                         smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        navcolor={navcolor}
                        >
                        <Reveal top>
                            Diets
                            </Reveal>
                            </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/signup'
                        smooth={true}
                        duration={1000}
                        spy={true}
                        exact='true'
                        offset={-80}
                        navcolor={navcolor}
                        >
                        <Reveal right >
                            Sign In
                            </Reveal>
                            </NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signup"> Sign Up </NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
  
    )
}

export default Navbar
