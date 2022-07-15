import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

export default function Searchbar({value,changeInput})  {
  return(
    <div className = "searchBar-wrap">
  <SearchIcon className="searchBar-icon"/>
      <input type = "text" placeholder ="search hotel here" value = {value} onChange = {changeInput}/>
    </div>
)
}
