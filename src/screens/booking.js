import React from 'react'
import {Link} from 'react-router-dom'
export default function Booking() {
  return (
    <div>
<form className="form" >
  <div>
    <label for="staticEmail2" class="visually-hidden">Name</label>
    <input type="text" readonly class="form-control-plaintext" placeholder='Name'/>
  </div>
 
  <div>
    <label for="staticEmail2" class="visually-hidden">CNIC</label>
    <input type="text" readonly class="form-control-plaintext" placeholder='CNIC'/>
  </div>

  <div>
    <label for="staticEmail2" class="visually-hidden">ADDRESS</label>
    <input type="text" readonly class="form-control-plaintext" placeholder='Address'/>
  </div>

  <div>
    <label for="staticEmail2" class="visually-hidden">Contact Number</label>
    <input type="number" readonly class="form-control-plaintext" placeholder='contact number'/>
  </div>
  
  <div>
    <label for="staticEmail2" class="visually-hidden">No of persons</label>
    <input type="number" readonly class="form-control-plaintext" placeholder='no of persons'/>
  </div>
 
  <div>
    <label for="staticEmail2" class="visually-hidden">no of days to stay</label>
    <input type="number" readonly class="form-control-plaintext" placeholder='no of days to stay'/>
  </div>

  <div>
  <Link to = "/payment"> <button type="submit" class="btn btn-primary mb-3">BOOKING</button></Link> 
  </div>
</form>
    </div>
  )
}





