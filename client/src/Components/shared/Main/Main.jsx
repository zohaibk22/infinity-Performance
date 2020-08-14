import React from 'react'
import {Route, Link} from "react-router-dom"
import Login from '../../Login/Login'
import Home from '../../Home/Home'

export default function Main() {
    return (
        <main>
            <Route path='/' exact render={(props)=> (
                <Home />
            )}/>
            <Route path = '/login'render = {(props) => ( //props within this paremeter field are react-router props
                <Login
                {...props} //add all react router props into login
                />
            )}
            />
            
        </main>
    )
}
