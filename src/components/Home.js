// import React, { useState } from 'react'
// import bandvid3 from "../Assets/bandvid3.mp4";
import './Home.css'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import homeimage3 from '../Assets/homeimage3.avif'

import homeimage4 from '../Assets/homeimage4.webp'

import prevetedhome from '../Assets/prevetedhome.jpg'
import problemsolvinghome from '../Assets/problemsolvinghome.jpg'
import problemsolvinghome2 from '../Assets/problemsolvinghome2.jpg'
import Capture  from '../Assets/Capture.png'
import car  from '../Assets/Car.png'
import crud  from '../Assets/crud.png'
import FinalFaizanresume from '../Assets/FinalFaizanresume.pdf'



import faizan from '../Assets/faizan.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Typewriter } from 'react-simple-typewriter'

import { faArrowRight,} from '@fortawesome/free-solid-svg-icons'
// import {FontAwesomeIcon} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
// import homestartingimage from '../Assets/homestartingimage.jpg'

// import middleinnerimage from '../Assets/middleinnerimage.jpg'
// import middleimage2 from '../Assets/middleimage2.png'
// import middleimage3 from '../Assets/middleimage3.jpg'



function Home() {
  
  return (
    // home section start home Image...
  <>  
    <div className=" container bgcontainer">
    <div className="left">
      <p className='hey'>Hey,</p>
      
      <h2 className='iam'> <span className='span'> i'm </span> <span className='faizanansari' style={{ color: 'blue', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Faizan Ansari', 'ReactDeveloper','HTML','CSS','JAVASCRIPT']}
            loop={true}
            cursor
            cursorStyle='I'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span></h2>
      
      <p className='web'>WEB DEVELOPER, REACT JS, OPEN SOURCE</p>
      <p className='front'>I'm a Front-end Developer based in India. I have a passion for web development and love to create for web apps. specializing in <span className='html'> HTML ,CSS,JAVA SCRIPT & REACT JS</span></p>
     <Link to={"/about"}> <button className=' me'>About me</button></Link>
    <a href={FinalFaizanresume} download="FinalFaizanresume"> <button className=' me2'>Resume</button></a>
      <br />
    
     
      
    </div>
    
    
    <div className="right">
      <img className='rightimage' src={faizan} alt="" />
             
    </div>
    
    
    </div> 
   
      {/* home page welcome to our page middle section start..... */}
      <div className="container icon">
      <FontAwesomeIcon className='iconss'  icon={faArrowRight} />
      
     <Link to={"https://www.linkedin.com/in/faizan-ansari-b07a92269/"}> <FontAwesomeIcon className='iconss'   icon={faLinkedin} /> </Link>
      <Link to={"https://github.com/FaizanAnsari88"}> <FontAwesomeIcon  className='iconss'    icon={faGithub} /></Link>
      </div>

  <div class="container text-center mb-5">
    <div class="row align-items-start">
   
       <div class="col-lg-6 col-md-12 mt-5 ">
         <h3 className='hometitle mt-4'   >Faster solution of on-demand workforce.</h3>
        <p className='homepara mt-4 ' >At InCruiter, we understand the importance of having a strong and dedicated team to bring your business to the next level. That's why we're dedicated to providing you with pre-vetted, highly skilled, and trained developers who can help you achieve your business goals. We know there's no one-size-fits-all approach to finding the right people for your business. That's why we offer a tailored solution designed specifically for your needs. Our pre-vetted developers are highly skilled and experienced, ensuring you receive the best possible support. We're here to help you succeed, and our team is dedicated to making that happen.</p>
      </div>
         <div class="col-lg-6 col-md-12 mt-5">
    
         <img className='homeimage' src={homeimage3} alt=""  />
        </div>  
      </div>
  </div>

      {/* home page welcome to our page middle section end..... */}


            {/* home page welcome to our page middle card section start..... */}
            

<div className="middle">
    <h1>India’s biggest pre-vetted resources solution
     </h1>
    <img  className="middleimage" src={homeimage4} alt="" data-aos="zoom-in" data-aos-duration="2000" />
