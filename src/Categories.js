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
        setCategoryStyles()
    }, [])

    const [blockColors, setBlockColors] = useState([])
    const categoryGames = useContext(Context)

    const setCategoryStyles = () => {
        const categoryBlocks = [{
            category: 'CASUAL',
            colorName: 'yellow'
        }, {category: 'ACTION', colorName: 'red'}, {
            category: 'FREE TO PLAY', colorName: 'cyan'
        }, {category: 'ADVENTURE', colorName: 'green'}]

        setBlockColors(prev => prev.concat(categoryBlocks))
    }
    console.log('COLORS', blockColors)

    return (
        <div className='category'>
            <h4>BROWSER BY CATEGORY</h4>
            <div className='grid'>
                {blockColors.map((color, index) => (
                    <Link key={index} to={`/category/${color.category.toLowerCase()}`} state={{name: color.category}}>
                        <img alt={color.category.toLowerCase()} src={index !== 2 ? `https://store.steampowered.com/categories/homepageimage/category/${color.category.toLowerCase()}?cc=us&l=english` : `https://store.steampowered.com/categories/homepageimage/freetoplay?cc=us&l=english`} />
                        <div style={{ background: `linear-gradient(to top, ${color.colorName}, transparent` }} className='name'>
                            <p>{color.category}</p>
                        </div>
                    </Link>
                ))}
            </div>
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