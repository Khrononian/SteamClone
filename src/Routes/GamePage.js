import React, { useEffect, useContext } from 'react'
import Nav from '../Nav'
import SiteNav from '../SiteNav'
import { Context } from '../ContextData'
import { Button } from '@mui/material'
import { WindowSharp } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { red } from '@mui/material/colors'
import { ThumbUpAltSharp } from '@mui/icons-material'
import { ThumbDownAltSharp } from '@mui/icons-material'
import './gamepage.css'

const GamePage = () => {
    useEffect(() => {
        console.log('Game', singleGameData)
    })

    const singleGameData = useContext(Context)

    return (
        <div className='section'>
            <Nav />
            <SiteNav />
            <div className='main-game'>
                <div className='first-div'>
                    <h2>Rain World</h2>
                    <Button>Community Hub</Button>
                </div>
                <div className='main-section'>
                    <div>
                        <img className='main-img' src='https://cdn.cloudflare.steamstatic.com/steam/apps/312520/ss_cbd4e647d6b3bb3b311cb68fdf0cd8835d5919d7.600x338.jpg?t=1674137018' alt='Game Name' />
                        <div className='img-grid'>
                            <img src='https://cdn.cloudflare.steamstatic.com/steam/apps/312520/ss_ac9c5296916330c54c69302963d151ad261d6c14.116x65.jpg?t=1674137018' alt='Rain' />
                            <img src='https://cdn.cloudflare.steamstatic.com/steam/apps/312520/ss_628274c84b196e270733f540139062f2787c4423.116x65.jpg?t=1674137018' alt='Rain' />
                            <img src='https://cdn.cloudflare.steamstatic.com/steam/apps/312520/ss_cbd4e647d6b3bb3b311cb68fdf0cd8835d5919d7.116x65.jpg?t=1674137018' alt='Rain' />
                            <img src='https://cdn.cloudflare.steamstatic.com/steam/apps/312520/ss_732dcfeade41f17e5404bc528bd9f44b53a51d5f.116x65.jpg?t=1674137018' alt='Rain' />
                            <img src='https://cdn.cloudflare.steamstatic.com/steam/apps/312520/ss_467f33ca196cdc545d5ae7aeb0c5d55c1aa8e134.116x65.jpg?t=1674137018' alt='Rain' />
                        </div>
                    </div>
                    <div>
                        <img className='side-img' src='https://cdn.cloudflare.steamstatic.com/steam/apps/312520/header.jpg?t=1674137018' alt='Main pic' />
                        <p className='top'>You are a nomadic slugcat, both predator and prey in a broken ecosystem. Grab your spear and brave the industrial wastes, hunting enough food to survive, but be wary— other, bigger creatures have the same plan... and slugcats look delicious.</p>
                        <div className='reviews bottom'>
                            <p>RECENT REVIEWS: <span>VERY POSITIVE</span></p>
                            <p>ALL REVIEWS: <span>VERY POSITIVE</span></p>
                        </div>
                        <div className='date bottom'>
                            <p>RELEASE DATE: <span>Mar 28, 2017</span></p>
                        </div>
                        <div className='dev-pub bottom'>
                            <p>DEVELOPER: <span>Videocult</span></p>
                            <p>PUBLISHER: <span>Akupara Games</span></p>
                        </div>
                        <div className='tags bottom'>
                            <p>Popular user-defined tags for this proudct:</p>
                        </div>
                        <div className='tag-grid'>
                            <p>Atmospheric</p>
                            <p>Difficult</p>
                            <p>Survival</p>
                            <p>Platformer</p>
                            <p>2D</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className='bottom-grid'>
                <div className='purchase'>
                    <div>
                        <p>Buy Rain World</p>
                        <WindowSharp />
                    </div>
                    <div>
                        <p>$19.99</p>
                        <Button>Add to Cart</Button>
                    </div>
                </div>
                <div className='categories'>
                    <Button>Single-player</Button>
                    <Button>Steam Achievements</Button>
                    <Button>Full controller support</Button>
                    <Button>Steam Trading Cards</Button>
                    <Button>Steam Workshop</Button>
                </div>

                <div className='desc'>
                    <div className='desc-info'>
                        <p>TITLE: <span>Rain World</span></p>
                        <p>GENRE: <span>Action, Adventure, Indie</span></p>
                        <p>DEVELOPER: <span>Video cult</span></p>
                        <p>PUBLISHER: <span>Akupra Games</span></p>
                        <p>FRANCHISE: <span>Rain World, Akupara Games</span></p>
                        <p>RELEASE DATE: <span>Date</span></p>
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
                        <img src='https://cdn.cloudflare.steamstatic.com/steam/apps/312520/extras/RW_SteamGIF_02.jpg?t=1674137018' alt='Game' />
                        <p>You are a slugcat. The world around you is full of danger, and you must face it – alone. Separated from your family in a devastating flood, you will need to find food and shelter between terrifying torrential downpours which threaten to drown all life. Climb through the ruins of an ancient civilization, evade the jaws of vicious predators, and discover new lands teeming with strange creatures and buried mysteries. Find your family before something makes a meal of you!</p>
                        <p>Inspired by the simplicity and aesthetics of 16-bit classics, this survival platformer requires clever decision-making, both to catch your own prey and to avoid the jaws of hungry predators. Each ravenous foe in your path will be cunning, vicious and always on the hunt – eager to sink their teeth into you, or even each other. As a small, soft slugcat you must rely on stealth and wit rather than force: learn the ecosystem and turn their strengths to your advantage. Maybe then you can survive… Rain World!</p>
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
    )
}

export default GamePage