</div>
   <div className="insidemiddle mt-5">
      <p className='insidepara bg-primary'>why choose us ?</p>
    </div>
     <p className='expotentially'>WE ARE HERE TO GROW YOUR BUSINESS EXPOTENTIALLY.</p>

     <div class="container text-center mb-5">
  <div class="row align-items-start">
   
    <div class="col-lg-4 col-md-12 middleimagecard ">
    <img  className='middleimages' src={prevetedhome} alt="" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"/>
    <p className='middleimagespara' data-aos="zoom-in" data-aos-duration="2000" data-aos-anchor-placement="center-bottom">Pre-Vetted Resources Pool</p>
    <p data-aos="zoom-in" data-aos-duration="2000" data-aos-anchor-placement="center-bottom">IncSource enables an organization to access the pre-vetted resources that are trained professionals. It’s a ​​hot pick, ensuring positive change in the workplace scenario.and also do best
</p>
    </div>
    <div class="col-lg-4 col-md-12 middleimagecard">
    
    
      <img className='middleimages' src={problemsolvinghome} alt="" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" />
      <p className='middleimagespara' data-aos="zoom-in" data-aos-duration="2000" data-aos-anchor-placement="center-bottom">Quickest problem solving</p>
      <p data-aos="zoom-in" data-aos-duration="2000" data-aos-anchor-placement="center-bottom">Creative problem-solving is one of the most in-demand skills in all roles and industries. It can boost an organization’s human capital and give it a competitive edge. </p>
    </div>  
    <div class="col-lg-4 col-md-12 middleimagecard">
    
      <img className='middleimages' src={problemsolvinghome2} alt="" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" />
      <p className='middleimagespara'data-aos="zoom-in" data-aos-duration="2000" data-aos-anchor-placement="center-bottom" >well experience developers</p>
      <p data-aos="zoom-in" data-aos-duration="2000" data-aos-anchor-placement="center-bottom">Over the time of my career, I had the chance to work with many pros and experienced developers who preached the same ideas. While adopting these practices I became more efficient in the way</p>
    </div>
    
  </div> 
</div>

 {/* Project section start */}
  <p className='projectss text-center'>PROJECTS</p>

 <div class="container  project1">
  <div class="card" >
    <img className="projectimage" src={Capture} class="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">AC Repairing services website</h5>
      <p class="card-text">A static AC & fridge Repairing website It is totally Responsive. in this website I Use HTML (for structure of the web page )
        and also use CSS (for designing of the web page ) also I use a BOOTSTRAP framework  and in contact section i use a formsubmit for submit of our contact and
        also connected to the people on Email.
      </p>
      <a href="https://faizanansari88.github.io/Ac-services/" class="btn btn-primary">Go to github</a>
    </div>
  </div>

  <div class="card my-3">
    <img class="projectimage" src={car} className="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Car Website</h5>
      <p class="card-text">A static CAR website . in this website I Use HTML (for structure of the web page )
        and also use CSS (for designing of the web page ) in this project we use a animated slides. and also use 
      a keyframe in css which is totally expensive.</p>
      <a href="https://faizanansari88.github.io/Carstaticwebsite/" class="btn btn-primary">Go to github</a>
    </div>
  </div>


  <div class="card" >
    <img class="projectimage" src={crud} alt="..."/>
    <div class="card-body">
      <h5 class="card-title">CRUD operation</h5>
      <p class="card-text"> This project is a static CRUD operation project. in this project I Use HTML (for structure of the web page )
        and also use CSS (for designing of the web page ) in this project i use local storage data the benefit of this project we can store a
        data in our local Computers.also i use a javascript for (CREATE,READ ,UPDATE,DELETE).</p>
      <a href="https://github.com/Ashh-khan" className="btn btn-primary">Go to github</a>
    </div>
  </div>



 </div>
 <div>




           
</div>


      </>
      
  


    
    
  )
}
AOS.init();


export default Home
