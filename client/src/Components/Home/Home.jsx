import React from 'react'
import './Home.css'

export default function Home(props) {



    return (
        <div className='main-login-div'>
            <h1 className='signin-title'>All Project</h1>

            <div className='vehicle-list'>

            {props.showAllVehicleData.map((element, i) => (
                <div className="vehicle-div" onClick = {()=> ( props.history.push(`/vehicles/${element.id}`))}>

                    <h2 className='combo-title proj-title' >Project {i+1}</h2>


                    <h3 className = 'car-name'>{element.make} {element.model}</h3>
                    <p className = 'car-info'>{element.description}</p>

                </div>
            ))}

            </div>
            <button className='bttn-combo add-project-bttn' onClick = {()=> (props.history.push('new/vehicles/'))}>Add Project +</button>
        </div>
    )
}
