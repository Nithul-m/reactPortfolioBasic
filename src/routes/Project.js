import React from 'react'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Carousel from 'react-bootstrap/Carousel'
// import '../styles/project.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';



function Project() {
  return (
    <div className='background-colour'>

    <Card>
        <Card.Img className='height' variant="top" src="https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg" />
        <Card.Body>
        </Card.Body>
      </Card>
      <h1 style={{ textDecoration: "underline", fontSize: "50px",color:"red",textAlign:"center" }}>MY PROJECTS</h1>

      <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://www.bigscal.com/wp-content/uploads/2022/09/Features-of-Mern-stack-development-services-You-Should-Know.png" />
        <Card.Body>
          <Card.Title>Front end blog website</Card.Title>
          <Card.Text>
          A website which will help to know the various front end technologies
          </Card.Text>
          <a href="https://nithul-m.github.io/FrontendBlogs/" class="btn btn-primary">More</a>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.techrepublic.com/wp-content/uploads/2022/07/html-css-beginners.jpg?x27457" typeof='png' />
        <Card.Body>
          <Card.Title>Sample HTML, CSS Page</Card.Title>
          <Card.Text>
           A simple website of a law firm bulid with HTML and CSS.
          </Card.Text>
          <a href="https://nithul-m.github.io/Entri-app-Law-website/" class="btn btn-primary">More</a>
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

export default Project