import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, CardActionArea } from '@mui/material'
import { Card } from '@mui/material'
import { CardContent } from '@mui/material'
import { CardMedia } from '@mui/material'
import { Context } from './ContextData'
import './categories.css'

const Categories = () => {
    useEffect(() => {
        
        getRandomColor()
    }, [])

    const [blockColors, setBlockColors] = useState([])
    const categoryGames = useContext(Context)

    const getRandomColor = () => {
        const colors = ['blue', 'red', 'yellow', 'purple', 'green', 'cyan'];
        const shuffled = colors.map(color => ({ color, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ color }) => color).splice(2, 4)

        setBlockColors(prev => prev.concat(shuffled))
        
        // return colors[Math.floor(Math.random() * colors.length)]
    }
    console.log(blockColors)
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

    const BackgroundStyle = {
        background: `linear-gradient(to top, ${blockColors[Math.floor(Math.random() * blockColors.length)]}, transparent)`
    }

    const setTabs = event => {
        const childTabs = event.target.parentElement.children
        console.log('Test', event.target, event.target.dataset)
        for (const child of childTabs) {
            child.classList.remove('active-tab')
        }
        for (const tab of tabCount) {
            if (Number(event.target.dataset.count) === tab.id) {
                console.log('Tab Name', tab.name)
                // setTabName(tab.name)
            }
        }
        event.target.classList.add('active-tab')
    }

    return (
        <div className='category'>
            <h4>BROWSER BY CATEGORY</h4>
            <div className='grid'>
                <Link to={`/category/casual`} state={{name: 'CASUAL'}}>
                    <img alt='casual' src='https://store.steampowered.com/categories/homepageimage/category/horror?cc=us&l=english' />
                    <div style={BackgroundStyle} className='name'>
                        <p>CASUAL</p>
                    </div>
                </Link>
                <Link to={`/category/action`} state={{name: 'ACTION'}}>
                    <img alt='action' src='https://store.steampowered.com/categories/homepageimage/category/action?cc=us&l=english' />
                    <div style={BackgroundStyle} className='name'>
                        <p>ACTION</p>
                    </div>
                </Link>
                <Link to={`/category/freeToPlay`} state={{name: 'FREE TO PLAY'}}>
                    <img alt='freeToPlay' src='https://store.steampowered.com/categories/homepageimage/category/rogue_like_rogue_lite?cc=us&l=english' />
                    <div style={BackgroundStyle} className='name'>
                        <p>FREE TO PLAY</p> 
                    </div>
                </Link>
                <Link to={`/category/adventure`} state={{name: 'ADVENTURE'}}>
                    <img alt='adventure' src='https://store.steampowered.com/categories/homepageimage/greatondeck?cc=us&l=english' />
                    <div style={BackgroundStyle} className='name'>
                        <p>ADVENTURE</p>
                    </div>
                </Link>

            </div>
            {/* <div className='category-tabs'>
                <div onClick={setTabs} className='active-tab'></div>
                <div onClick={setTabs}></div>
                <div onClick={setTabs}></div>
                <div onClick={setTabs}></div>
                <div onClick={setTabs}></div>
            </div> */}
            <div className='browse'>
                <h4>BROWSE STEAM</h4>
                <div className='browse-grid'>
                    <Button>NEW RELEASES</Button>
                    <Button>SPECIALS</Button>
                    <Button>FREE GAMES</Button>
                    <Button>BY USER TAGS</Button>
                </div>
            </div>
            <div className='price'>
                <h4>UNDER $10</h4>
                <div className='price-group'>
                    {categoryGames.belowGames.map((game, index) => (
                        <Card key={index}>
                            <Link className='route-links' onClick={categoryGames.setGamePage} to={`/app/rferer`} data-appid={categoryGames.belowGames[index].appID}>
                                <CardActionArea>
                                    <CardMedia
                                        className='price-imgs'
                                        component='img'
                                        image={game.header_image}
                                    />
                                    <CardContent className='price-tag'>
                                        <p>{game.is_free === false ? game.price_overview.final_formatted : 'Free To Play'}</p>
                                    </CardContent>
                                </CardActionArea>
                            </Link>    
                        </Card>
                    ))}
                    
                </div>
            </div>
            <div className='new'>
                <h4>Updates and Offers</h4>
                <div className='new-group'>
                    {categoryGames.updatedGames.map((game, index) => (
                        <Card key={index} className={index === 0 ? 'side' : index.toString() }>
                            <Link className='route-links' onClick={categoryGames.setGamePage} to={`/app/rferer`} data-appid={categoryGames.updatedGames[index].appID}>
                                <CardActionArea>
                                    <CardMedia
                                        className='new-imgs'
                                        height={index === 0 ? `401px` : `182px`}
                                        component='img'
                                        image={game.header_image}
                                    />
                                    <CardContent className='new-tag'>
                                        <p>{game.is_free === false && game.price_overview !== undefined && game.price_overview.final_formatted !== undefined ? game.price_overview.final_formatted : 'Free To Play'}</p>
                                    </CardContent>
                                </CardActionArea>
                            </Link>    
                        </Card>
                    ))}
                </div>
            </div>
        </div>
  )
}

export default Categories