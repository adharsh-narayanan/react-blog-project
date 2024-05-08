
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faEye, faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import bghome from '../assets/bghome.avif'
import bloggif from '../assets/bloggif.gif'
import travel from '../assets/travelimg.avif'
import sport from '../assets/sportsimg.avif'
import business from '../assets/businessimg.jpeg'

function Home() {
  return (
    <>
    <div style={{ width: '100%',backgroundImage:`url(${bghome})`  }}className='background ' >
        <div  className='container-fluid rounded '>
          <Row className='align-items-center p-5 '>
            <Col sm={12} md={6}>
              <h1><FontAwesomeIcon icon={faStackOverflow} className='me-2 fs-2' />blog app</h1>
              <h3>Welcome to BlogApp - Where Ideas Come To Life! </h3>
            
              
                <Link to={'/login'}>
                <button className='btn btn-info mt-3'>Get start <FontAwesomeIcon icon={faArrowRight} /></button>
                </Link>          
                 </Col>
            <Col sm={12} md={6}>

            </Col>
          </Row>
        </div>

        </div>
        <div>
        <Row className='align-items-center p-5 '>
            <Col sm={12} md={6}>
              <h5>dive into a world of inspiration knowledge and creativity.explore our latest articles,written by passinate minds from around the globe.join our community and share your thoughts with us !</h5>
              <Link>
                <button className='btn btn-info mt-3'>Write a blog <FontAwesomeIcon icon={faArrowRight} /></button>
                </Link> 
            </Col>
            <Col sm={12} md={6}>
            <img src={bloggif} alt="image" className='w-100'  style={{marginTop:'100px'}}/>
            </Col>
          </Row>
          <div></div>
        </div>

        {/* recent posts */}



<div  className="card mt-5 mb-5 d-flex align-items-center justify-content-between w-100  " >
        <h1 className='text-center'>Recent Posts</h1>
        <h4 className='text-center'>where strories find their home</h4>


       
<div className='col-md-6 p-2'>
  
<Card>
      
      <Card.Body>
        <h3>Travel</h3>
        <img src={travel} alt="image" className='w-100'  />
        <Card.Text>
          Writing a blog is great way to position yourself as an authority in your field and capitivate your readers attention.Do you want to improve your sites.. 
        </Card.Text>
        
        <Button variant="info">Travel</Button>
        <FontAwesomeIcon icon={faEye} className='ms-1  px-4' />
        <FontAwesomeIcon icon={faHeart} className='mt-100'/>

      </Card.Body>
    </Card>
</div>

   <div className='col-md-6 p-2'>
   <Card>
      
      <Card.Body>
      <h3>Sports</h3>
        <img src={sport} alt="image" className='w-100'  />
        <Card.Text>
        'It's full of passion from all sides - drivers, teams, fans - and while there's rivalry there's also respect. You learn to expect the unexpected on a race weekend, which makes for intrigue and excitement. Plus the drivers I've met have been lovely and had time for their fans. 
        </Card.Text>
        
        <Button variant="info">Sports</Button>
        <FontAwesomeIcon icon={faEye} className='ms-1  px-4' />
        <FontAwesomeIcon icon={faHeart} className='mt-100'/>

      </Card.Body>
    </Card>
    </div>
    <div className='col-md-6 p-2'>
    <Card >
      
      <Card.Body>
      <h3>Business</h3>
        <img src={business} alt="image" className='w-100'  />
        
        <p>A business is defined as an organization or enterprising entity engaged in commercial, industrial, or professional activities. Businesses can be for-profit entities or non-profit organizations</p>
        
        
        <Button variant="info">Travel</Button>
        <FontAwesomeIcon icon={faEye} className='ms-1  px-4' />
        <FontAwesomeIcon icon={faHeart} className='mt-100'/>

      </Card.Body>
    </Card>
   
    </div>
   
<div>  <button className='btn btn-info mt-3'>show all posts</button></div>
           
    
        </div>
        
    </>
  )
}

export default Home