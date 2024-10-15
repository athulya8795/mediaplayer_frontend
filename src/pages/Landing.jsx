import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
      <Container className='d-flex justify-content-center align-items-center py-5 px-4'>
        <Row className='mt-5 d-flex justify-content-center align-items-center'>
          <Col md={6}>
            <h3 className='mt-md-5'>Welcome to <span className='text-warning'>Media Player</span></h3>
            <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis error, et harum amet labore cupiditate necessitatibus corrupti nulla molestiae. Quidem perspiciatis odio vero! Adipisci voluptas a atque blanditiis earum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut expedita numquam eius, rem aperiam, quibusdam est laudantium rerum labore necessitatibus beatae odit facere aliquam aliquid, nisi accusamus voluptate excepturi architecto!</p>
            <Link to={'/home'}><button className='btn btn-warning mt-5'>Get Started</button></Link>
          </Col>
          <Col md={1}></Col>
          <Col md={5} className='d-flex justify-content-center mt-5 mt-md-0'>
            <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="no image" className='w-75' />
          </Col>
        </Row>
      </Container>
      <Container className=' my-5'>
        <h3 className='text-center'>Features</h3>
        <Row>
          <Col md={1}></Col>
          <Col md={10}>
            <Row className='mt-5 d-flex justify-content-center align-items-center'>
              <Col md={4} className='p-3'>
                <Card style={{ width: '100%' }} className='p-3'>
                  <Card.Img variant="top" src="https://i.pinimg.com/originals/88/4a/40/884a408310b28171aa1018f77dee2602.gif" className='w-100' height={'300px'} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className='p-3'>
                <Card style={{ width: '100%' }} className='p-3'>
                  <Card.Img variant="top" src="https://i.pinimg.com/originals/d7/28/26/d728264b7433e62b7c4572c8d129e9be.gif" className='w-100' height={'300px'} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className='p-3'>
                <Card style={{ width: '100%' }} className='p-3'>
                  <Card.Img variant="top" src="https://cdn.dribbble.com/users/470292/screenshots/4064016/ezgif.com-video-to-gif.gif" className='w-100' height={'300px'} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
      <div className="container">
        <div className='row p-md-5 p-3'>
          <div className='col border border-secondary border-2 rounded p-4 p-md-5'>
            <div className='row'>
              <div className='col-md-6'>
                <h3 className='text-warning'>Simple fast and Powerful</h3>
                <p style={{ textAlign: 'justify' }}><span className='fs-4'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque sint, tempora quas expedita veritatis illo cum praesentium culpa! Obcaecati reprehenderit</p>
                <p style={{ textAlign: 'justify' }}><span className='fs-4'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque sint, tempora quas expedita veritatis illo cum praesentium culpa! Obcaecati reprehenderit</p>
                <p style={{ textAlign: 'justify' }}><span className='fs-4'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque sint, tempora quas expedita veritatis illo cum praesentium culpa! Obcaecati reprehenderit</p>
              </div>
              <div className='col-md-6'>
                <iframe width="100%" height="400" src="https://www.youtube.com/embed/ATElufr0OiE" title="Mudhal Nee Mudivum Nee - Title Track Video | Darbuka Siva | Sid Sriram | Thamarai" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing