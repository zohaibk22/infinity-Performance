import React from 'react'

export default function Home(props) {



    return (
        <div>
            <h1>All Project</h1>

            {props.showAllVehicleData.map((element) => (
                <div onClick = {()=> ( props.history.push(`/vehicles/${element.id}`))}>

                    <h3>Vehicle: {element.make} {element.model}</h3>

                </div>
            ))}
            <button onClick = {()=> (props.history.push('/vehicles/new'))}>Add Project +</button>
        </div>
    )
}
