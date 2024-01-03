import React from 'react'
 import { HashRouter,Routes,Route } from 'react-router-dom'
 import Navbar from './Navbar'
 import Home from './components/Home'
 import Contact from "./components/Contact"
 import Service from './components/Service'
 import 'bootstrap/dist/css/bootstrap.min.css';
 import 'bootstrap/dist/js/bootstrap.bundle.min';
import About from './components/About'
import Footer from './components/Footer'




function App() {
  return (
    <HashRouter>
    <Navbar/>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/Service' element={<Service/>}/>
        <Route path='/About' element={<About/>}/>
       
      </Routes>
      <Footer/>
      
     
    <HashRouter>
  )
}

export default App
