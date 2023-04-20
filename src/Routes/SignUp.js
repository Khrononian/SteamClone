import React, { useContext, useEffect, useRef } from 'react'
import Nav from '../Nav'
import { Context } from '../ContextData'
import { useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"
import { initializeApp } from 'firebase/app'
import { getFirestore, setDoc, doc } from 'firebase/firestore'
import '../signup.css'

const SignUp = () => {
    useEffect(() => {
        document.body.style.backgroundColor = '#212429'
        console.log('Body', document, document.html, document.body)
        return () => {
            document.body.style.background = 'linear-gradient(to right bottom, rgb(31, 61, 78), rgb(21, 38, 49))'
        }
    }, [])
    const loggedData = useContext(Context)
    const app = initializeApp(loggedData.firebaseConfig)
    const db = getFirestore(app)
    const auth = getAuth(app);
    const email = useRef()
    const navigate = useNavigate()

    const createNewAccount = () => {
        createUserWithEmailAndPassword(auth, email.current.value + '@gmail.com', 'password')
            .then(async userCredential => {
                loggedData.userLogData(userCredential)
                console.log('FIRE', userCredential)
                await setDoc(doc(db, 'Users', email.current.value.toLowerCase()), {
                    username: email.current.value,
                    color: loggedData.randomColor()
                })
                navigate('/')
                console.log('States', loggedData.username)
            }).catch(error => console.log(error))
    }

    return (
        <div className='main-signup'>
            <Nav />
            <div className='signup-container'>
                <h1 className='signup-heading'>CREATE YOUR ACCOUNT</h1>
                <div className='signup-form'>
                    <div className='first-box signup-box'>
                        <label>Username</label>
                        <input ref={email} type='text'/>
                    </div>
                    <div className='middle-box signup-box'>
                        <label>Password</label>
                        <input  type='text'/>
                    </div>
                    <div className='last-box signup-box'>
                        <input type='checkbox' />
                        <p>I am 13 years of age or older and agree to the terms of the <span>Steam Subscriber Agreement</span> and the <span>Valve Privacy Policy</span></p>
                    </div>
                    <button className='signup-btn' onClick={createNewAccount}>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default SignUp