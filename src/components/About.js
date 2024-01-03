import React from 'react'
// import { Link } from 'react-router-dom';




import aboutrightarmimage from '../Assets/aboutrightarmimage.png'
// import image5 from '../Assets/image5.png'
import '../components/About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faEarth, faPencil} from '@fortawesome/free-solid-svg-icons'
// import {FontAwesomeIcon} from '@fortawesome/free-solid-svg-icons'
// import {faSquareInstagram,faFacebook,faTwitter} from '@fortawesome/free-brands-svg-icons'

function About() {
  return (
    <div className='myname'>
   
{/* start end section................. */}
<div className="container aboutus">

<div className="rightarm aboutus">
  <img className='rightarmimage' src={aboutrightarmimage} alt="" />
</div>

<div class="leftarm">
            <p className='know'>Know Who  <span class='spanabout'>I'M</span></p>
            <p className='everyone'>Hi Everyone, <span class='htmll'>I am Ansari Faizan from Bhiwandi</span> , India.
            I'm a <span className='htmll'>Front-end Developer based in India.</span>  I have a passion for web development and love to create for web apps. specializing in <span className='htmll'> HTML ,CSS,JAVA SCRIPT & REACT JS</span> 
             ,I have completed BSC (computer science) from University of Mumbai.
            </p>
            <p className='apart'> Apart from coding, some other activities that I love to do!</p>
            <p className='games'> Playing Games</p>
            <p className='games'>Writing Tech Blogs</p>
            <p className='games'>Travelling</p>
            
            </div>

</div>

<div class="container-fluid text-center  boxcontainer">
  <div class="row justify-content-evenly mt-5 ">
    <div class="col-lg-4 box">
      <FontAwesomeIcon className='boxes' icon={faBook}/>
      <h4 className='boxheading'>MISSION</h4>
      <hr  class='hrs' />
      <p className='boxheading' data-aos="zoom-in" data-aos-duration="2000">
      To enhancing the business growth of our customers with creative Design and Development to deliver market-defining high-quality solutions that create value and consistent competitive advantage for our clients around the world.

</p>    </div>
    <div class="col-lg-4 box" >
    <FontAwesomeIcon className='boxes' icon={faEarth}/>
    <h4 className='boxheading'>VISION</h4>
    <hr class='hrs' />
    <p className='boxheading' data-aos="zoom-in" data-aos-duration="2000">To become a prime performer, in providing quality Web, Print and Software solutions in the competitive global market place.Develop high quality and affordable web solutions that enable clients to establish presence online, increase profitability, and continually improve productivity.
</p>

    </div>
    <div class="col-lg-4 box" >
    <FontAwesomeIcon className='boxes' icon={faPencil}/>
    <h4 className='boxheading'>ACHIEVEMENTS</h4>
    <hr class='hrs' />
    <p className='boxheading' data-aos="zoom-in" data-aos-duration="2000">Detail-oriented, analytical, and self-driven programmer with extensive experience building user-facing applications. Efficient and knowledgeable coder with skills in HTML, CSS, React, and JavaScript programming languages.</p>

      
    </div>
  </div>
</div>
{/* <div class="container-fluid text-center bg-dark mt-5">
  <div class="row align-items-start">
    <div class="col-lg-3 col-sm-3">
      <p className='text-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt error nostrum facere est neque cumque excepturi, non tempora expedita autem.</p>
    </div>
    <div class="col-lg-2 col-sm-12">
    <p class='footer'>Projects</p>
    <ul>
      <li class='list'>
        home
      </li>
      <li class='list'>
        docs
      </li>
      <li class='list'>
        example
      </li>
      <li class='list'>
        themes
      </li>

    </ul>
    </div>
    <div class="col-lg-2 col-sm-12">
    <p class='footer'>Projects</p>
    <ul>
      <li class='list'>
        home
      </li>
      <li class='list'>
        docs
      </li>
      <li class='list'>
        example
      </li>
      <li class='list'>
        themes
      </li>

    </ul>
    </div>
    <div class="col-lg-2 col-sm-12">
    <p className='footer'>Projects</p>
    <ul>
      <li class='list'>
        home
      </li>
      <li class='list'>
        docs
      </li>
      <li class='list'>
        example
      </li>
      <li class='list'>
        themes
      </li>

    </ul>
    </div>
    <div class="col-lg-3 col-sm-12">
    <p class='footer'>Projects</p>
    <ul>
      <li class='list'>
        home
      </li>
      <li class='list'>
        docs
      </li>
      <li class='list'>
        example
      </li>
      <li class='list'>
        themes
      </li>

    </ul>
    </div>

  </div>
</div> */}
</div>




      
    
  )
}

export default About
