import React, { useState, useEffect, useContext, createRef } from 'react'
import Nav from '../Nav'
import SiteNav from '../SiteNav'
import { Context } from '../ContextData'
import { Button } from '@mui/material'
import { WindowSharp } from '@mui/icons-material'
import AppleIcon from '@mui/icons-material/Apple';
import { Avatar } from '@mui/material'
import { ThumbUpAltSharp } from '@mui/icons-material'
import { ThumbDownAltSharp } from '@mui/icons-material'
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, doc, updateDoc, getDocs, getDoc } from 'firebase/firestore'
import SteamIcon from '../SteamIcon.svg'
import './gamepage.css'

const GamePage = () => {
    const [gamehype, setGameHype] = useState(false);
    const [newDate, setNewDate] = useState('')
    const [gameHypeClick, setGameHypeClick] = useState(false)
    const [reviewPost, setReviewPost] = useState(false)
    const [reviews, setReviews] = useState([])
    const [mount, setMount] = useState([])
    const textField = createRef()
    const singleGameData = useContext(Context)
    const app = initializeApp(singleGameData.firebaseConfig)
    const db = getFirestore(app)

    console.log('FIREBASE', app, db)
    useEffect(() => {
        console.log('Single Game', singleGameData)

        singleGameData.setSingleGame(current => current.filter(game => game.name === ''))
    }, [])

    useEffect(() => {
        const getReviews = async () => {
            const userReviews = await getDocs(collection(db, 'Users'))

            console.log('OLD METALLIC', userReviews)
            userReviews.forEach(review => {
                console.log('METALLIC', userReviews, review.data())
                setReviews(prev => [...prev].concat({review: review.data().review, date: review.data().date, username: review.data().username, recommended: review.data().recommended, color: review.data().color, count: review.data().count}))
                
                if (review.data().date === new Date().toLocaleString('default', { month: 'long', day: 'numeric' })) {
                    setMount(prev => [...prev].concat({review: review.data().review, date: review.data().date, username: review.data().username, recommended: review.data().recommended, color: review.data().color, count: review.data().count}))
                }
            })  
        }
        getReviews()
        
    }, [])

    const changeMainImage = (event, img) => {
        event.target.parentElement.parentElement.querySelector('.main-img').src = img
    }

    const setGameRecommended = event => {
        // console.log('Recommend', event, event.target.innerText)
        console.log('BUTT', event.target.parentElement)
        const btns = event.target.parentElement.children
        for (const btn of btns) {
            btn.classList.remove('user-btns-click')
        }
        event.target.classList.add('user-btns-click')

        if (event.target.innerText === 'Yes') {
            setGameHype(true)
            setGameHypeClick(true)
        } else {
            setGameHype(false)
            setGameHypeClick(true)
        }
        
    }

    console.log('STATE', reviews)
    const submitUserReview = async () => {
        console.log('SUBMIT', textField.current.value)
        
        if (gameHypeClick === false) return
        const date = new Date()
        const monthDay = date.toLocaleString('default', { month: 'long', day: 'numeric' })
        
        setNewDate(monthDay)
        setReviewPost(true)

        await updateDoc(doc(db, 'Users', singleGameData.username), {
            date: monthDay,
            review: textField.current.value,
            recommended: gamehype,
        })
    }

    const getReviewCount = async (event) => {
        const userReview = await getDoc(doc(db, 'Users', event.target.dataset.username))
        const children = event.target.parentElement.children
        
        for (const child of children) {
            child.classList.remove('active-button')
        }
        event.target.classList.add('active-button')

        console.log('USER DAT', userReview.data(), event.target, event.target.dataset.username, event.target.innerText)
        
        if (event.target.innerText === 'Yes') await updateDoc(doc(db, 'Users', event.target.dataset.username), {
            count: userReview.data().count + 1
        })
        else await updateDoc(doc(db, 'Users', event.target.dataset.username), {
            count: userReview.data().count === 0 ? 0 : userReview.data().count - 1
        })
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
                        <div>
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
            </div>
            <div className='user-review'>
                <div className='user-heading'>
                    <div>
                        <button>Install Steam</button>
                        <button>Play Now</button>
                    </div>
                    
                </div>
                {reviewPost === false ? <div className='user-text'>
                    <h4>Write a review for {singleGameData.singleGame[0].name}</h4>
                    <h6>Please describe what you liked or disliked about this game and whether you recommend it to others.</h6>
                    <h6>Please remember to be polite and follow the <span>Rules and Guidelines</span>.</h6>
                </div> : <h2>Thank you for the Reivew!</h2>}
                {reviewPost === false ? <div className='user-area'>
                    <img src='https://avatars.akamai.steamstatic.com/beabee59066833a6c7a11694b29a9b2b76be4ff3_full.jpg' alt='Avatar icon' />
                    <div>
                        <textarea ref={textField}  rows='15' cols='100'></textarea>
                        <div className='user-footer'>
                            <div>
                                <p>Do you recommend this game?</p>
                                <div className='user-btns'>
                                    <button onClick={setGameRecommended}>
                                        <ThumbUpAltSharp />
                                        Yes
                                    </button>
                                    <button onClick={setGameRecommended}>
                                        <ThumbDownAltSharp />
                                        No
                                    </button>
                                </div>
                            </div>
                            <button onClick={submitUserReview} className='user-submit'>Post review</button>
                        </div>
                    </div>
                </div> : null}
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
                        <p dangerouslySetInnerHTML={{__html: singleGameData.singleGame[0].about_the_game}} />
                    </div>
                </div>
                <div className='reviews-steam'>
                    <p className='review-heading'>CUSTOMER REVIEWS</p>
                    <div className='review-block'>
                        <div className='left-grid'>
                            <p className='review-heading'>MOST HELPFUL REVIEWS</p>
                            <div className='review-card'>
                                {reviews.length !== 0 ?
                                    reviews.map((review, index) => (
                                        <div key={index}>
                                            {review.recommended !== undefined ? 
                                            <div className='main-review' >
                                                <div className='avatar'>
                                                    <Avatar style={{ background: review.color }} variant='square'>{review.username.substring(0, 1).toUpperCase()}</Avatar>
                                                    <span>{`${review.username.substring(0, 1).toUpperCase()}${review.username.slice(1)}`}</span>
                                                </div>
                                                <div className='review-info'>
                                                    <div className='top-review'>
                                                        {review.recommended === true ? <ThumbUpAltSharp />
                                                        : <ThumbDownAltSharp  style={{background: 'rgba(255, 0, 0, 0.3)', color: 'red'}} />
                                                        }
                                                        <p>{review.recommended === true ? 'Recommended' : 'Not Recommended'}</p>
                                                    </div>
                                                    <div className='middle-review'>
                                                        <p>POSTED: <span>{review.date}</span></p>
                                                        <p>{review.review}</p>
                                                    </div>
                                                    <div className='bottom-review'>
                                                        <p>Was this review helpful?</p>
                                                        <div>
                                                            <Button onClick={getReviewCount} data-username={review.username} className='review-btn'><ThumbUpAltSharp /> Yes</Button>
                                                            <Button onClick={getReviewCount} data-username={review.username} className='review-btn'><ThumbDownAltSharp /> No</Button>
                                                        </div>
                                                        <p>{review.count} people found this review helpful</p>
                                                    </div>
                                                </div>
                                            </div>
                                            : null}
                                        </div>
                                    )) : <h2>No Reviews</h2>
                                }
                            </div>
                        </div>
                        <div className='right-grid'>
                            <p className='review-heading'>RECENTLY POSTED</p>
                            {reviews.length !== 0 && mount.length !== 0 ? 
                                reviews.map((review, index) => (
                                    
                                    <div key={index}>
                                        {review.date === new Date().toLocaleString('default', { month: 'long', day: 'numeric' }) ?
                                            <div className='main-background'>
                                                <div className='side-review'>
                                                    <ThumbUpAltSharp />
                                                    <p>{`${review.username.substring(0, 1).toUpperCase()}${review.username.slice(1)}`}</p>
                                                </div>
                                                <div className='middle-side-review'>
                                                    <p>POSTED: <span>{review.date}</span></p>
                                                    <p>{review.review}</p>
                                                </div>
                                                <div className='bottom-side-review'>
                                                    <p>Helpful?</p>
                                                    <div>
                                                        <Button><ThumbUpAltSharp /> Yes</Button>
                                                        <Button><ThumbDownAltSharp /> No</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        : null}
                                    </div>
                                )) : <h2>No recent review</h2>
                            }
                        </div>
                    </div>
                </div>
            </div>    
        </div>
        : null
    )
}

export default GamePage