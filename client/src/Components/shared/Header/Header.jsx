import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

export default function Header(props) {
    return (
        <div>
            <h1>Infinity Auto</h1>
            

            {props.currentUser !==null ? 
                <>
                 <p1>{props.currentUser.username}</p1>
                 <button>Logout</button>
                </>
            
            : <Link to="/login">Login</Link>
            }
            
        </div>
    )
}
