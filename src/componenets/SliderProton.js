import Slider from '@mui/material/Slider';
import React from 'react'
import Box from '@mui/material/Box';

export default function SliderProton(value,changePrice) {

  return (
    
    <div className='main' sx={{ width: 300 }}>
      <Slider className = "thumb"
      value = {value}
      onChange = {changePrice}
      aria-label="Small steps"
      defaultValue={0.00000005}
      valueLabelDisplay ="on"
      min = {1000}
      max = {5000}
      />
    </div>
  
  )
}
