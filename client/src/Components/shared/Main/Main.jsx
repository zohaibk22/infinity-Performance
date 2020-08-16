import React from 'react'
import {Route, Link} from "react-router-dom"


import Login from "../../Login/Login"
import Intro from '../../Intro/Intro'
import Home from '../../Home/Home'
import Register from '../../Register/Register'

export default function Main(props) {
    const { setCurrentUser } = props;
    return (
        <main>
            <Route path='/' exact render={(props)=> (
                <Intro />
            )}/>

            <Route path='/home' exact render={(props)=> (
                <Home />
            )}/>
            
            
            <Route path = '/login' render = {(props) => ( //props within this paremeter field are react-router props
                <Login
                {...props} //add all react router props into login
                setCurrentUser={setCurrentUser}
                />
            )}

            />

            <Route path='/register' render={(props) => (
                <Register
                    
                />

            )}
            />
            
        </main>
    )
}
