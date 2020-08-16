import React from 'react'
import {Link, withRouter, useHistory} from 'react-router-dom'
import './Header.css'
import {removeToken} from '../../../Services/auth'



 function Header(props) {

    const history = useHistory();

    const handleLogout = async () => {
        props.setCurrentUser(null)
        localStorage.removeItem("authToken") //removing auth token from localStorage
        removeToken()
        history.push('/')
        

    }
    return (
        <div>
            <Link to='/home'><h1>Infinity Auto</h1></Link>
            

            {props.currentUser !==null ? 
                <>
                 <p>{props.currentUser.username}</p>
                 <button onClick={handleLogout}>Logout</button>
                </>
            
            : <Link to="/login">Login</Link>
            }
            
        </div>
    )
}

export default withRouter(Header)
