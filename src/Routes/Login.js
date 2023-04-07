import React, { useState, useRef, useEffect, useContext } from 'react'
import Nav from '../Nav'
import Firebase from '../Firebase'
import { Context } from '../ContextData'
import { Button } from '@mui/material'
import { initializeApp } from "firebase/app";
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import './login.css'

const Login = ({ status }) => {
    const loggedData = useContext(Context)
    const location = useLocation();
    const navigate = useNavigate()

    console.log('Log', status, location, loggedData)
    const firebaseConfig = {
        apiKey: "AIzaSyBCRdufWIqxKTPz_J7p1Zb05Ha9ssj5n3Y",
        authDomain: "steam-clone-ba33d.firebaseapp.com",
        projectId: "steam-clone-ba33d",
        storageBucket: "steam-clone-ba33d.appspot.com",
        messagingSenderId: "65364662879",
        appId: "1:65364662879:web:6bed306f967850ed7e99ea",
        measurementId: "G-JP8R3ZYNDC"
    };
    const email = useRef()
    const password = 'testingtester'
    
    const app = initializeApp(firebaseConfig, 'Secondary')
    const auth = getAuth(app);

    const signIn = (e) => {
        console.log('Test', auth.currentUser, email.current.value)
        
        const userLogData = (userCredential) => {
            const user = userCredential.user.email
            console.log('User', userCredential.user, userCredential.user.email.substring(0, userCredential.user.email.lastIndexOf('@')))

            loggedData.setUsername(user.substring(0, user.lastIndexOf('@')))
            loggedData.setLog(prevLog => !prevLog)
            navigate('/')
        }
        console.log('AUTH', auth.currentUser, auth.currentUser.email)
        !auth.currentUser.email || auth.currentUser.email !== email.current.value ? createUserWithEmailAndPassword(auth, email.current.value + '@gmail.com', password)
        .then(userCredential => {
            userLogData(userCredential)

            console.log('States', loggedData.username)
        }).catch(error => {
            console.log(error)
            // if (error.code === 'auth/email-already-in-use') {
            //     signInWithEmailAndPassword(auth, email.current.value + '@gmail.com', password)
            //     .then(userCredential => {
            //     userLogData(userCredential)
            //     })
            // }
        }) : signInWithEmailAndPassword(auth, email.current.value + '@gmail.com', password)
        .then(userCredential => {
            userLogData(userCredential)

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
                            <input type='password' />
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
        </div>
    )
}

export default Login