import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <h1>Infinity Auto</h1>
            <Link to="/login">Login</Link>
            
        </div>
    )
}
