import React, {useState} from 'react'
import { createNewVehicle } from '../../Services/vehicle';
import "./NewVehicle.css"

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
        <div className='main-login-div'>
            <h2 className='signin-title new-veh'>Create a New Vehicle</h2>

            <form className='create-form' onSubmit ={handleSubmit}>
                < div className='form-flex'>

                <div className=' item-flex'>
                <label className =' edit-label'>Vehicle Type: </label>
                <input 
                className ='edit-input'
                    type="text" 
                    name='vehicle_type'
                    value={vehicleData.vehicle_type}
                    onChange = {handleChange}
                    />

                </div>


                <div className='item-flex'>
                <label className ='edit-label'>Make: </label>
                <input 
                className ='edit-input'
                    type="text" 
                    name='make'
                    value={vehicleData.make}
                    onChange = {handleChange}
                />
                </div>


                <div className='item-flex'>
                <label className ='edit-label'>Model: </label>
                <input 
                className ='edit-input'
                    type="text" 
                    name='model'
                    value={vehicleData.model}
                    onChange = {handleChange}
                />
                </div>


                <div className='item-flex'>
                <label className ='edit-label'>Year: </label>
                <input
                className ='edit-input' 
                    type="text" 
                    name='year'
                    value={vehicleData.year}
                    onChange = {handleChange}
                />
                </div>


                <div className='item-flex'>
                <label className ='edit-label'>Engine Type: </label>
                <input 
                className ='edit-input'
                    type="text" 
                    name='engine_type'
                    value={vehicleData.engine_type}
                    onChange = {handleChange}
                />
                </div>


                <div className='item-flex'>
                <label className ='edit-label'>Description: </label>
                <input 
                className ='edit-input'
                    type="text" 
                    name='description'
                    value={vehicleData.description}
                    onChange = {handleChange}
                />
                </div>


                <div className='item-flex'>
                <label className ='edit-label'>Color: </label>
                <input 
                className ='edit-input'
                    type="text" 
                    name='color'
                    value={vehicleData.color}
                    onChange = {handleChange}

                />

                </div>


                <div className='item-flex'>
                <label className ='edit-label'>Image: </label>
                <input 
                className ='edit-input'
                    type="text" 
                    name='image'
                    value={vehicleData.image}
                    onChange = {handleChange}
                />
                </div>

                </div>

                <button className='bttn-combo update-bttn'>Create</button>
            </form>
            
        </div>
    )
}
