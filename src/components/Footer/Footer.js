import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FooterContainer, FooterLink, FooterLinksContainer, FooterLinksItems, FooterLinksWrapper, FooterLinkTitle, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'

function Footer() {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
   <FooterContainer>
       <FooterWrap>
           <FooterLinksContainer>
               <FooterLinksWrapper>
                   <FooterLinksItems>
                       <FooterLinkTitle>About Us</FooterLinkTitle>
                       <FooterLink to='/'>How it works</FooterLink>
                       <FooterLink to='/'>Testimonials</FooterLink>
                       <FooterLink to='/'>Payments</FooterLink>
                       <FooterLink to='/'>Investors</FooterLink>
                       <FooterLink to='/'>Location</FooterLink>
                   </FooterLinksItems>
               </FooterLinksWrapper>
           </FooterLinksContainer>
           <SocialMedia>
               <SocialMediaWrap>
                   <SocialLogo to="/" onClick={toggleHome}>
                       ORIGIN
                   </SocialLogo>
                   <WebsiteRights>origin © {new Date().getFullYear()}  All rights reserved.
                   </WebsiteRights>
                   <SocialIcons>
                       <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                           <FaFacebook />
                       </SocialIconLink>
                       <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                           <FaInstagram />
                       </SocialIconLink>
                       <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                           <FaTwitter />
                       </SocialIconLink>
                       <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                           <FaYoutube />
                       </SocialIconLink>
                       <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                           <FaLinkedin />
                       </SocialIconLink>
                   </SocialIcons>
               </SocialMediaWrap>
           </SocialMedia>
       </FooterWrap>
   </FooterContainer>
    )
}

export default Footer
