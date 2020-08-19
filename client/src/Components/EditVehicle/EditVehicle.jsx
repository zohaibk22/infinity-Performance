import React, {useState, useEffect} from 'react'
import {updateVehicle, readOneVehicle} from '../../Services/vehicle'
import './EditVehicle.css'

export default function EditVehicle(props) {
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

    useEffect(()=> {
        setData()

    },[props.showAllVehicleData])

    
    const setData = () => {
        const getVehicleData = props.showAllVehicleData.find((element) => {
            return element.id === parseInt(props.match.params.id)
            
        })
        if(getVehicleData)
            setVehicleData({
            vehicle_type: getVehicleData.vehicle_type,
            make: getVehicleData.make,
            model: getVehicleData.model,
            year: getVehicleData.year,
            engine_type: getVehicleData.engine_type,
            description: getVehicleData.description,
            color: getVehicleData.color,
            image: getVehicleData.image,
        })
    }

    const handleChange = (e) => {
        
        const {name, value} = e.target;
        setVehicleData({
            ...vehicleData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {id} = props.match.params
        const newVehicle = await updateVehicle(id, vehicleData)
        props.setShowAllVehicleData([
            ...props.showAllVehicleData.map((vehicle) =>{
                return vehicle.id === parseInt(id) ? newVehicle: vehicle
            })
        ] )
        props.history.push('/vehicles')
        

    }


    return (
        <div className='main-login-div'>
            <h2 className='signin-title'>Edit Vehicle</h2>

            <form className='edit-form'onSubmit ={handleSubmit}>
                <div className='form-flex'>
                
                
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
                <button className='bttn-combo update-bttn'>Update</button>
            </form>
            
        </div>
    )
}
