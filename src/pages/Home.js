import React,{useState} from 'react'
import Services from '../components/Diets/Services';
import Footer from '../components/Footer/Footer';
import Hero from '../components/HeroSection/Hero';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import Info from '../components/InfoSection/Info';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'

function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} />  
          <Hero />
          <Info {...homeObjOne} />
          <Info {...homeObjTwo} />
          <Services/>
          <Info {...homeObjThree} />
          <Footer/>
          

        </div>
    )
}

export default Home
