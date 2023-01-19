import React from 'react'
import { Card } from '@mui/material'
import { CardMedia } from '@mui/material'
import { CardContent } from '@mui/material'
import { CardActionArea } from '@mui/material'
import { Typography } from '@mui/material'
import AppleIcon from '@mui/icons-material/Apple';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { WindowSharp } from '@mui/icons-material'

import './games.css'

const Games = () => {
  return (
    <div className='main-games'>
        <h4>FEATURED & RECOMMENDED</h4>
        <Card className='card'>
            <CardActionArea href='' >
                <CardMedia 
                    component='img'
                    height='353'
                    image='https://steamcdn-a.akamaihd.net/steam/apps/730/header.jpg?t=1592263625'
                />
                <div className='right-card'>
                    <p>Game</p>
                    <div className='card-grid'>
                        <CardMedia
                            component='img'
                            // height='50'
                            image='https://cdn.akamai.steamstatic.com/steam/spotlights/dc7c7e8e9f1f1dc7085cf059/spotlight_image_english.jpg?t=1671755026'
                        />
                        <CardMedia
                            component='img'
                            // height='50'
                            image='https://cdn.akamai.steamstatic.com/steam/spotlights/dc7c7e8e9f1f1dc7085cf059/spotlight_image_english.jpg?t=1671755026'
                        />
                        <CardMedia
                            component='img'
                            // height='50'
                            image='https://cdn.akamai.steamstatic.com/steam/spotlights/dc7c7e8e9f1f1dc7085cf059/spotlight_image_english.jpg?t=1671755026'
                        />
                        <CardMedia
                            component='img'
                            // height='50'
                            image='https://cdn.akamai.steamstatic.com/steam/spotlights/dc7c7e8e9f1f1dc7085cf059/spotlight_image_english.jpg?t=1671755026'
                        />
                    </div>
                    <CardContent className='card-data'>
                        <div className='game-info'>
                            <Typography variant='h5'>
                                Game Title Here
                            </Typography>
                            <Typography variant='h6' fontSize='medium'>
                                Tags here
                            </Typography>
                            <p>Price Here</p>
                        </div>    
                        <div className='icons'>
                            <WindowSharp />
                            <AppleIcon />
                        </div>
                    </CardContent>
                </div>
            </CardActionArea>
        </Card>
        <div className='tabs'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className='steam'>
            <img className='deck' src='https://cdn.akamai.steamstatic.com/steam/clusters/sale_autumn2019_assets/54b5034d397baccb93181cc6/deck_banner_desktop_english.gif?t=1672461895' alt='Deck'/>
            <img  className='index' src='https://cdn.akamai.steamstatic.com/store/home/store_index_promo.jpg' alt='Deck' />
        </div>
        <div>
            <h4>FAVORITE GAMES</h4>
            <div className='favorites'>
                <Card className='first'>
                    <CardActionArea>
                        <CardMedia
                            className='card-imgs'
                            component='img'
                            image='https://cdn.akamai.steamstatic.com/steam/apps/294100/header.jpg?t=1666905455'
                        />
                    </CardActionArea>
                    <CardContent>
                        <Typography variant='h5'>
                            RIMWORLD
                        </Typography>
                        <p>Price</p>
                        
                        {/* <FontAwesomeIcon icon="fa-brands fa-windows" /> */}
                        <p>SHORT DESC HERE</p>
                    </CardContent>
                </Card>
                <Card className='second'>
                    <CardActionArea>
                        <CardMedia
                            className='card-imgs'
                            component='img'
                            image='https://cdn.akamai.steamstatic.com/steam/apps/377160/header.jpg?t=1650909928'
                        />
                    </CardActionArea>
                    <CardContent>
                        <Typography variant='h5'>
                            FALLOUT 4
                        </Typography>
                        <p>Price</p>
                    </CardContent>
                </Card>
                <Card className='third'>
                    <CardActionArea>
                        <CardMedia
                            component='img'
                            image='https://cdn.akamai.steamstatic.com/steam/apps/22380/header.jpg?t=1665072891'
                        />
                    </CardActionArea>
                    <CardContent className='side-card'>
                        <div className='bottom-data'>
                            <p>FALLOUT NEW VEGAS</p>
                            <p>Price</p>
                        </div>
                        
                    </CardContent>
                    
                </Card>
                <Card className='fourth'>
                    <CardActionArea>
                        <CardMedia
                            component='img'
                            image='https://cdn.akamai.steamstatic.com/steam/apps/283640/header.jpg?t=1641520718'
                        />
                    </CardActionArea>
                    <CardContent className='side-card'>
                        <div className='bottom-data'>
                            <p>SALT & SANCTUARY</p>
                            <p>Price</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className='tabs'>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default Games