import React from 'react'
import Search from './Search.js'
import './Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='home-header'>
        <div className='home-right'>
          <p>About</p>
          <p>About1</p>
        </div>
        <div className='home-left'>
          <p>Gmail</p>
          <p>image</p>
        </div>
      </div>
      <div className='page-body'>
        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />

        <div className='search-page'>
            <Search/>
        </div>
      </div>


    </div>
  )
}

export default Home