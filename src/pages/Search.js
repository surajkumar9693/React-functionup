import React from 'react'
// import SearchIcon from '@material-ui/icons/Search';
// import MicNoneIcon from '@material-ui/icons/MicNone';

import './Search.css'

function search() {
  return (
    <form className='search-bar'>
        <div className='search-input'>
            <SearchIcon/>
            <input  />
            <MicNoneIcon/>
        </div>
    </form>
  )
}

export default search
