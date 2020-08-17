import React from 'react'
import './Home.css'

export default function Home(props) {



    return (
        <div>
            <h1>All Project</h1>

            {props.showAllVehicleData.map((element) => (
                <div className="vehicle-div" onClick = {()=> ( props.history.push(`/vehicles/${element.id}`))}>

                    <h3>Vehicle: {element.make} {element.model}</h3>
                    <p>{element.description}</p>

                </div>
            ))}
            <button onClick = {()=> (props.history.push('/vehicles/new'))}>Add Project +</button>
        </div>
    )
}
