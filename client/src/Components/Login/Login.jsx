import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {loginUser} from "../../Services/auth"
import "./Login.css"

export default function Login(props) {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = await loginUser(formData); //since we need to use this response from our DB, we need to add await
        props.setCurrentUser(userData);
        props.history.push('/vehicles')
    }

    return (
        <div className='main-login-div'>
            <h3 className = 'signin-title'>Sign In</h3>
            <form onSubmit={handleSubmit} className = 'login-form'>
                <label className='username-login'>Username:</label>
                <input 
                    className = "username-input"
                    type="text" 
                    name='username' 
                    value={formData.username} 
                    onChange = {handleChange}
                /> 

                <label className='password-login'>Password:</label> 
                <input 
                     className = "password-input"
                    type="password" 
                    name="password" 
                    value = {formData.password} 
                    onChange = {handleChange}
                />

                <button className='login-bttn bttn-combo'>Submit</button> 
                <button className = 'register-bttn bttn-combo' onClick={()=>{props.history.push('/register')}}>Register</button>

                {/* <Link to='/register'>Register for account </Link> */}

                
            </form>
            
        </div>
    )
}
