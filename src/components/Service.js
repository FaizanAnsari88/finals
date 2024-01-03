import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// import image1 from '../Assets/image1.jpg'
// import image2 from '../Assets/image2.jpg'
// import image3 from '../Assets/image3.jpg'
// import image5 from '../Assets/image5.png'
import image10 from '../Assets/image10.png'
// import download from '../Assets/download.png'
// import download1 from '../Assets/download1.png'
// import download2 from '../Assets/download2.png'
// import servicelogo from '../Assets/servicelogo.png'
import '../components/Service.css'
import {Link} from 'react-router-dom'
import { faCamera , faHandsAslInterpreting, faMobileScreen,} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faWebflow } from '@fortawesome/free-brands-svg-icons';
import srvicesticker from '../Assets/srvicesticker.avif'
import servicelogo1 from '../Assets/servicelogo1.png'
import servicelogo2 from '../Assets/servicelogo2.png'




function Service() {
  return (
    <div>
      <img className='serviceimage' src={image10} alt="" />
      <div className="mynme">
        <h1 className='home'>Web Development</h1>
        <h1 className='services'>SERVICES</h1>
        <h5 className='serviceparagraph'>Genuine care for your web development project</h5>
        <h5 className='serviceparagraph' >With the expertise built on 1,900+ web projects,</h5>
        <h5 className='serviceparagraph'>ScienceSoft professionally designs, redesigns and </h5>
        <h5 className='serviceparagraph'>continuously supports customer-facing and enterprise web apps and achieves high conversion.</h5>   
       <Link to='/contact'> <p className='serviceinput'>Request Developement services , contact us</p></Link>
      </div>

      <div className="body">
      <h2 className='serviceweb'>What Web Solution Do You Need?</h2>
      <p className='serviceparaweb'>Web development services help create all types of web-based software and ensure great experience for web users.</p>
       <p className='serviceparaweb'>Different types of web solutions may seem similar from the outside but we approach them differently and know what factors are winning in each case.</p> 
       </div>
       
       {/* <div class="container text-center">
  <div class="row align-items-start">
    <div class="col-lg-6 col-sm-12 pt-4 faizan2" data-aos="flip-left" >
    <div class="card" >
  <div class="card-body">
     <img className='logo' src={download} alt=""  />
    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p class="card-text">Since 2005, ScienceSoft works with web portals for different audiences: customers, business partners, ecommerce users, patients, vendors, interest-based communities. Web portals we create automatically aggregate data from corporate systems and become a source of up-to-date information and help for users..</p>
    <Link href="#" class="card-link">Card link</Link>
    <Link href="#" class="card-link">Another link</Link>
  </div>
</div>


    </div>
    <div class="col-lg-6 col-sm-12 pt-4 " data-aos="flip-left">
    <div class="card" >
  <div class="card-body">
     <img className='logo' src={download} alt=""  />
    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p class="card-text">Since 2005, ScienceSoft works with web portals for different audiences: customers, business partners, ecommerce users, patients, vendors, interest-based communities. Web portals we create automatically aggregate data from corporate systems and become a source of up-to-date information and help for users..</p>
    <Link href="#" class="card-link">Card link</Link>
    <Link href="#" class="card-link">Another link</Link>
  </div>
</div>
    </div>
    <div class="col-lg-6 col-sm-12 pt-4 faizan2" data-aos="flip-left">
    <div class="card" >
  <div class="card-body">
     <img className='logo' src={download} alt=""  />
    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p class="card-text">Since 2005, ScienceSoft works with web portals for different audiences: customers, business partners, ecommerce users, patients, vendors, interest-based communities. Web portals we create automatically aggregate data from corporate systems and become a source of up-to-date information and help for users..</p>
    <Link href="#" class="card-link">Card link</Link>
    <Link href="#" class="card-link">Another link</Link>
  </div>
</div>


    </div>
    <div class="col-lg-6 col-sm-12 pt-4" data-aos="flip-right">
    <div class="card" >
  <div class="card-body">
     <img className='logo' src={download} alt=""  />
    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p class="card-text">Since 2005, ScienceSoft works with web portals for different audiences: customers, business partners, ecommerce users, patients, vendors, interest-based communities. Web portals we create automatically aggregate data from corporate systems and become a source of up-to-date information and help for users..</p>
    <Link href="#" class="card-link">Card link</Link>
    <Link href="#" class="card-link">Another link</Link>
  </div>
</div>
    </div>
  </div>
</div> */}
<h2 className='text-center  fw-bold'>Our Services And Features </h2>

<h3 className='ourservice my-3 fw-bold'>OUR SERVICES</h3>
<div class="container text-center  boxcontainer ashnab  ">
  <div class="row justify-content-center  grid gap-2 column-gap-3  ">
    <div class="col-lg-3 box bg-dark text-light" >
      <FontAwesomeIcon className='boxes' icon={faMobileScreen}/>
      <h4 className='boxheading'>Business Stratagy</h4>
      <hr  class='hrs' />
      <p className='boxheading text-light' data-aos="zoom-in" data-aos-duration="2000">Creating your website strategy involves defining your target audience, setting goals, creating a branding strategy, and using keyword research and search engine optimization (SEO) to optimize your content while you build your website.</p>
    </div>
    <div class="col-lg-3 box bg-dark text-light" >
    <FontAwesomeIcon className='boxes' icon={faCamera}/>
    <h4 className='boxheading'>Website Development </h4>
    <hr class='hrs' />
    <p className='boxheading text-light' data-aos="zoom-in" data-aos-duration="2000">Website development is a catch-all term for the work that goes into building a website. This includes everything from markup and coding to scripting, network configuration, and CMS development.</p>

    </div>
    <div class="col-lg-3 box px-3 bg-dark text-light" >
    <FontAwesomeIcon className='boxes' icon={faHandsAslInterpreting}/>
    <h4 className='boxheading'>Marketing And Reporting</h4>
    <hr class='hrs' />
    <p className='boxheading text-light' data-aos="zoom-in" data-aos-duration="2000">
Web development plays a vital role in optimizing websites for search engines. Developers work on technical aspects such as website speed, mobile responsiveness, structured data, and proper HTML markup. </p>

      
    </div>
  </div>
</div>
<div class="container text-center  boxcontainer ashnab my-2 ">
  <div class="row justify-content-center  grid gap-2 column-gap-3  ">
    <div class="col-lg-3 box bg-dark text-light" >
      <FontAwesomeIcon className='boxes' icon={faMobileScreen}/>
      <h4 className='boxheading'>Mobile devlopement</h4>
      <hr  class='hrs' />
      <p className='boxheading text-light' data-aos="zoom-in" data-aos-duration="2000">Mobile development refers to the building of apps, but also the building of websites perfectly suited for small devices like tablets and mobile phones. Responsive design is what makes websites fit to mobile device screens flawlessly, meaning users aren’t slowed down by basic issues like formatting.

</p>
    </div>
    <div class="col-lg-3 box bg-dark text-light" >
    <FontAwesomeIcon className='boxes' icon={faCamera}/>
    <h4 className='boxheading'>Graphic Design</h4>
    <hr class='hrs' />
    <p className='boxheading text-light' data-aos="zoom-in" data-aos-duration="2000">Combining visual communication skills with an understanding of user interaction and online branding, graphic designers often work with software developers and web developers to create the look and feel of a web site or software application</p>

    </div>
    <div class="col-lg-3 box px-3 bg-dark text-light" >
    <FontAwesomeIcon className='boxes' icon={faHandsAslInterpreting}/>
    <h4 className='boxheading'>Others</h4>
    <hr class='hrs' />
    <p className='boxheading text-light' data-aos="zoom-in" data-aos-duration="2000" >Develop high quality and affordable web solutions that enable clients to establish presence online, increase profitability, and continually improve productivity.</p>

      
    </div>
  </div>
  

</div>
<hr />
<h4 className='text-center mt-5 fw-bold '>FEATURES</h4>
<div class="container text-center ">
  <div class="row align-items-start justify-content-center">
    <div class=" col-lg-3 col-sm-12 mt-2 ">
    <div class="card" >  
  <img className='servicestickers' src={srvicesticker} class="card-img-top" alt="..."/>
  <div class="card-body">
  <h5 class="card-title">Communications</h5>
   
    <p class="card-text" >The flexibility that web development provides is one of its key benefits.....</p>


    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Read more
</button>




<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
      <h5 class="card-title">Communications
</h5>
       
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body col-sm-12">
        <p>The flexibility that web development provides is one of its key benefits. A better work-life balance is made possible by the freedom to work remotely enjoyed by many web developers. Professionals may choose their working hours and atmosphere thanks to this flexibility, which boosts output and job satisfaction.</p>
      </div>
      
    </div>
  </div>
</div>
    
    

  </div>
</div>
    </div>
    <div class=" col-lg-3 col-sm-12 mt-3">
     <div class="card">
  <img className='servicestickers' src={servicelogo1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Inspired design</h5>
    <p class="card-text" >A professional website design has the advantage over templates in most...</p>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#dynamicBackdrop">
  Read more
</button>


<div class="modal fade" id="dynamicBackdrop" data-bs-backdrop="dynamic" data-bs-keyboard="false" tabindex="-1" aria-labelledby="dynamicBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
      <h5 class="card-title">Inspired design
</h5>
        
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body col-sm-12">
        <p>A professional website design has the advantage over templates in most aspects. It's not only visually appealing, responsive, and customizable, but it also drives visitors, generates leads, and increases revenue for your business.</p>
      </div>
      
    </div>
  </div>
</div>
    
    

  </div>
</div>
    </div>
    <div class=" col-lg-3 col-sm-12 mt-3">
     <div class="card">
  <img  className='servicestickers' src={servicelogo2}class="card-img-top" alt="..."/>
  <div class="card-body">
  <h5 class="card-title">Happy Customers

</h5>
    <p class="card-text" >Here we make customers always happy for our services and....</p>

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#dynamicsBackdrop">
  Read more
</button>


<div class="modal fade" id="dynamicsBackdrop" data-bs-backdrop="dynamics" data-bs-keyboard="false" tabindex="-1" aria-labelledby="dynamicsBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Happy Customers</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body col-sm-12">
        <p>Here we make customers always happy for our services and design will never make tham issue in feature and also give them seccure will never get any issue.</p>
      </div>
      
    </div>
  </div>
</div>
    
    


 

  </div>
</div>
    </div>
  </div>
</div>

      

           </div>
    
  )}
AOS.init({
  
});


export default Service
