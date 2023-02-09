import React, { useEffect, useState, useContext } from 'react'
import { Tabs, Tab } from '@mui/material'
import Nav from './Nav'
import { Context } from './ContextData';
import SiteNav from './SiteNav';
import Games from './Games';
import Categories from './Categories';
import Login from './Routes/Login';
import './App.css';


const App = () => {
  // const [games, setGames] = useState([])
  // const [singleGame, setSingleGame] = useState([])
  // const [log, setLog] = useState(false);

  const newContext = useContext(Context)

  // useEffect(() => {
  //   fetch()
  //   .then(response => response.json())
  //   .then(data => {

  //   })
  // }, [])
  
  console.log('Cont', newContext)
  return (
    
      <main>
        <Nav />
        <SiteNav />
        <Games />
        <Categories />
        {/* <Login /> */}
      </main>
    
  )
}

export default App