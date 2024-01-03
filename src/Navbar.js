import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
// import logo3 from '../src/Assets/logo3.jpeg'
function Navbar() {
  return (
    <div class='nav faizan '>
      <nav class=" navbar navbar-expand-lg   ">
  <div class="container-fluid ">
  <Link class="nav-link" href="" to="/"><h1>ASHZAN</h1></Link>
    <button class="navbar-toggler toggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon togglebelow "></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
      
        <li class="nav-item text-center ">
        <Link class="nav-link ab text-light  " href="" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link ab text-light  " href="" to="/about">About</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link ab text-light "  href ="" to="/contact">Contact</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link ab text-light " href="" to="/service">Service</Link>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
