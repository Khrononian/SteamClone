import React from 'react'
import { Link } from 'react-router-dom'
import { Button, CardActionArea } from '@mui/material'
import { Card } from '@mui/material'
import { CardContent } from '@mui/material'
import { CardMedia } from '@mui/material'
import './categories.css'

const Categories = () => {
    const getRandomColor = () => {
        const colors = ['blue', 'red', 'yellow', 'purple', 'green', 'cyan'];

        return colors[Math.floor(Math.random() * colors.length)]
    }

    return (
        <div className='category'>
            <h4>BROWSER BY CATEGORY</h4>
            <div className='grid'>
                <Link>
                    <img alt='City & Settlement' src='https://store.steampowered.com/categories/homepageimage/category/horror?cc=us&l=english' />
                    <div className='name'>
                        <p>HORROR</p>
                    </div>
                </Link>
                <Link>
                    <img alt='City & Settlement' src='https://store.steampowered.com/categories/homepageimage/category/action?cc=us&l=english' />
                    <div className='name'>
                        <p>ACTION</p>
                    </div>
                </Link>
                <Link>
                    <img alt='City & Settlement' src='https://store.steampowered.com/categories/homepageimage/category/rogue_like_rogue_lite?cc=us&l=english' />
                    <div className='name'>
                        <p>FREE TO PLAY</p> 
                    </div>
                </Link><Link>
                    <img alt='City & Settlement' src='https://store.steampowered.com/categories/homepageimage/greatondeck?cc=us&l=english' />
                    <div className='name'>
                        <p>ADVENTURE</p>
                    </div>
                </Link>

                {/* <Link>
                    <img alt='City & Settlement' src='https://store.steampowered.com/categories/homepageimage/category/horror?cc=us&l=english' />
                    <div className='name'>OPEN WORLD</div>
                </Link>
                <Link>
                    <img alt='City & Settlement' src='https://store.steampowered.com/categories/homepageimage/category/action?cc=us&l=english' />
                    <div className='name'>STRATEGY</div>
                </Link>
                <Link>
                    <img alt='City & Settlement' src='https://store.steampowered.com/categories/homepageimage/category/rogue_like_rogue_lite?cc=us&l=english' />
                    <div className='name'>CO-OPERATIVE</div>
                </Link><Link>
                    <img alt='City & Settlement' src='https://store.steampowered.com/categories/homepageimage/greatondeck?cc=us&l=english' />
                    <div className='name'>PUZZLE</div>
                </Link> */}
            </div>
            <div className='category-tabs'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
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
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                className='price-imgs'
                                component='img'
                                image='https://cdn.akamai.steamstatic.com/steam/apps/397540/header_292x136.jpg?t=1657214217'
                            />
                            <CardContent className='price-tag'>
                                <p>Price</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </div>
            <div className='new'>
                <h4>NEW GAMES</h4>
                <div className='new-group'>
                    <Card className='side'>
                        <CardActionArea>
                            <CardMedia
                                className='new-imgs'
                                height='383px'
                                component='img'
                                image='https://cdn.akamai.steamstatic.com/steam/apps/1943950/header_292x136.jpg?t=1673553323'
                            />
                            <CardContent className='new-tag'>
                                <p>Price</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card className='one'>
                        <CardActionArea>
                            <CardMedia
                                className='new-imgs'
                                height='173px'
                                component='img'
                                image='https://cdn.akamai.steamstatic.com/steam/apps/397540/header_292x136.jpg?t=1657214217'
                            />
                            <CardContent className='new-tag'>
                                <p>Price</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card className='two'>
                        <CardActionArea>
                            <CardMedia
                                className='new-imgs'
                                height='173px'
                                component='img'
                                image='https://cdn.akamai.steamstatic.com/steam/apps/105600/header_292x136.jpg?t=1666290860'
                            />
                            <CardContent className='new-tag'>
                                <p>Price</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card className='three'>
                        <CardActionArea>
                            <CardMedia
                                className='new-imgs'
                                height='173px'
                                component='img'
                                image='https://cdn.akamai.steamstatic.com/steam/apps/2221490/header_292x136.jpg?t=1673546006'
                            />
                            <CardContent className='new-tag'>
                                <p>Price</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card className='four'>
                        <CardActionArea>
                            <CardMedia
                                className='new-imgs'
                                height='173px'
                                component='img'
                                image='https://cdn.akamai.steamstatic.com/steam/apps/851850/capsule_184x69.jpg?t=1673638283'
                            />
                            <CardContent className='new-tag'>
                                <p>Price</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card className='five'>
                        <CardActionArea>
                            <CardMedia
                                className='new-imgs'
                                height='173px'
                                component='img'
                                image='https://cdn.akamai.steamstatic.com/steam/apps/1933660/capsule_184x69.jpg?t=1673672412'
                            />
                            <CardContent className='new-tag'>
                                <p>Price</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card className='six'>
                        <CardActionArea>
                            <CardMedia
                                className='new-imgs'
                                height='173px'
                                component='img'
                                image='https://cdn.akamai.steamstatic.com/steam/apps/1943950/header_292x136.jpg?t=1673553323'
                            />
                            <CardContent className='new-tag'>
                                <p>Price</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </div>
        </div>
  )
}

export default Categories