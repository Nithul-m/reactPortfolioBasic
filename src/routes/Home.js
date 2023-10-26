import React from 'react'
import '../styles/Home.css'
// import { Email, GitHub, LinkedIn } from '@mui/icons-material'
// import Typewriter from 'typewriter-effect';


function Home() {
  return (
    <div className='home'>
        <div className='about'>
            <h2>Hi, I'm Nithul, a budding full stack web developer.
</h2>
            <div className='prompt'>
                <p>A software developer who is passionate and motivated to learn and grow</p>
                
            </div>
        </div>
        <div className="skills">
          <h1>My Skills</h1>
          <ol className='list'>
            <li className='item'>
              <h2>Front-end</h2>
              <span>HTML, CSS, ReactJS, Bootstrap</span>
            </li>
            <li className='item'>
              <h2>Back-end</h2>
              <span>MongoDB, NodeJS, ExpressJS</span>
            </li>
          </ol>

        </div>
        <div className='experience'>
          <h1>Experience</h1>
          <div className='prompt1'>
            <h5>5 years volunteering at a spiritual organistaion and 1 year managing a law firm</h5>
          {/* <Typewriter
  options={{
    strings: ['5 years in an NGO and 1 year in a law firm'],
    autoStart: true,
    loop: true,
  }} */}
{/* /> */}
    
          
          </div>
        </div>
        <div className='experience'>
        <h1>Certification</h1>

        <div className='prompt1'>

          <h5>Entri Elevate Course for Full Stack Web Development [MERN Stack]
</h5>
        </div>
        </div>
    </div>
  )
}

export default Home