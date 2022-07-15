import React from 'react'

export default function Payments() {
  return (
    <form className="form" >
  <div>
    <label for="staticEmail2" class="visually-hidden">Bank Name</label>
    <input type="text" readonly class="form-control-plaintext" placeholder='Bank Name'/>
  </div>
 
  <div>
    <label for="staticEmail2" class="visually-hidden">Credit Card Number</label>
    <input type="text" readonly class="form-control-plaintext" placeholder='Credit Card Number'/>
  </div>

  <div>
    <label for="staticEmail2" class="visually-hidden">Card Code</label>
    <input type="text" readonly class="form-control-plaintext" placeholder='Card Code'/>
  </div>

  <div>
    <label for="staticEmail2" class="visually-hidden">Expiry Date</label>
    <input type="number" readonly class="form-control-plaintext" placeholder='Expiry Date'/>
  </div>
  <div>
    <button type="submit" class="btn btn-primary mb-3">Submit</button>
  </div>
</form>


  )
}
