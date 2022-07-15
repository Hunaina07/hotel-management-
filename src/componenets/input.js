import React from 'react'
import TextField from '@mui/material/TextField';

 function SMinput(props) {
    const {label,type,onChange} = props
  return (
    <div>
      <TextField label = {label} type = {type} onChange = {onChange} id="outlined-basic" variant="outlined"/>
    </div>
  )
}
export default  SMinput;