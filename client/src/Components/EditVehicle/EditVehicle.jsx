import React, {useState, useEffect} from 'react'
import {updateVehicle, readOneVehicle} from '../../Services/vehicle'

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

    // const setData = async(id) => {
    //     const getVehicleData = await readOneVehicle(parseInt(props.match.params.id))
    //     setVehicleData({
    //     vehicle_type: getVehicleData.vehicle_type,
    //     make: getVehicleData.make,
    //     model: getVehicleData.model,
    //     year: getVehicleData.year,
    //     engine_type: getVehicleData.engine_type,
    //     description: getVehicleData.description,
    //     color: getVehicleData.color,
    //     image: getVehicleData.image,
    //     })

    // }

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
        <div>
            <h2>Edit</h2>

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

                <button>Update</button>
            </form>
            
        </div>
    )
}
