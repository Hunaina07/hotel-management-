import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


export default function Filterlisttoggle({options,value,selectToggle}) {
//  const classes = useStyles ()
    return (
    <ToggleButtonGroup
    value ={value}
    onChange = {selectToggle}
   className = "root"
   exclusive
    >
     {options.map(({label,id,value}) => <ToggleButton className = "toggle"  key = {id} value = {value}>
{label}
     </ToggleButton>)}
    </ToggleButtonGroup>
  )
}
