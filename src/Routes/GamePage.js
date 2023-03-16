import React, { useEffect, useContext } from 'react'
import Nav from '../Nav'
import SiteNav from '../SiteNav'
import { Context } from '../ContextData'
import { Button } from '@mui/material'
import { WindowSharp } from '@mui/icons-material'
import AppleIcon from '@mui/icons-material/Apple';
import { Avatar } from '@mui/material'
import { red } from '@mui/material/colors'
import { ThumbUpAltSharp } from '@mui/icons-material'
import { ThumbDownAltSharp } from '@mui/icons-material'
import SteamIcon from '../SteamIcon.svg'
import './gamepage.css'

const GamePage = () => {
    const singleGameData = useContext(Context)

    useEffect(() => {
        console.log('Single Game', singleGameData)

        singleGameData.setSingleGame(current => current.filter(game => game.name === ''))
    }, [])

    const changeMainImage = (event, img) => {
        event.target.parentElement.parentElement.querySelector('.main-img').src = img
    }

    return (
        singleGameData.singleGame[0] !== undefined ?
        
        <div className='section'>
            <Nav />
            <SiteNav />
            <div className='main-game' style={{ backgroundImage: `url(${singleGameData.singleGame[0].background})`, backgroundSize: 'cover' }}>
                <div className='first-div'>
                    <h2>{singleGameData.singleGame[0].name}</h2>
                    <Button>Community Hub</Button>
                </div>
                <div className='main-section'>
                    <div>
                        <img className='main-img' src={singleGameData.singleGame[0].screenshots[0].path_full} alt='Game Name' />
                        <div className='img-grid'>
                            {singleGameData.singleGame[0].screenshots.filter(item => item.id < 5)
                            .map((image, index) => (
                                <img onClick={(event) => changeMainImage(event, image.path_full)} key={index} src={image.path_full} alt='Name of game' />
                            ))}
                        </div>
                    </div>
                    <div>
                        <img className='side-img' src={singleGameData.singleGame[0].header_image} alt='Main pic' />
                        <p className='top-desc'>{singleGameData.singleGame[0].short_description}</p>
                        <div className='reviews bottom'>
                            <p>RECENT REVIEWS: <span>VERY POSITIVE</span></p>
                            <p>ALL REVIEWS: <span>VERY POSITIVE</span></p>
                        </div>
                        <div className='date bottom'>
                            <p>RELEASE DATE: <span>{singleGameData.singleGame[0].release_date.date}</span></p>
                        </div>
                        <div className='dev-pub bottom'>
                            <p>DEVELOPER: <span>{singleGameData.singleGame[0].developers[0]}</span></p>
                            {/* {singleGameData.singleGame[0].publishers.map((name, index) => (
                                <p>PUBLISHER: <span>{name}</span></p>
                            ))} */}
                            <p>PUBLISHER: <span>{singleGameData.singleGame[0].publishers.length > 1 ? `${singleGameData.singleGame[0].publishers[0]}, ${singleGameData.singleGame[0].publishers[1]}` : singleGameData.singleGame[0].publishers[0]}</span></p>
                        </div>
                        <div className='tags bottom'>
                            <p>Popular user-defined tags for this proudct:</p>
                        </div>
                        <div className='tag-grid'>
                            {singleGameData.singleGame[0].genres.filter((_, index) => index !== 6 )
                            .map((genre, index) => (
                                <p key={index}>{genre.description}</p>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            <div className='bottom-grid'>
                <div className='purchase'>
                    <div>
                        <p>Buy {singleGameData.singleGame[0].name}</p>
                        <div className='platforms'>
                            {singleGameData.singleGame[0].platforms.windows === true ? <WindowSharp /> : null}
                            {singleGameData.singleGame[0].platforms.mac === true ? <AppleIcon /> : null}
                            {singleGameData.singleGame[0].platforms.linux === true ? <img src={SteamIcon} alt='Steam Icon' /> : null}
                        </div>
                    </div>
                    <div className='purchase-price'>
                        <p>{singleGameData.singleGame[0].is_free === true || singleGameData.singleGame[0].price_overview === undefined || singleGameData.singleGame[0].price_overview.final_formatted === undefined ? 'Free to Play' : singleGameData.singleGame[0].price_overview.final_formatted}</p>
                        <Button>Add to Cart</Button>
                    </div>
                </div>
                <div className='categories'>
                    {singleGameData.singleGame[0].categories.map((category, key) => (
                        <Button key={key}>{category.description}</Button>
                    ))}
                    {/* <Button>Single-player</Button>
                    <Button>Steam Achievements</Button>
                    <Button>Full controller support</Button>
                    <Button>Steam Trading Cards</Button>
                    <Button>Steam Workshop</Button> */}
                </div>

                <div className='desc'>
                    <div className='desc-info'>
                        <p>TITLE: <span>{singleGameData.singleGame[0].name}</span></p>
                        <p>GENRE: <span>{Object.values(singleGameData.singleGame[0].genres.map(item => item.description)).join(', ')}</span></p>
                        <p>DEVELOPER: <span>{singleGameData.singleGame[0].developers[0]}</span></p>
                        <p>PUBLISHER: <span>{singleGameData.singleGame[0].publishers.length > 1 ? Object.values(singleGameData.singleGame[0].publishers.map(item => item.description)).join(', ') : singleGameData.singleGame[0].publishers[0]}</span></p>
                        <p>FRANCHISE: <span>{`${singleGameData.singleGame[0].name}, ${singleGameData.singleGame[0].publishers.length > 1 ? Object.values(singleGameData.singleGame[0].publishers.map(item => item.description)).join(', ') : singleGameData.singleGame[0].publishers[0]}`}</span></p>
                        <p>RELEASE DATE: <span>{singleGameData.singleGame[0].release_date.date}</span></p>
                    </div>
                    <div className='desc-btns'>
                        <Button href={``}>Visit the website</Button>
                        <Button>Official Discord server</Button>
                        <Button>Read related news</Button>
                        <Button>View discussions</Button>
                        <Button>Find Community Groups</Button>
                    </div>
                </div>
                <div className='about'>
                    <p className='review-heading'>ABOUT THIS GAME</p>
                    <div>
                        {/* <img src='https://cdn.cloudflare.steamstatic.com/steam/apps/312520/extras/RW_SteamGIF_02.jpg?t=1674137018' alt='Game' /> */}
                        {/* {singleGameData.singleGame[0].about_the_game.split(/[\r\n]+/g).map(line => <p>{line.replace(/^( ?<br( \/)?> ?)+|( ?<br( \/)?> ?)+$/, '')}</p>)} */}
                        {/* {singleGameData.singleGame[0].about_the_game.split(/[\r\n]+/g).map(line => <p>{line.replace(/(<([^>]+)>)/ig, '')}</p>)} */}
                        <p dangerouslySetInnerHTML={{__html: singleGameData.singleGame[0].about_the_game}} />
                    </div>
                </div>
                <div className='reviews'>
                    <p className='review-heading'>CUSTOMER REVIEWS</p>
                    <div className='review-block'>
                        <div className='left-grid'>
                            <p className='review-heading'>MOST HELPFUL REVIEWS</p>
                            <div className='review-card'>
                                <div className='avatar'>
                                    <Avatar sx={{ bgcolor: red[500], padding: '.15em' }} variant='square'>M</Avatar>
                                    <span>Momo</span>
                                </div>
                                <div className='review-info'>
                                    <div className='top-review'>
                                        <ThumbUpAltSharp sx={{}} />
                                        <p>Recommended</p>
                                    </div>
                                    <div className='middle-review'>
                                        <p>POSTED: <span>Date</span></p>
                                        <p>Text</p>
                                    </div>
                                    <div className='bottom-review'>
                                        <p>Was this review helpful?</p>
                                        <div>
                                            <Button><ThumbUpAltSharp /> Yes</Button>
                                            <Button><ThumbDownAltSharp /> No</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='right-grid'>
                            <p className='review-heading'>RECENTLY POSTED</p>
                            <div>
                                <div className='main-background'>
                                    <div className='side-review'>
                                        <ThumbUpAltSharp />
                                        <p>Momo</p>
                                    </div>
                                    <div className='middle-side-review'>
                                        <p>POSTED: <span>Date</span></p>
                                        <p>Text</p>
                                    </div>
                                    <div className='bottom-side-review'>
                                        <p>Helpful?</p>
                                        <div>
                                            <Button><ThumbUpAltSharp /> Yes</Button>
                                            <Button><ThumbDownAltSharp /> No</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
        : null
    )
}

export default GamePage