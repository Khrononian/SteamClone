import React from 'react'
import Nav from '../Nav'
import SiteNav from '../SiteNav'
import { WindowSharp } from '@mui/icons-material'
import AppleIcon from '@mui/icons-material/Apple';
import './category.css'

const Category = () => {

  return (
    <div>
      <Nav />
      <SiteNav />
      <div className='main-cat'>
        <h2>HORROR</h2>
        <div className='top'>
          <div className='top-left'>
            <img src='https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/hero_capsule.jpg?t=1674441703' alt='Game' />
            <div className='bot'>
              <WindowSharp />
              <p>$59.99</p>
            </div>
          </div>
          <div className='top-right'>
            <h2>ELDEN RING</h2>
            <p className='r-date'>Release date: Feb 24, 2022</p>
            <div className='cat-grid'>
              <p>Souls-like</p>
              <p>Dark Fantasy</p>
              <p>RPG</p>
              <p>Open World</p>
              <p>Difficult</p>
              <p>Action RPG</p>
              <p>Third Person</p>
              <p>Fantasy</p>
              <p>Multiplayer</p>
              <p>Singleplayer</p>
              <p>Online Co-Op</p>
              <p>Action</p>
              <p>PvP</p>
              <p>Co-op</p>
              <p>Violent</p>
              <p>Atmospheric</p>
            </div>
            <p className='short-desc'>
            THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Category