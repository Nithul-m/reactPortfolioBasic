import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Carousel from 'react-bootstrap/Carousel'
// import '../styles/about.css'
import Card from 'react-bootstrap/Card';
import '../styles/About.css'
import CardGroup from 'react-bootstrap/CardGroup';




function AboutPage() {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      {/* <div className='caption'> */}
      
      {/* <Card>
        <Card.Img className='height' variant="top" img ="./src/routes/LICPHOTO.jpeg "src="https://fi-hatchbox-production-uploads.s3.amazonaws.com/posts/44299297_s.jpg" />
        <Card.Body>
          <Card.Text> */}
          <div className='tex'>
          <h1 style={{ textDecoration: "underline", fontSize: "50px",color:"red" }}>Introduction</h1>
         <h6 style={{ textDecoration: "bold", fontSize: "medium",color:"black" }}> I am Nithul, <br/>amiable and righteous individual with a drive for decisive action in significant matters.<br/> Skilled engineer experienced in handling diverse challenges in both corporate and personal spheres. <br/>Graduated with a Bachelor's degree in Industrial Engineering from the College of Engineering Trivandrum (CET),<br/> followed by a transformative five-year journey as a monk in an ashram to sharpen my senses and deepen my understanding of life's intricacies.<br/> Currently serving as an administrator at Nyaayanishtha Legal Associates (Legal Firm),<br/> I am eager to explore new industries and venture into uncharted territories.</h6>
         </div>
          {/* </Card.Text>
        </Card.Body>
      </Card> */}
      {/* </div> */}
     
      {/* <div className='text-align'> */}
      <h1 style={{ textDecoration: "underline", fontSize: "35px",color:"red" }}>EDUCATION</h1>
      <ul>
        <li>B.Tech Industrial Engineering , CGPA - 7.68
College of Engineering, Trivandrum, Kerala University 
(2013-2017)</li>
        <li>Computer Science Stream , Percentage - 93.8%
Bharatiya Vidya Bhavan, CBSE
(2011-2013)</li>
        
      </ul>
      {/* <h1 style={{ textDecoration: "underline", color: "red", fontSize: "50px" }}>Skills:</h1>
      <br/>
      <h2 style={{ textDecoration: "underline", color: "red" }}>Front-End</h2>
      <br/>
      <ul>
        ReactJS, HTML, CSS, Bootstrap
      </ul>
      <br/>
      <h2 style={{ textDecoration: "underline", color: "red" }}>Back-End</h2>
      <br/>
      <ul>
        NodeJS, ExpressJs, MongoDB
      </ul>
      <br/> */}
      <h2 style={{ textDecoration: "underline", color: "red" }}>Soft-skills</h2>
      <br/>
      <ul>
      Communication, Networking, Leadership, Computer skills, Emotional intelligence, Team player 
      </ul>
      {/* </div> */}

      {/* <div> */}
        <h1 style={{ textDecoration: "underline", color: "red",textAlign: "center" }}>Interests</h1>
      {/* </div> */}
      <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJpdmluZ3xlbnwwfHwwfHx8MA%3D%3D" />
        <Card.Body>
          <Card.Title>Driving</Card.Title>
          <Card.Text>
         Driving around the city
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      <Card>
        <Card.Img variant="top" src="https://media.istockphoto.com/id/1219371111/photo/football-or-soccer-player-in-action-on-stadium-with-flashlights-kicking-ball-for-winning-goal.webp?b=1&s=170667a&w=0&k=20&c=1QRLmDfMw8XXpgaUCKSqXeCpGaCxitXq6AsEKkGIcCE=" />
        <Card.Body>
          <Card.Title>Football</Card.Title>
          <Card.Text>
           Football lover from childhood
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      <Card>
        <Card.Img variant="top" src="https://img.freepik.com/premium-photo/woman-doing-yoga-beach-with-mountain-background_865967-25537.jpg" />
        <Card.Body>
          <Card.Title>Yoga</Card.Title>
          <Card.Text>
           Enthusiastic Yoga Practitioner
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
    </CardGroup>
    
      {/* <Footer></Footer> */}

    </div>
  )
}

export default AboutPage;