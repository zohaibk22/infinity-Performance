import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {registerUser} from "../../Services/auth"

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
        <div>
            <h3>Register</h3>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input 
                    type="text" 
                    name='email' 
                    value={formData.emailAddress} 
                    onChange = {handleChange}
                /> 

                <label>Username:</label>
                <input 
                    type="text" 
                    name='username' 
                    value={formData.username} 
                    onChange = {handleChange}
                /> 

                <label>Password:</label> 
                <input 
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


                <button>Register</button> 

                
            </form>
            
        </div>
    )
}