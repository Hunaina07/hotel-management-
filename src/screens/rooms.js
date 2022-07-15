import React, { useState } from 'react'
import Searchbar from "../componenets/searchbar"
import Filterpanel from "../componenets/filterpanel"
import List from "../componenets/list"
import Navbar from '../componenets/navbar';
import Roomlist from '../componenets/roomlist';


export default function Rooms() {
 const [selectedCategory , setSelectedCategory] =  useState(null);
 const [selectedRating, setSelectedRating] =  useState(null);
 const [selectedPrice, setSelectedPrice] =  useState([1000,5000]);
 const [deluxe, setDeluxe] =  useState([
  {
    id : 1,
    checked : false,
    label : 'Family',
  },
  {
    id : 2,
    checked : false,
    label : 'Double',
  },
  {
    id : 3,
    checked : false,
    label : 'Single',
  },
 ]);
 
 const handleSelectCategory = (event,value)=>!value?null:setSelectedCategory(value)
 const handleSelectRating = (event,value)=>!value?null:setSelectedRating(value)
  const handleChangeChecked = id=>{
    const deluxeStateList = deluxe;
    const changeCheckedDeluxe = deluxeStateList.map(item=>item.id===id?{...item,checked:!item.checked}:item)
    setDeluxe(changeCheckedDeluxe)
  }
  const handleChangedPrice = (event,value)=>setSelectedPrice(value);


  return (
    <>
    <Navbar/>
    <div className='home'>
   {/* searchBar */}
   <Searchbar/>
   <div className="home_panelList-wrap">
    <div className="home_panel-wrap">
   {/* filterpanel */}
   <Filterpanel 
   selectToggle={handleSelectCategory} 
   selectedCategory={selectedCategory}
   selectRating = {handleSelectRating}
   selectedRating = {selectedRating}
   deluxe = {deluxe}
   changeChecked = {handleChangeChecked}
   selectedPrice = {selectedPrice}
   changedPrice = {handleChangedPrice}
   />
   </div>
   <div className="home_list-wrap">
    {/* list */}
    <Roomlist/>
   <List/>
   </div>
    </div>
     </div>
    </>
  )
}
