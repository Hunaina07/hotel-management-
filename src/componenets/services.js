import React from 'react'
import LocalBarRoundedIcon from '@mui/icons-material/LocalBarRounded';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
export default function Services() {
  return (
      <div className='container'>
      <h1>Services</h1>
      <br></br>
      <br></br>
      <br></br>
    <div className="row">
      <div className="col-md-3">
    <div className='card'>
    < LocalBarRoundedIcon sx= {{textAlign:"center"}}/>
      <div className="card-body">
        <h3 className='card-title'>
       Free CockTail
        </h3>
        <p className = "card-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing
         elit. Nisi deserunt eveniet iusto error quos ratione
          voluptas iure excepturi illum vitae.
        </p>
      </div>
    </div>
    </div>
    <div className="col-md-3">
    <div className='card'>
    < SportsEsportsIcon/>
      <div className="card-body">
        <h3 className='card-title'>
         Endless Hiking
        </h3>
        <p className = "card-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing
         elit. Nisi deserunt eveniet iusto error quos ratione
          voluptas iure excepturi illum vitae.
        </p>
      </div>
    </div>
    </div>
    <div className="col-md-3">
    <div className='card'>
    < SportsEsportsIcon/>
      <div className="card-body">
        <h3 className='card-title'>
       Free Shuttle
        </h3>
        <p className = "card-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing
         elit. Nisi deserunt eveniet iusto error quos ratione
          voluptas iure excepturi illum vitae.
        </p>
      </div>
    </div>
    </div>
    <div className="col-md-3">
    <div className='card'>
    < SportsEsportsIcon/>
      <div className="card-body">
        <h3 className='card-title'>
       Free Game Zone
        </h3>
        <p className = "card-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing
         elit. Nisi deserunt eveniet iusto error quos ratione
          voluptas iure excepturi illum vitae.
        </p>
      </div>
    </div>
    </div>
      </div>
    </div>
  )
}
