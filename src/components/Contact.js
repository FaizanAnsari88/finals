
import contactusimage1 from '../Assets/contactusimage1.jpg'
import '../components/Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faIcons, faLocation, faMessage, faPhone , faBook, faEarth, faPencil} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-brands-svg-icons'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';




function Contact() {

  const form = useRef();
  const[input,setinput]=useState("")
  const[input1,setinput1]=useState("")
  const[input2,setinput2]=useState("")

  const sendEmail = (e) => {
    e.preventDefault();
    setinput("")
    setinput1("")
    setinput2("")
     
    console.log("hii")
    alert("your form is submitted")

    emailjs.sendForm('service_3k5w2wl', 'template_s81n9vs', form.current, 'TrImR_NRdbf_oGVR7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };



  return (
    <div className='contactimage'>
      <img className='contactusimage' src={contactusimage1} alt="" />
      
      <div className="forms">
      <h2 className='text-center contacth1'>Contact Us</h2>
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input className='inputs' type="text"  name="name" value={input} onChange={(e)=>{setinput(e.target.value)}} />
      <label>Email</label>
      <input className='inputs' type="email"  name="email" value={input1} onChange={(e)=>{setinput1(e.target.value)}} />
      <label>Message</label>
      <textarea className='inputss' name="message" value={input2}  onChange={(e)=>{setinput2(e.target.value)}}  />
      <input className='inputbutton' type="submit" value="Submit"  />
    </form>
      </div>
      <div class="row justify-content-evenly contactcolom">
    <div class="col-4 lastwala">
      
      <p className='parancontact'> <FontAwesomeIcon className='iconcontact' icon={faPhone}/> Call to ask any quetions:- +9124537858</p>
      <p></p>
    </div>
    <div class="col-4 lastwala">
       
       <p className='parancontact'> <FontAwesomeIcon className='iconcontact' icon={faMessage}/> Email:- dev.faizanansari@gmail.com</p>
       <p></p>
    </div>
    <div class="col-4 lastwala">
       
       <p className='parancontact'> <FontAwesomeIcon   className='iconcontact' icon={faLocation}/> visit our office  Bhiwandi india</p>
       <p></p>
    </div>
    
  </div>
  <div class="container text-center  boxcontainer  ">
  <div class="row justify-content-center  grid gap-2  my-3 column-gap-3  ">
    <div class="col-lg-3 col-sm-3 box" >
      <FontAwesomeIcon className='boxes' icon={faBook}/>
      <h4 className='boxheading'>MISSION</h4>
      <hr  class='hrs' />
      <p className='boxheading'>To enhancing the business growth of our customers with creative Design and Development to deliver market-defining high-quality solutions that create value and consistent competitive advantage for our clients around the world.
</p>
    </div>
    <div class="col-lg-3 col-sm-3 box " >
    <FontAwesomeIcon className='boxes' icon={faEarth}/>
    <h4 className='boxheading'>VISION</h4>
    <hr class='hrs' />
    <p className='boxheading'>To become a prime performer, in providing quality Web, Print and Software solutions in the competitive global market place.Develop high quality and affordable web solutions that enable clients to establish presence online, increase profitability, and continually improve productivity.</p>

    </div>
    <div class="col-lg-3 col-sm-3 box" >
    <FontAwesomeIcon className='boxes' icon={faPencil}/>
    <h4 className='boxheading'>ACHIEVEMENTS</h4>
    <hr class='hrs' />
    <p className='boxheading'>Detail-oriented, analytical, and self-driven programmer with extensive experience building user-facing applications. Efficient and knowledgeable coder with skills in HTML, CSS, React, and JavaScript programming languages.</p>

      
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

export default Contact
