import { Tabs, Tab } from '@mui/material'
import Nav from './Nav'
import SiteNav from './SiteNav';
import Games from './Games';
import Categories from './Categories';
import './App.css';

import React from 'react'

const App = () => {
  return (
    <main>
      <Nav />
      <SiteNav />
      <Games />
      <Categories />
    </main>
    
  )
}

export default App