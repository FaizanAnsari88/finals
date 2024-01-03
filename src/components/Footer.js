import React from 'react'
import '../components/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faLocation, faLocationDot, faMailForward, faPhone, faVoicemail } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import {Link} from "react-router-dom"
function Footer() {
  return (
    <div>
     <div className="container-fluid text-center footer  mt-5">
  <div class="row align-items-start">
    <div class="col-lg-3 col-md-12">
    <h3 className='text-light text-start'>ASHZAN</h3>
      <p className='text-light'>Designed and built with all the loves and care in the world by two childwood friends .</p>
    </div>
    <div class="col-lg-3 col-md-12 ">
    <p class='footer text-light fw-bold  text-center '>Quick links</p>
    <ul>
    <li class='list'>
        
       <Link to={'/'}> <FontAwesomeIcon className='mx-1 arrows' icon={faArrowRight}/>Home
     </Link> </li>
      <li class='list '>
        
      <Link to={'/About'}>  <FontAwesomeIcon className=' mx-1 arrows' icon={faArrowRight}/>About
      </Link></li>
      <li class='list'>
        
       <Link to={'/contact'}> <FontAwesomeIcon className=' mx-1 arrows' icon={faArrowRight}/>Contact
       </Link> </li>
      <li class='list '>
        
      <Link to={'/service'} >  <FontAwesomeIcon className='mx-1 arrows' icon={faArrowRight}/>Services
      </Link></li>
    </ul>
    </div>
    <div class="col-lg-3 col-md-12">
    <p class='footer text-light fw-bold text-center '>Popular links</p>
    <ul>
    <li class='list'>
        
        <Link to='/'> <FontAwesomeIcon className='mx-1 arrows' icon={faArrowRight}/>Home
      </Link> </li>
       <li class='list'>
         
       <Link to='/About'>  <FontAwesomeIcon className='mx-1 arrows' icon={faArrowRight}/>About
       </Link></li>
       <li class='list'>
         
        <Link to='/contact'> <FontAwesomeIcon className='mx-1 arrows' icon={faArrowRight}/>Contact
        </Link> </li>
       <li class='list'>
         
       <Link to='/service'  >  <FontAwesomeIcon className='mx-1 arrows' icon={faArrowRight}/>Services
       </Link></li>

    </ul>
    </div>
    <div class="col-lg-3 col-md-12">
    <p className='footer text-light fw-bold'>Get in Touch</p>
    <ul>
      <li class='list'>
        
        <FontAwesomeIcon className='mx-2' icon={faLocationDot}/>bhiwandi ,thane
      </li>
      <li class='list'>
      <FontAwesomeIcon className='mx-2' icon={faWhatsapp}/>+8856969964
      </li>
      <li class='list'>
      <FontAwesomeIcon className='mx-2' icon={faPhone}/>+8856969964
      </li>
      <li class='list '>
      <FontAwesomeIcon className='mx-3 ' icon={faInstagram}/>
      <FontAwesomeIcon className='mx-3' icon={faTwitter}/>
      <FontAwesomeIcon className='mx-3' icon={faLinkedin}/>
      <FontAwesomeIcon  className='mx-3' icon={faFacebook}/>
      </li>

    </ul>
    </div>
    
  </div>
</div>
 
    </div>
  )
}

export default Footer
