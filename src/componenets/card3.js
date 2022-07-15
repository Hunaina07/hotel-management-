import React from 'react'
import paradise from "../images/main.jpg"
import family from "../images/family.jpg"
import double from "../images/double.jpg"


export default function card3() {
  return (
    <div className='container'>
      <h1>Featured Rooms</h1>
      <br></br>
      <br></br>
      <br></br>
    <div className="row">
      <div className="col-md-4">
    <div className='card'>
      <img src= {double} alt="" />
      <div className="card-body">
        <h3 className='card-title'>
         Double Deluxe
        </h3>
        <h3 className = "card-text">
          Rs 1000
          per night
        </h3>
      </div>
    </div>
    </div>
    <div className="col-md-4">
    <div className='card'>
      <img  src= {family} alt="" />
      <div className="card-body">
        <h3 className='card-title'>
         Family Deluxe
        </h3>
        <h3 className = "card-text">
          Rs 2000
          per night
        </h3>
      </div>
    </div>
    </div>
    <div className="col-md-4">
    <div className='card'>
      <img src= {paradise} alt="" />
      <div className="card-body">
        <h3 className='card-title'>
        Presidential
        </h3>
        <h3 className = "card-text">
          Rs 5000
          per night
        </h3>
      </div>
    </div>
    </div>
      </div>
    </div>
  )
}
