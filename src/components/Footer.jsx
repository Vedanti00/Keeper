import React from 'react'

const year = new Date();
let currentYear = year.getFullYear();

const Footer = () => {
  return (
    <footer className='footer'>
        <p>Copyright © {currentYear}</p>
    </footer>
  )
}

export default Footer;