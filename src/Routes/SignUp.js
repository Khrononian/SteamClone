import React, { useContext, useEffect, useRef, useState } from 'react'
import Nav from '../Nav'
import { Context } from '../ContextData'
import { useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { initializeApp } from 'firebase/app'
import { getFirestore, setDoc, doc } from 'firebase/firestore'
import '../signup.css'

const SignUp = () => {
    const [checked, setChecked] = useState(false)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        document.body.style.backgroundColor = '#212429'
        document.body.style.backgroundImage = `url('https://store.cloudflare.steamstatic.com/public/shared/images/joinsteam/acct_creation_bg.jpg')`
        document.body.style.backgroundRepeat = 'no-repeat'
        console.log('Body', document, document.html, document.body)
        return () => {
            document.body.style.background = 'linear-gradient(to right bottom, rgb(31, 61, 78), rgb(21, 38, 49))'
        }
    }, [])

    const changeStatus = () => {
        setChecked(prev => !prev)
    }

    const loggedData = useContext(Context)
    const app = initializeApp(loggedData.firebaseConfig)
    const db = getFirestore(app)
    const auth = getAuth(app);
    const email = useRef()
    const navigate = useNavigate()

    const createNewAccount = () => {
        if (!checked) {
            setVisible(prev => !prev)
            return
        }
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
                <div className='signup-form'>
                    {visible === true ? <div className='alert'>
                        <p>You must agree to the Steam Subscriber Agreement to continue.</p>
                    </div> : null}
                    <h1 className='signup-heading'>CREATE YOUR ACCOUNT</h1>
                    <div className='first-box signup-box'>
                        <label>Username</label>
                        <input ref={email} type='text'/>
                    </div>
                    <div className='middle-box signup-box'>
                        <label>Password</label>
                        <input type='password' placeholder='Any password works'/>
                    </div>
                    <div className='last-box signup-box'>
                        <input onClick={changeStatus} type='checkbox' />
                        <p>I am 13 years of age or older and agree to the terms of the <span>Steam Subscriber Agreement</span> and the <span>Valve Privacy Policy</span></p>
                    </div>
                    <button className='signup-btn' onClick={createNewAccount}>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default SignUp