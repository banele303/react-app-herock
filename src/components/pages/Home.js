import '../../App.css';
//import HeroSection from '../HeroSection';
import React from 'react'

import Footer from '../Footer';
//import AboutM from '../AboutM';
import IntroTwo from '../IntroTwo';
import styled, { css } from "styled-components";
import AboutMTwo from '../AboutMTwo';
import Skill from '../Skill';



const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const IntoShape = styled.div`
  ${Shape}
  clip-path: polygon(62% 0, 100% 0%, 100% 100%, 43% 100%);
  background-color: green;
`;
function Home() {
    return (
        <>
          <Container>
       
        <IntroTwo />
        <IntoShape />
      </Container>
      
        {/* <HeroSection/>*/} 
         <AboutMTwo/>
         <Skill/>
         <Footer/>
        </>
    )
}

export default Home;
