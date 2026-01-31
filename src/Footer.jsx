import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='footer-box'>
        <h4>BookQuest</h4>
        <p>All rights reserved I guess</p>
        <div className='social-links'>
            <FaGithub className='github-icon'/>
            <FaLinkedin className='linkedin-icon'/>
        </div>
    </footer>
  )
}

export default Footer