import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {registerUser} from "../../Services/auth"
import './Register.css'

export default function Login(props) {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
        // confirmPassword: ''
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
        const userData = await registerUser(formData); //since we need to use this response from our DB, we need to add await
        props.setCurrentUser(userData);
        props.history.push('/vehicles')
    }

    return (
        <div className ='main-login-div'>
            <h3 className ='signin-title'>Register</h3>
            <form className='register-form 'onSubmit={handleSubmit}>
                <label className="email-label-register">Email:</label>
                <input 
                    className="email-input-register"
                    type="text" 
                    name='email' 
                    value={formData.emailAddress} 
                    onChange = {handleChange}
                /> 

                <label className="username-label-register">Username:</label>
                <input 
                    className="username-input-register"
                    type="text" 
                    name='username' 
                    value={formData.username} 
                    onChange = {handleChange}
                /> 

                <label className="password-label-register">Password:</label> 
                <input 
                    className="password-input-register"
                    type="password" 
                    name="password" 
                    value = {formData.password} 
                    onChange = {handleChange}
                />

                {/* <label>Password:</label> 
                <input 
                    type="password" 
                    name="confirmPassword" 
                    value ={formData.confirmPassword}
                    onChange = {handleChange}
                /> */}


                <button className ='bttn-combo-reg reg-bttn'>Register</button> 
                <button className ='bttn-combo-reg log-bttn'onClick={()=>{props.history.push('login')}}>Login</button> 

                
            </form>

    

            
        </div>
    )
}