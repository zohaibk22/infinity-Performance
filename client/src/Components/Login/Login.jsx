import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {loginUser} from "../../Services/api-helper"

export default function Login(props) {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    let handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        const userResponse = await loginUser(formData);//since we need to use this response from our DB, we need to add await


    }

    return (
        <div>
            <h3>Login</h3>
            <form>
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

                <button>Submit</button> 

                
            </form>
            
        </div>
    )
}
