
import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    
    <nav className="navbar navbar-dark  bg-dark">
    <div className="container-fluid">
      <Link to = "/" className='navbar-brand'>Navbar</Link>
      <ul className='listing' >
     <li><Link to = '/' className='li'>Home</Link></li> 
     <li > <Link to = '/rooms' className='li'>Rooms</Link></li> 
     <li><Link to = "/booking" className='li'>For Booking</Link></li>
      <li><Link to = "/signup" className='li'>Signup</Link></li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar


