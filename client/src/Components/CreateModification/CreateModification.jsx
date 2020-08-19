import React, {useState} from 'react'
import {createNewModification} from "../../Services/modification"
import './CreateModification.css'

export default function CreateModification(props) {

    const [modData, setModData] = useState({
        name: '',
        brand_name: '',
        mod_type: true,
        performance_gain: 0,
        cost: 0,
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
        const newModification = await createNewModification(props.match.params.id, modData)
        props.setModificationData([
            ...props.modificationData,
            newModification
        ] )
        props.history.push('/vehicles')
        

    }



    
    return (
        <div className='main-login-div'>
            <h3 className = 'signin-title mod-title'>Add Mod</h3>

            <form className = 'create-mod-form' onSubmit ={handleSubmit}>

                <div className='form-flex mod-flex-div'>
                
                <div className='flex-item flex-items'>
                <label className ='label-edit label-edit-mod'>Name:</label>
                <input 
                className ='input-edit input-edit-mod'
                    type='text' 
                    name="name"
                    value={modData.name}
                    onChange={handleChange}
                />
                </div>

                <div className='flex-item flex-items'>
                <label className ='label-edit label-edit-mod'>Brand Name:</label>
                <input
                className ='input-edit input-edit-mod'
                    type='text'
                    name="brand_name"
                    value={modData.brand_name} 
                    onChange={handleChange}
                />
                </div>

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

                <div className='flex-item flex-items'>
                <label className ='label-edit label-edit-mod'>Performance Gain:</label>
                <input 
                className ='input-edit input-edit-mod'
                    type='text'
                    name="performance_gain"
                    value={modData.performance_gain}
                    onChange={handleChange}
                />
                </div>

                <div className='flex-item flex-items'>
                <label className ='label-edit label-edit-mod'>Cost: </label>
                <input
                className ='input-edit input-edit-mod'
                    type='text'
                    name="cost"
                    value={modData.cost}
                    onChange={handleChange}
                    />
                    </div>

                    <button className='bttn-combo mod-bttn'>Create</button>

                </div>
            </form>
            
        </div>
    )
}
