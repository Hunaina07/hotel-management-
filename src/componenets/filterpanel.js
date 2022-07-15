import React from 'react'
import { categoryList, roomsList } from '../data'
import Filterlisttoggle from './filterlisttoggle'
import CheckboxProton from './checkboxProton'
import SliderProton from './SliderProton'

export default function Filterpanel({selectedCategory,selectToggle,selectedRating,selectRating,deluxe,changeChecked,selectedPrice,changedPrice}) {
  return (
    <div>
     {/* Category */}
     <div className="input-group">
  <p className='label'>
    Category
  </p>
  <Filterlisttoggle 
  options = {categoryList} 
  value = {selectedCategory}
   selectToggle = {selectToggle}/>
     </div>
     {/* Deluxe */}
     <div className="input-group">
     <p className='label'>
    Deluxe
  </p>
  </div>
  <div className='flex'>
  single
  double
  family
  </div>
  <div className="flex">
  {deluxe.map(deluxe=><CheckboxProton key = {deluxe.id} changeChecked = {changeChecked} deluxe={deluxe}/>)}
  </div>
    
     {/* price range */}
     <div className="input-group">
      <p className="label-range">
        <SliderProton value = {selectedPrice} changedPrice = {changedPrice}/>
      </p>
     </div>
     {/* rooms rating */}
     <div className="input-group">
     <p className='label'>
   No of Rooms
  </p>
  <Filterlisttoggle 
  options = {roomsList} 
  value = {selectedRating}
   selectToggle = {selectRating}/>
     </div>
    </div>
  )
}
