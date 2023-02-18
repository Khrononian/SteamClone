import React, { useEffect, useState, useContext } from 'react'
import Nav from './Nav'
import { Context } from './ContextData';
import SiteNav from './SiteNav';
import Games from './Games';
import Categories from './Categories';
import './App.css';

const App = () => {
  const newContext = useContext(Context)

  console.log('Cont', newContext)
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