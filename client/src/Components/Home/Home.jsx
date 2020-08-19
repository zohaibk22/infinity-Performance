import React from 'react'
import './Home.css'

export default function Home(props) {



    return (
        <div className='main-home-div'>
            <h1 className='title'>All Project</h1>

            <div className='vehicle-list'>

            {props.showAllVehicleData.map((element, i) => (
                <div className="vehicle-div" onClick = {()=> ( props.history.push(`/vehicles/${element.id}`))}>

                    <h2>Project {i+1}</h2>

                    <h3>{element.make} {element.model}</h3>
                    <p>{element.description}</p>

                </div>
            ))}

            </div>
            <button className='add-project-bttn' onClick = {()=> (props.history.push('new/vehicles/'))}>Add Project +</button>
        </div>
    )
}
