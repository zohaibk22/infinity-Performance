import React, {useState, useEffect} from 'react'
import { readOneVehicle, deleteVehicle } from '../../Services/vehicle'
import "./OneVehicle.css"

export default function OneVehicle(props) {

    const [readOne, setReadOne] = useState([])

    useEffect(()=> {
        getOneVehicle()
    }, [])

    const getOneVehicle = async () => {
        const oneCar = await readOneVehicle(props.match.params.id)
        setReadOne(oneCar)
        // console.log(oneCar.modifications[0].name)
    }

    

    const handleDelete = async (id) => {
        await deleteVehicle(props.match.params.id)
        props.setShowAllVehicleData(props.showAllVehicleData.filter((eachVehicle)=> {
            return parseInt(props.match.params.id) !== eachVehicle.id 
        }))
        props.history.push('/vehicles')

    }

    console.log(readOne)

    return (
        <div className='main-one-div'>


            <h1 className ='signin-title'>Project Details</h1>
            <button className = 'bttn-combo delete-bttn' onClick = {()=> handleDelete(readOne.id)}>Delete Project</button>

            <div className='flex-div'>

            <div className = 'vehicle-details combo-div'>
                <h2 className = 'combo-title veh-title'>Vehicle Details</h2>

            { readOne && (
                <div>
                    <div className ='vehicle-flex'>

                    <div className ='vehicle-item'>
                    <h3 className='category'>Vehicle Type:</h3>    
                    <p className='info'>{readOne.vehicle_type} </p>
                    </div>

                    <div className ='vehicle-item'>
                    <h3 className='category'>Model:</h3> 
                    <p className='info'>{readOne.make} {readOne.model}</p>
                    </div>

                    <div className ='vehicle-item'>
                    <h4 className='category'>Year:</h4> 
                    <p className='info'>{readOne.year}</p>
                    </div>
                    
                    <div className ='vehicle-item'>
                    <h4 className='category'>Engine Type:</h4>    
                    <p className='info'>{readOne.engine_type}</p>
                    </div>

                    <div className ='vehicle-item'>
                    <h4 className='category'>Description:</h4> 
                    <p className='info'>{readOne.description}</p>
                    </div>

                    <div className ='vehicle-item'>
                     <h4 className='category'>Color</h4> 
                     <p className='info'>{readOne.color}</p>
                    </div>

                    </div>
                    <img className='vehicle-image' src={readOne.image}/>

                </div>
            ) 

            }

             <button className='bttn-combo edit-car-bttn' onClick ={()=> (props.history.push(`/vehicles/edit/${props.match.params.id}`))}>Edit</button>
            </div>


            
            <div className='modification-details combo-div'>
                <h2 className = 'combo-title mod-title'>Modifications</h2>

                <div className="vehicle-flex">

                    
                {readOne.modifications && readOne.modifications.map((element, i) => (
                    <div>
                    <div className ='vehicle-item'>
                        <h3 className ='category'>Modification {i+1} </h3>
                        <p className='info'><strong>Name:</strong> {element.name}</p>
                        <p className='info'><strong>Brand Name:</strong>  {element.brand_name}</p>
                    </div>
                    </div>

                    ))}

                    </div>

                    <button className='bttn-combo add-mod' onClick={()=> {props.history.push(`/modifications/${props.match.params.id}/new`)}}>Add Mod</button>
                    <button className="bttn-combo delete-mod">Delete Mod </button>
                
            </div>
            </div>
            
        </div>
    )
}
