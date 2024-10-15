import { faFacebook, faInstagram, faLinkedin, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='container-fluid p-4'>
      <div className='row '>
        <div className='col-md-4'>
          <h4 className='text-warning'>
            <FontAwesomeIcon icon={faVideo} className='me-2' />Media Player
          </h4>
          <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint perferendis nam alias corrupti magni, exercitationem fugiat assumenda modi consequuntur maiores quas. Veniam dignissimos eveniet non architecto quaerat dolorem delectus unde! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore saepe pra, neque!</p>
        </div>
        <div className='col-md-2 d-md-flex justify-conent-center'>
          <div>
            <h4>Links</h4>
            <Link to={'/'}><p className='mt-4'>Landing Page</p></Link>
            <Link to={'/home'}><p>Home Page</p></Link>
            
            <Link to={'/watchHistory'}><p>Watch History</p></Link>
          </div>
        </div>
        <div className='col-md-2 d-md-flex justify-conent-center'>
          <div>
            <h4>Guides</h4>
            <p className='mt-4'>React</p>
            <p>React Bootstrap</p>
            <p>Bootswatch</p>
          </div>
        </div>
        <div className='col-md-4 px-md-5'>
          <h4>Contact Us</h4>
          <div className='d-flex ms-4 '>
            <input type="text" placeholder='Email Id' className='form-control' />
            <button className='btn btn-warning ms-3'>SubScribe</button>
          </div>
          <div className='d-flex justify-content-between mt-5'>
            <FontAwesomeIcon icon={faInstagram} className='fa-2x' />
            <FontAwesomeIcon icon={faFacebook} className='fa-2x' />
            <FontAwesomeIcon icon={faXTwitter} className='fa-2x' />
            <FontAwesomeIcon icon={faLinkedin} className='fa-2x' />
            <FontAwesomeIcon icon={faWhatsapp} className='fa-2x' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer