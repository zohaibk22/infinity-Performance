import React, {useState, useEffect} from 'react'
import { readOneVehicle } from '../../Services/vehicle'

export default function OneVehicle(props) {

    const [readOne, setReadOne] = useState([])

    useEffect(()=> {
        getOneVehicle()
    }, [])

    const getOneVehicle = async () => {
        const oneCar = await readOneVehicle(props.match.params.id)
        setReadOne(oneCar)
    }
    return (
        <div>
            <div>
            { readOne && (
                <div>
                <h1>{readOne.make} {readOne.model}</h1>
                <p>{readOne.year}</p>
                <p>{readOne.engine_type}</p>
                <p>{readOne.description}</p>
                <p>{readOne.color}</p>
                <img src={readOne.image}/>


                </div>
            ) 

            }
            </div>

            <button>Edit</button>
            <button>Delete</button>
            
            <div>
                <h1>Modifications</h1>
                {readOne.modifications.map((element) => (
                    <p>{element[0].brand_name}</p>
                ))}
            </div>
            
        </div>
    )
}
