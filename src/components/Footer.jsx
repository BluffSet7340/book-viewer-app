import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='footer-box'>
        <h4>BookQuest</h4>
        <p>All rights reserved I guess</p>
        <div className='social-links'>
            <a target='_blank' className='link-style' href='https://www.linkedin.com/in/saeed-mizan/'><FaLinkedin className='socials'/></a>
            <a target='_blank' className='link-style' href='https://github.com/BluffSet7340'><FaGithub className='socials'/></a>
            
        </div>
    </footer>
  )
}

export default Footer