import React from 'react'
import { Button } from '@mui/material'
import { ButtonGroup } from '@mui/material';
import { TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

import './sitenav.css'

const SiteNav = () => {
  return (
    <div className='SiteNav'>
        <div className='btns'>
            <Button>Your Store</Button>
            <Button>New & Noteworthy</Button>
            <Button>Categories</Button>
            <Button>Points Shop</Button>
            <Button>News</Button>
            <Button>Labs</Button>
        </div>
        <div className='textfield'>
            <input className='search' type='text' placeholder='Search' />
            <SearchIcon sx={{ background: 'lightblue' }}  />
        </div>
    </div>
  )
}

export default SiteNav