import React from 'react'
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer-item'>
        <p>Copyright © 2023 saurabhje </p>
        <a
            href="https://github.com/saurabhje"
            target="_blank"
            rel="noopener"
            >
            <FaGithub />
        </a>
    </div>
  )
}

export default Footer;