import { Checkbox, FormControlLabel } from '@mui/material'
import React from 'react'

export default function CheckboxProton(deluxe,changeChecked) {
    const {checked,label,id} = deluxe;
  return (
    <div>
      <FormControlLabel
      className = "wrap"
        
      control = {
        <Checkbox className = "root checked"
        size = "small"
        checked = {checked}
        onChange = {()=>changeChecked(id) }
        />
        // label = {label}
      }
    label = {label}
      />
    </div>
  )
}
