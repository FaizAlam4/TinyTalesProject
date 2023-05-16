import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'


function Navbar() {
  return (
    <div className='nv'>
      
     <li className="ls"> <Link style={{textDecoration:"none", color:"black"}} to="/">Home</Link> </li> 
     <li className="ls"><Link style={{textDecoration:"none", color:"black"}} to="/contact">Contact</Link></li>
     <li className="ls"><Link style={{textDecoration:"none", color:"black"}} to="/about">About</Link></li>
   
    </div>
  )
}

export default Navbar
