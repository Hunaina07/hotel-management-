import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "../screens/home";
import Rooms from "../screens/rooms";
import Signup from  "../screens/signup";
import Login from  "../screens/login";
import Booking from  "../screens/booking";
import Singleroom from  "../screens/singleroom";
import Payments from  "../screens/payment";
export default function AppRouter() {
  return (
    <Router>
     <Routes>
        <Route path = '/' element = {<Home/>}></Route>
       <Route path = '/rooms' element = {<Rooms/>}></Route>
       <Route path = '/booking' element = {<Booking/>}></Route>
       <Route path = '/signup' element = {<Signup/>}></Route>
       <Route path = '/login' element = {<Login/>}></Route>
       <Route path = '/singleroom' element = {<Singleroom/>}></Route>
       <Route path = '/payment' element = {<Payments/>}></Route>
       </Routes>
    </Router>
  );
}

