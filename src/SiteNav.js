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
            <ButtonGroup>
                <div className='left'>
                    <Button>Free to Play</Button>
                    <Button>Demos</Button>
                    <Button>Early Access</Button>
                    <Button>Controller-friendly</Button>
                    <Button>Remote Play</Button>
                    <Button>Software</Button>
                    <Button>Soundtrack</Button>
                    <Button>VR Titles</Button>
                    <Button>VR Hardware</Button>
                    <Button>Steam Deck</Button>
                    <Button>Great on Deck</Button>
                    <Button>macOS</Button>
                    <Button>SteamOS + Linux</Button>
                    <Button>For PC Cafes</Button>
                </div>
                <div className='right'>
                    <Button>Action</Button>
                    <Button>Adventure</Button>
                    <Button>Role-Playing</Button>
                    <Button>Stimulation</Button>
                    <Button>Strategy</Button>
                    <Button>Sports & Racing</Button>

                </div>
            </ButtonGroup>
        </div>
        <div className='textfield'>
            <TextField   size='small' label='search' variant='filled' />
            <SearchIcon sx={{ background: 'lightblue' }}  />
        </div>
    </div>
  )
}

export default SiteNav