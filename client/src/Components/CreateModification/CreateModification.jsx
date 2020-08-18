import React, {useState} from 'react'
import {createNewModification} from "../../Services/modification"

export default function CreateModification(props) {

    const [modData, setModData] = useState({
        name: '',
        brand_name: '',
        mod_type: true,
        performance_gain: null,
        cost: null,
    })

    const handleChange = (e) => {
        
        const {name, value} = e.target;
        setModData({
            ...modData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newModification = await createNewModification(modData)
        props.setModificationData([
            ...props.modificationData,
            newModification
        ] )
        props.history.push('/vehicles')
        

    }



    
    return (
        <div>
            <h3>Add Mod</h3>

            <form onSubmit ={handleSubmit}>
                <label>Name:</label>
                <input 
                    type='text' 
                    name="name"
                    value={modData.name}
                    onChange={handleChange}
                />

                <label>Brand Name:</label>
                <input
                    type='text'
                    name="brand_name"
                    value={modData.brand_name} 
                    onChange={handleChange}
                />
                    {/* Will be part of version 2 */}
                {/* <label>Modification Type:</label>
                <input
                    type = 'radio'
                    name="performance modification"
                    value={modData.mod_type} 
                />Performance Modification 

                <input
                    type = 'radio'
                    name="visual modification"
                    value={modData.mod_type} 
                />Visual Modification  */}

                <label>Performance Gain:</label>
                <input 
                    type='text'
                    name="performance_gain"
                    value={modData.performance_gain}
                    onChange={handleChange}
                />

                <label>Cost: </label>
                <input
                    type='text'
                    name="cost"
                    value={modData.cost}
                    onChange={handleChange}
                    />

                    <button>Create</button>

            </form>
            
        </div>
    )
}
