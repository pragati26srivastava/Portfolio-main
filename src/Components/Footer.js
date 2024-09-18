import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Pragati </h4>
      <h4>Copyright &copy; 2024 PS</h4>
      <div className='footerLinks'>
        <a href="https://github.com/pragati26srivastava" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/pragati-srivastava-395b14262/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:pragati26srivastava@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/u/CJaQqr73eC/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer