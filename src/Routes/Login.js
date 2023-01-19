import React from 'react'
import Nav from '../Nav'
import { Button } from '@mui/material'
import './login.css'

const Login = () => {
  return (
    <div>
        <Nav />
        <div className='sign-in'>
            <h1>SIGN IN</h1>
            <div className='sign-form'>
                <div>
                    <div>
                        <p className='colors'>SIGN IN WITH ACCOUNT NAME</p>
                        <input type='text' />
                    </div>
                    <div>
                        <p>PASSWORD</p>
                        <input type='password' />
                    </div>
                    <div>
                        <Button >Sign in</Button>
                        <p>Help, I can't sign in</p>
                    </div>
                </div>
                <div>
                    <p className='colors'>OR SIGN IN WITH QR</p>
                    <img height='200px' width='200px' src='https://imgs.search.brave.com/bJbP48yD8wrUfTKL4gwE3U74riddmbufQ-lwmKN3Qlw/rs:fit:280:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5w/LWNrZUlJTkpMQS1s/cWFWZEhJRWpRQUFB/QSZwaWQ9QXBp' alt='QR Code' />
                    <p>Use the <span>Steam Mobile App</span> to sign<br/> in via QR code</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login