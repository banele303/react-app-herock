
import React from 'react'
import '../App.css';
import {  Button} from 'react-bootstrap';
//import { Button } from './Button'
//import { Button } from 'semantic-ui-react'
import './HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'>
           
            <h1>Welcome To BlecoX</h1>
          <p>Web Development Site</p>
          <div className="hero-btn">
          {  /* <Button 
             className='btn'
             buttonStyle='btn--outline'
             buttonSize='btn--large'>
             GET STARTED
             </Button>*/}
          <Button variant="outline-success" size='lg' className="mx-5 my-5">Hire Me</Button>
          </div>
        </div>
    )
}

export default HeroSection;

