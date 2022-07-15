import { Button } from '@mui/material';
import React from 'react'

 function SMbutton(props) {
    const {label,onClick,disabled,loading} = props;
  return (
    <div>
      <Button disabled = {loading || disabled}   onClick = {onClick}  variant = "contained">{loading? "loading..." : label}</Button>
    </div>
  )
}
export default SMbutton;