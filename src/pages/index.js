import React, { useState } from 'react'
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { About, Skills } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar'
import Projects from '../components/Projects';
import Sidebar from '../components/Sidebar'
import SignupFrom from '../components/SignupForm';
import SkillSection from '../components/SkillSection';

/** Home: Component for combining all of sub components
 * 
 * States:
 *  - isOpen: a state being passing down to children components
 *    determining if sidebar or navbar should be open.
 * 
 * @category React Components
 * @component
 * 
 */
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  /**
   * A function set isOpen either to true or false depending on current isOpen.
   */
  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar isOpen={isOpen} toggle={toggle} />
      <HeroSection />
      <InfoSection {...About}/>
      <Projects id='projects' />
      <SkillSection {...Skills} />
      <Footer />
    </>
  )
}

export default Home
