import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import './categories.css'

const Categories = () => {
  return (
    <div className='category'>
        <h4>BROWSER BY CATEGORY</h4>
        <div className='grid'>
            <Link>
                <img alt='City & Settlement' src='https://store.steampowered.com/categories/homepageimage/category/horror?cc=us&l=english' />
                <div className='name'>HORROR</div>
            </Link>
            <Link>
                <img alt='City & Settlement' src='https://store.steampowered.com/categories/homepageimage/category/action?cc=us&l=english' />
                <div className='name'>ACTION</div>
            </Link>
            <Link>
                <img alt='City & Settlement' src='https://store.steampowered.com/categories/homepageimage/category/rogue_like_rogue_lite?cc=us&l=english' />
                <div className='name'>FREE TO PLAY</div>
            </Link><Link>
                <img alt='City & Settlement' src='https://store.steampowered.com/categories/homepageimage/greatondeck?cc=us&l=english' />
                <div className='name'>ADVENTURE</div>
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
    </div>
  )
}

export default Categories