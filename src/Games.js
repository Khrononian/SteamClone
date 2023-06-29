import React, { useEffect, useState, useContext } from 'react'
import { Context } from './ContextData'
import { Card } from '@mui/material'
import { CardMedia } from '@mui/material'
import { CardContent } from '@mui/material'
import { CardActionArea } from '@mui/material'
import { Typography } from '@mui/material'
import AppleIcon from '@mui/icons-material/Apple';
import { WindowSharp } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import SteamIcon from './SteamIcon.svg'
import './games.css'

const Games = () => {
    const [tabNum, setTabNum] = useState()
    const [tabCount, setTabCount] = useState([
        {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}
    ])

    const topGames = useContext(Context)

    useEffect(() => {
        setTabCount(prevTab => {
            console.log(prevTab)
            prevTab.map((tab, index) => tab.id = index)
        })
    }, [])
    // Four other fav games: Elden Ring, Dark Souls 3, Unturned, Detroit Become Human

    // SET TABS FUNCTION WORKS
    const setTabs = event => {
        console.log('Tab event', event)
        const childTabs = event.target.parentElement.children
        for (const child of childTabs) {
            child.classList.remove('active-tab')
        }
        event.target.classList.add('active-tab')
        setTabNum(Number(event.target.dataset.count))
    }
    
    return (
        topGames.featuredGames[0] !== undefined ?

        <div className='main-games'>
            <h4>FEATURED & RECOMMENDED</h4>
            <Card className='card'>
                <Link className='route-links' onClick={topGames.setGamePage} to={`/app/${topGames.featuredGames[tabNum === undefined ? 0 : tabNum].name}`} data-appid={topGames.featuredGames[tabNum === undefined ? 0 : tabNum].appID} >
                    <CardActionArea>
                        <CardMedia 
                            component='img'
                            height='353'
                            image={topGames.featuredGames[tabNum === undefined ? 0 : tabNum].header_image}
                        />
                        <div className='right-card'>
                            <p>{topGames.featuredGames[tabNum === undefined ? 0 : tabNum].name}</p>
                            <div className='card-grid'>
                                {topGames.featuredGames[tabNum === undefined ? 0 : tabNum].screenshots.filter(item => item.id < 4)
                                .map((image, index) => (
                                    <CardMedia
                                        component='img'
                                        key={index}
                                        image={image.path_full}
                                    />
                                ))
                                }
                            </div>
                            <CardContent className='card-data'>
                                <div className='game-info'>
                                    <Typography variant='h5'>
                                        Now Available
                                    </Typography>
                                    <Typography variant='h6' fontSize='medium'>
                                        Top Seller
                                    </Typography>
                                    <p>{topGames.featuredGames[tabNum === undefined ? 0 : tabNum].is_free === true || topGames.featuredGames[tabNum === undefined ? 0 : tabNum].price_overview === undefined || topGames.featuredGames[tabNum === undefined ? 0 : tabNum].price_overview.final_formatted === undefined ? 'Free to Play'
                                    : topGames.featuredGames[tabNum === undefined ? 0 : tabNum].price_overview.final_formatted}</p>
                                </div>    
                                <div className='icons'>
                                    {topGames.featuredGames[tabNum === undefined ? 0 : tabNum].platforms.windows === true ? <WindowSharp fontSize='small' /> : null}
                                    {topGames.featuredGames[tabNum === undefined ? 0 : tabNum].platforms.mac === true ? <AppleIcon fontSize='small' /> : null}
                                    {topGames.featuredGames[tabNum === undefined ? 0 : tabNum].platforms.linux === true ? <img src={SteamIcon} alt='Steam Icon' /> : null}
                                </div>
                            </CardContent>
                        </div>
                    </CardActionArea>
                </Link>
            </Card>
            <div className='tabs'>
                <div onClick={setTabs} className='active-tab' data-count='0'></div>
                <div onClick={setTabs} data-count='1'></div>
                <div onClick={setTabs} data-count='2'></div>
                <div onClick={setTabs} data-count='3'></div>
                <div onClick={setTabs} data-count='4'></div>
                <div onClick={setTabs} data-count='5'></div>
                <div onClick={setTabs} data-count='6'></div>
                <div onClick={setTabs} data-count='7'></div>
                <div onClick={setTabs} data-count='8'></div>
                <div onClick={setTabs} data-count='9'></div>
                <div onClick={setTabs} data-count='10'></div>
                <div onClick={setTabs} data-count='11'></div>
            </div>
            <div className='steam'>
                <img className='deck' src='https://cdn.akamai.steamstatic.com/steam/clusters/sale_autumn2019_assets/54b5034d397baccb93181cc6/deck_banner_desktop_english.gif?t=1672461895' alt='Deck'/>
                <img  className='index' src='https://cdn.akamai.steamstatic.com/store/home/store_index_promo.jpg' alt='Deck' />
            </div>
            <div>
                <h4>FAVORITE GAMES</h4>
                <div className='favorites'>
                    <Card className='first card-favs'>
                        <Link to={`/app/7 Days to Die`} onClick={topGames.setGamePage} data-appid='251570'> 
                            <CardActionArea>
                                <CardMedia
                                    className='card-imgs'
                                    component='img'
                                    image='https://cdn.akamai.steamstatic.com/steam/apps/251570/header.jpg?t=1650477344'
                                />
                            </CardActionArea>
                            <CardContent>
                                <Typography variant='h5'>
                                    7 Days to Die
                                </Typography>
                                <p>$24.99</p>
                            </CardContent>
                        </Link>
                    </Card>
                    <Card className='second card-favs'>
                        <Link to={`/app/Fallout 4`} onClick={topGames.setGamePage} data-appid='377160'> 
                            <CardActionArea>
                                <CardMedia
                                    className='card-imgs'
                                    component='img'
                                    image='https://cdn.akamai.steamstatic.com/steam/apps/377160/header.jpg?t=1650909928'
                                />
                            </CardActionArea>
                            <CardContent>
                                <Typography variant='h5'>
                                    Fallout 4
                                </Typography>
                                <p>$29.99</p>
                            </CardContent>
                        </Link>
                    </Card>
                    <Card className='third card-favs'>
                        <Link to={`/app/Unturned`} onClick={topGames.setGamePage} data-appid='304930'> 
                            <CardActionArea>
                                <CardMedia
                                    component='img'
                                    image='https://cdn.akamai.steamstatic.com/steam/apps/304930/header.jpg?t=1673402489'
                                />
                            </CardActionArea>
                            <CardContent className='side-card'>
                                <div className='bottom-data'>
                                    <p>Unturned</p>
                                    <p>Free to Play</p>
                                </div>
                                
                            </CardContent>
                        </Link>
                    </Card>
                    <Card className='fourth card-favs'>
                        <Link to={`/app/Salt & Sanctuary`} onClick={topGames.setGamePage} data-appid='283640'> 
                            <CardActionArea>
                                <CardMedia
                                    component='img'
                                    image='https://cdn.akamai.steamstatic.com/steam/apps/283640/header.jpg?t=1641520718'
                                />
                            </CardActionArea>
                            <CardContent className='side-card'>
                                <div className='bottom-data'>
                                    <p>SALT & SANCTUARY</p>
                                    <p>$17.99</p>
                                </div>
                            </CardContent>
                        </Link>
                    </Card>
                </div>
            </div>
        </div>
        : null
    )
}

export default Games