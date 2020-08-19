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
            <h2 className='signin-title'>Create a New Vehicle</h2>

            <form className='edit-form create-form' onSubmit ={handleSubmit}>
                < div className='form-flex'>

                <div className='flex-item'>
                <label className ='label-edit'>Vehicle Type: </label>
                <input 
                className ='input-edit'
                    type="text" 
                    name='vehicle_type'
                    value={vehicleData.vehicle_type}
                    onChange = {handleChange}
                    />

                </div>


                <div className='flex-item'>
                <label className ='label-edit'>Make: </label>
                <input 
                className ='input-edit'
                    type="text" 
                    name='make'
                    value={vehicleData.make}
                    onChange = {handleChange}
                />
                </div>


                <div className='flex-item'>
                <label className ='label-edit'>Model: </label>
                <input 
                className ='input-edit'
                    type="text" 
                    name='model'
                    value={vehicleData.model}
                    onChange = {handleChange}
                />
                </div>


                <div className='flex-item'>
                <label className ='label-edit'>Year: </label>
                <input
                className ='input-edit' 
                    type="text" 
                    name='year'
                    value={vehicleData.year}
                    onChange = {handleChange}
                />
                </div>


                <div className='flex-item'>
                <label className ='label-edit'>Engine Type: </label>
                <input 
                className ='input-edit'
                    type="text" 
                    name='engine_type'
                    value={vehicleData.engine_type}
                    onChange = {handleChange}
                />
                </div>


                <div className='flex-item'>
                <label className ='label-edit'>Description: </label>
                <input 
                className ='input-edit'
                    type="text" 
                    name='description'
                    value={vehicleData.description}
                    onChange = {handleChange}
                />
                </div>


                <div className='flex-item'>
                <label className ='label-edit'>Color: </label>
                <input 
                className ='input-edit'
                    type="text" 
                    name='color'
                    value={vehicleData.color}
                    onChange = {handleChange}

                />

                </div>


                <div className='flex-item'>
                <label className ='label-edit'>Image: </label>
                <input 
                className ='input-edit'
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
