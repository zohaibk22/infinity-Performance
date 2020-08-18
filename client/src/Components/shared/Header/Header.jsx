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
        <div className ='main-header-container'>
            <Link to='/vehicles'><h1 className="logo alignment">INFINITY <span className='half-name'>AUTO</span></h1></Link>
            

            <ul className ='header-options alignment'>
                <li className = "list-item alignment">Our Story</li>
                <li className = "list-item alignment">Previous Builds</li>
                <li className = "list-item alignment">Contact Us</li>
            </ul>
            

            {props.currentUser !==null ? 
                <>
                 <p className = 'username alignment'>{props.currentUser.username}</p>
                 <button className = "logout alignment" onClick={handleLogout}>Logout</button>
                </>
            
            : <Link className = 'login alignment' to="/login">Login</Link>
            }
            
        </div>
    )
}

export default withRouter(Header)
