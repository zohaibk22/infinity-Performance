import React, {useState} from 'react'
import { createNewVehicle } from '../../Services/vehicle';

export default function NewVehicle(props) {
    const [vehicleData, setVehicleData] = useState({
        vehicle_type: '',
        make: '',
        model: '',
        year: null,
        engine_type: '',
        description: '',
        color: '',
        image: '',

    })

    const handleChange = (e) => {
        
        const {name, value} = e.target;
        setVehicleData({
            ...vehicleData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newVehicle = await createNewVehicle(vehicleData)
        props.setShowAllVehicleData([
            ...props.showAllVehicleData,
            newVehicle
        ] )
        props.history.push('/vehicles')
        

    }


    return (
        <div>
            <h2>Create a New Vehicle</h2>

            <form onSubmit ={handleSubmit}>
                <label>Vehicle Type: </label>
                <input 
                    type="text" 
                    name='vehicle_type'
                    value={vehicleData.vehicle_type}
                    onChange = {handleChange}
                    />

                <label>Make: </label>
                <input 
                    type="text" 
                    name='make'
                    value={vehicleData.make}
                    onChange = {handleChange}
                />

                <label>Model: </label>
                <input 
                    type="text" 
                    name='model'
                    value={vehicleData.model}
                    onChange = {handleChange}
                />

                <label>Year: </label>
                <input 
                    type="text" 
                    name='year'
                    value={vehicleData.year}
                    onChange = {handleChange}
                />

                <label>Engine Type: </label>
                <input 
                    type="text" 
                    name='engine_type'
                    value={vehicleData.engine_type}
                    onChange = {handleChange}
                />

                <label>Description: </label>
                <input 
                    type="text" 
                    name='description'
                    value={vehicleData.description}
                    onChange = {handleChange}
                />

                <label>Color: </label>
                <input 
                    type="text" 
                    name='color'
                    value={vehicleData.color}
                    onChange = {handleChange}

                />

                <label>Image: </label>
                <input 
                    type="text" 
                    name='image'
                    value={vehicleData.image}
                    onChange = {handleChange}
                />

                <button>Create</button>
            </form>
            
        </div>
    )
}
