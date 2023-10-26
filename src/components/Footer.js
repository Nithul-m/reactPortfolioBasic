import React from 'react'
import {GitHub,Instagram,LinkedIn} from '@mui/icons-material'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
         <a href='https://github.com/Nithul-m'>
         <GitHub/>
         </a>
         <a href='#'>
         <Instagram/>
         </a>
         <a href='https://www.linkedin.com/in/nithul-m-31b7b8264/'>
         <LinkedIn/>
         </a>
        </div>
        <p>&copy; 2023 nithul.app</p>
    </div>
  )
}

export default Footer