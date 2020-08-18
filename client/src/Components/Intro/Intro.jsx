import React from 'react'
import "./Intro.css"

export default function Home(props) {
    return (
        <div className = 'main-intro-div'>

            <p className = 'quote'>Flourish your creativity. Never forget your ideas</p>

            <button className='sign-up' onClick={()=>{props.history.push('./register')}}>SIGN UP</button>

            
        </div>
    )
}
