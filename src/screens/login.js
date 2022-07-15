import { Link ,useNavigate} from 'react-router-dom'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import SMbutton from '../componenets/button'
import SMinput from '../componenets/input'
import { login } from '../firebase/firebasemethods'
import { useDispatch } from 'react-redux'

 

function Login() {
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [loader,setLoader] = useState()
  const dispatch =  useDispatch();
   const navigate =  useNavigate()

   
  const userLogin = ()=>{
        const obj = {
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

        navigate ("/");
       
        setLoader(true)
       login(obj).then ((res)=>{
          alert (res)
          dispatch = ({
            type : "DATAFROMLOGIN",
            payload :res,
          
           }) 
          //  navigate ('/'),
    
          setLoader(false)
        }).catch ((err)=>{
          alert(err)
         setLoader(false)
        })
  }
  return (
<Box sx = {{backgroundColor : " #87bdd8" , width: "500px", height:"380px" ,color : "white",  marginLeft  : "800px"}}>
<Box sx = {{marginTop:"300px" , fontSize : "30px"}}>
<h1>Login</h1>
  <Box sx = {{margin:"30px" , fontSize : "25px" }}> 
    <SMinput  label = {"Email"} type = {"email"} onChange = {(e)=>setEmail(e.target.value)}/>
   </Box>
    <Box>
       <SMinput label = {"Password"} type = {"password"} onChange = {(e)=>setPassword(e.target.value)}/>
       </Box>
      <Box sx = {{fontSize : "20px"}}>
       If you are new <Link to = "/signup">Create Account</Link>
       </Box>
     <Box sx= {{marginTop : "10px"  }}>
       <SMbutton sx={{fontSize : "40px" , padding : "60px" , backgroundColor :"#daebe8" }}  label = "Login" onClick = {userLogin}/>
       </Box>
       </Box>
       </Box>
      
  )
  }
export default Login