import React, { useEffect, useState, useContext } from 'react'
import { Context } from './ContextData'
import { Card } from '@mui/material'
import { CardMedia } from '@mui/material'
import { CardContent } from '@mui/material'
import { CardActionArea } from '@mui/material'
import { Typography } from '@mui/material'
import AppleIcon from '@mui/icons-material/Apple';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { WindowSharp } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import './games.css'


const Games = () => {
    const [featuredGames, setFeaturedGames] = useState([])
    const [favorites, setFavorites] = useState([])
    const [currentColor, setCurrentColor] = useState()
    const [tabName, setTabName] = useState('')
    const [tabCount, setTabCount] = useState([{
        name: 'Fallout',
        id: 0
    }, {
        name: 'RimWorld',
        id: 1
    }, {
        name: 'Dark Souls',
        id: 2
    }])
    const [tabTest, setTabTest] = useState([{
        id: 0
    }, {id: 0,}, {id: 0}, {id: 0}, {id: 0}])

    const topGames = useContext(Context)

    // useEffect(() => {
    //     console.log('Page', topGames, topGames.games[Math.floor(Math.random() * topGames.games.length)])
    //     // setFeaturedGames(topGames)
    //     // for (let i = 0; i < 12; i++) {
    //     //     setFeaturedGames(prev => prev.concat(topGames.games[Math.floor(Math.random() * topGames.games.length)]))
    //     // }
    //     setFeaturedGames(prev => prev.concat(topGames.games[Math.floor(Math.random() * topGames.games.length)]))
    //     console.log('Yes', featuredGames)
    // }, [])
    useEffect(() => {
        console.log('Gamer', topGames )
        
        // if (!topGames.games) return
        // else setFavorites(prev => prev.concat(
        //     topGames.games.filter(name => name === topGames.games.find(item => item['Rimworld']))
        // ))

    }, [topGames])
    // Four other fav games: Elden Ring, Dark Souls 3, Unturned, Detroit Become Human
    console.log('Counts', tabCount, topGames, favorites)

    // SET TABS FUNCTION WORKS
    const setTabs = event => {
        const childTabs = event.target.parentElement.children
        console.log('Test', event.target, event.target.dataset)
        for (const child of childTabs) {
            child.classList.remove('active-tab')
        }
        for (const tab of tabCount) {
            if (Number(event.target.dataset.count) === tab.id) {
                console.log('Tab Name', tab.name)
                setTabName(tab.name)
            }
        }
        event.target.classList.add('active-tab')
    }

    const setSingleGame = () => {
        // USE THIS TO SET THE GAME CLICKED ON(LINK) TO THE SINGLE GAME STATE

    }
    // USE THIS BELOW TO SET THE APP ID TO THE INDEX IN ARRAY
    // useEffect(() => {
    //     setTabTest(prevTab => {
    //         console.log(prevTab)
    //         prevTab.map((tab, index) => tab.id = index)
    //         console.log('New', prevTab)
    //     })
    // }, [])
    return (
        topGames.featuredGames[0] !== undefined ?

        <div className='main-games'>
            <h4>FEATURED & RECOMMENDED</h4>
            <Card className='card'>
                <Link className='route-links' to={`/app/rferer`}>
                    <CardActionArea>
                        <CardMedia 
                            component='img'
                            height='353'
                            image={topGames.featuredGames[0].header_image}
                        />
                        <div className='right-card'>
                            <p>{topGames.featuredGames[0].name}</p>
                            <div className='card-grid'>
                                {topGames.featuredGames[0].screenshots.filter(item => item.id < 4)
                                .map((image, key) => (
                                    <CardMedia
                                        component='img'
                                    // height='50'
                                        key={key}
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
                                    <p>{topGames.featuredGames[0].is_free === true ? 'Free to Play'
                                    : topGames.featuredGames[0].price_overview.final_formatted}</p>
                                </div>    
                                <div className='icons'>
                                    <WindowSharp />
                                    <AppleIcon />
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
                                7 Days to Die
                            </Typography>
                            <p>Price</p>
                            
                            {/* APP ID 251570 */}
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
                            {/* APP ID 377160 */}
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
                                <p>Unturned</p>
                                <p>Price</p>
                                {/* APP ID 304930 */}
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
                                {/* APP ID 283640 */}
                            </div>
                        </CardContent>
                    </Card>
                </div>
                {/* <div className='tabs'>
                    <div onClick={setTabs} className='active-tab'></div>
                    <div onClick={setTabs}></div>
                </div> */}
            </div>
        </div>
        : null
    )
}

export default Games