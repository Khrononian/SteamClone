import React, { useRef, useEffect, useContext } from 'react'
import Nav from '../Nav'
import Firebase from '../Firebase'
import { Context } from '../ContextData'
import { Button } from '@mui/material'
import { initializeApp } from "firebase/app";
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { getFirestore, collection, doc, setDoc, getDocs } from 'firebase/firestore'
import './login.css'

const Login = ({ status }) => {
    useEffect(() => {
        document.body.style.background = '#212429'
    }, [])
    const loggedData = useContext(Context)
    const location = useLocation();
    const navigate = useNavigate()

    console.log('Log', status, location, loggedData)

    const app = initializeApp(loggedData.firebaseConfig)
    const auth = getAuth(app);
    const email = useRef()

    const signIn = () => {
        console.log('Test', auth, auth.currentUser, email.current.value)
        
        signInWithEmailAndPassword(auth, email.current.value + '@gmail.com', 'password')
        .then(userCredential => {
            loggedData.userLogData(userCredential)
            navigate('/')
        })

        console.log('After', loggedData.username)
    }
    console.log('AFTER AFTER', loggedData.username, auth.currentUser)

    return (
        <div >
            <Nav />
            <div className='sign-in'>
                <h1>SIGN IN</h1>
                <div className='sign-form'>
                    <div>
                        <div>
                            <p className='colors'>SIGN IN WITH ACCOUNT NAME</p>
                            <input ref={email} type='text' />
                        </div>
                        <div>
                            <p>PASSWORD</p>
                            <input type='password' placeholder='Any password works' />
                        </div>
                        <div>
                            <Button onClick={signIn}>Sign in</Button>
                            <p>Help, I can't sign in</p>
                        </div>
                    </div>
                    <div>
                        <p className='colors'>OR SIGN IN WITH QR</p>
                        <img src='https://imgs.search.brave.com/bJbP48yD8wrUfTKL4gwE3U74riddmbufQ-lwmKN3Qlw/rs:fit:280:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5w/LWNrZUlJTkpMQS1s/cWFWZEhJRWpRQUFB/QSZwaWQ9QXBp' alt='QR Code' />
                        <p>Use the <span>Steam Mobile App</span> to sign<br/> in via QR code</p>
                    </div>
                </div>
            </div>
            <footer>
                <div>
                    <Link to='/signup'><button >Join Steam</button></Link>
                    <p>It's free and easy to use.</p>
                </div>
            </footer>
        </div>
    )
}

export default Login