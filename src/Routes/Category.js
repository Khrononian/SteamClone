import React, { useContext, useEffect, useState } from 'react'
import Nav from '../Nav'
import SiteNav from '../SiteNav'
import { Context } from '../ContextData'
import { WindowSharp } from '@mui/icons-material'
import AppleIcon from '@mui/icons-material/Apple';
import { Card, CardMedia, CardActionArea, CardContent } from '@mui/material';
import './category.css'
import { useLocation, Link } from 'react-router-dom'

const Category = () => {
  const [categoryGame, setCategoryGames] = useState([])
  const [incomingGames, setIncomingGames] = useState([])
  const categoryContext = useContext(Context)
  const location = useLocation()

  useEffect(() => {
    for (let i = 0; i < 14; i++) {
      fetch(`https://api.steamapis.com/market/app/${ categoryContext.games[Math.floor(Math.random() * categoryContext.games.length)].appID }?api_key=USh9nTgdKcpomNdTTl-Iok0OjDA`)
      .then(response => response.json())
      .then(games => {
          
          setCategoryGames(prev => prev.concat(games))
      })
    }
    for (let i = 0; i < 3; i++) {
      fetch(`https://api.steamapis.com/market/app/${ categoryContext.games[Math.floor(Math.random() * categoryContext.games.length)].appID }?api_key=USh9nTgdKcpomNdTTl-Iok0OjDA`)
      .then(response => response.json())
      .then(games => {
          
          setIncomingGames(prev => prev.concat(games))
      })
    }
  }, [])

  console.log('INSIDE PAGE', categoryContext, categoryGame, location)

  return (
    categoryGame[0] !== undefined ?

    <div>
      <Nav />
      <SiteNav />
      <div className='main-cat'>
        <h2>{location.state !== null ? location.state.name : ''}</h2>
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
        <h2>TITLES</h2>
        <div className='titles'>
          <div className='first-title'>
            {categoryGame.filter((_, index) => index < 2).map(game => (
              
              <Card className='title-card'>
                <Link to={'/app/referer'} onClick={categoryContext.setGamePage} data-appid={game.appID}>
                  <CardActionArea>
                    <CardMedia
                      className='title-img'
                      component='img'
                      height='140' 
                      image={game.header_image}
                    />
                    <CardContent className='bot'>
                      <WindowSharp />
                      <p>{game.is_free === false ? game.price_overview.final_formatted : 'Free To Play'}</p>
                    </CardContent>
                  </CardActionArea>  
                </Link>
              </Card>
            ))}
          </div>
          <div className='second-title'>
            {categoryGame.filter((_, index) => index > 1 && index < 5).map(game => (
              <Card className='title-card'>
                <Link to={'/app/referer'} onClick={categoryContext.setGamePage} data-appid={game.appID}>
                  <CardActionArea>
                    <CardMedia
                      className='title-img'
                      component='img'
                      height='140' 
                      image={game.header_image}
                    />
                    <CardContent className='bot'>
                      <WindowSharp />
                      <p>{game.is_free === false ? game.price_overview.final_formatted : 'Free To Play'}</p>
                    </CardContent>
                  </CardActionArea>  
                </Link>
              </Card>
            ))}
          </div>
          <div className='third-title'>
            {categoryGame.filter((_, index) => index > 4 && index < 9).map(game => (
              <Card className='title-card'>
                <Link to={'/app/referer'} onClick={categoryContext.setGamePage} data-appid={game.appID}>
                  <CardActionArea>
                    <CardMedia
                      className='title-img'
                      component='img'
                      height='140' 
                      image={game.header_image}
                    />
                    <CardContent className='bot'>
                      <WindowSharp />
                      <p>{game.is_free === false ? game.price_overview.final_formatted : 'Free To Play'}</p>
                    </CardContent>
                  </CardActionArea>  
                </Link>
              </Card>
            ))}
          </div>
          <div className='second-title'>
            {categoryGame.filter((_, index) => index > 8 && index < 12).map(game => (
              <Card className='title-card'>
                <Link to={'/app/referer'} onClick={categoryContext.setGamePage} data-appid={game.appID}>
                  <CardActionArea>
                    <CardMedia
                      className='title-img'
                      component='img'
                      height='140' 
                      image={game.header_image}
                    />
                    <CardContent className='bot'>
                      <WindowSharp />
                      <p>{game.is_free === false ? game.price_overview.final_formatted : 'Free To Play'}</p>
                    </CardContent>
                  </CardActionArea>  
                </Link>
              </Card>
            ))}
          </div>
          <div className='first-title'>
            {categoryGame.filter((_, index) => index > 11 && index < 14).map(game => (
              <Card className='title-card'>
                <Link to={'/app/referer'} onClick={categoryContext.setGamePage} data-appid={game.appID}>
                  <CardActionArea>
                    <CardMedia
                      className='title-img'
                      component='img'
                      height='140' 
                      image={game.header_image}
                    />
                    <CardContent className='bot'>
                      <WindowSharp />
                      <p>{game.is_free === false ? game.price_overview.final_formatted : 'Free To Play'}</p>
                    </CardContent>
                  </CardActionArea>  
                </Link>
              </Card>
            ))}
          </div>
        </div>
        <h2>COMING SOON</h2>
        <div className='new-titles'>
          {incomingGames.map(game => (
            <Card className='coming-soon'>
              <Link to={'/app/referer'} onClick={categoryContext.setGamePage} data-appid={game.appID}>
                <CardActionArea>
                  <CardMedia 
                    className='soon-img'
                    component='img'
                    // height='133.97'
                    image={game.header_image}
                  />
                  <CardContent className='bot'>
                    <WindowSharp />
                    <p>Coming Soon</p>
                  </CardContent>
                </CardActionArea>
              </Link>
            </Card>
          ))}
          
        </div>
      </div>
    </div>
    : null
  )
}

export default Category