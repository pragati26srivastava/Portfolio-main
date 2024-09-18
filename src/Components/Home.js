import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>Pragati</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
    I am passionate about transforming raw concepts into fully developed websites or products that make a tangible impact. 
    My goal is to work on projects that not only push my boundaries as a developer but also instill a sense of pride in my work.<br /><br />
    I am proficient in <b>Java</b>, have foundational knowledge of <b>Python</b>, and am actively engaged in several projects utilizing the <b>MERN</b> stack.<br />
    In the near future, I intend to expand my skill set by learning <b>Next.js</b>, <b>Three.js</b>, and <b>TypeScript</b>.<br /><br />
    Additionally, I have a deep appreciation for <b>coffee</b> <CiCoffeeCup style={{scale:"1.5", rotate:"15deg"}}/>.  
</p>

        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home