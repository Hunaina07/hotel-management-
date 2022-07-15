import { Link } from 'react-router-dom'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import SMbutton from '../componenets/button'
import SMinput from '../componenets/input'
import { signUp } from '../firebase/firebasemethods'



 function Signup() {
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [userName,setUserName] = useState()
  const [loader,setLoader] = useState()

  const userSignup = ()=>{
        const obj = {
          userName,
          email,
          password,
         
        }
        if(!email){
          alert("Enter email")
          return;
        }
        if(!password){
          alert("Enter password")
          return; 
        } 
        // signUp(obj)
        setLoader(true)
       signUp(obj).then((res)=>{
        setLoader(false)
        alert(res)
       }).catch((err)=>{
        setLoader(false)
        alert(err)
       })
       
  }

  return (
    <>
    <Box sx= {{marginLeft : "500px",marginTop : "100px"}}>
    <Box >
      <SMinput label = {"Name"} type = {"name"} onChange = {(e)=>setUserName(e.target.value)}/>
      </Box>
 <Box >
      <SMinput label = {"Email"} type = {"email"} onChange = {(e)=>setEmail(e.target.value)}/>
      </Box>
       <Box>
       <SMinput label = {"Password"} type = {"password"} onChange = {(e)=>setPassword(e.target.value)}/>
       </Box>
       <Box>
     If you have already account <Link to = "/login" >Log in here </Link>
       </Box>
       <Box>
       <SMbutton loading = {loader} label = "Signup" onClick = {userSignup}/>
       </Box>
       </Box>
       </>
  )
}
export default Signup