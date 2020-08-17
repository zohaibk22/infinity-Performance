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
        // console.log(oneCar.modifications[0].name)
    }

    
    // let modificationsRender;
    // if(readOne) {
    //     modificationsRender = readOne.modifications.map((element, i)=> {
    //     return <div>{element[0].name}</div>;
    //     })
    // }

    console.log(readOne)

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
                <h2>Modifications</h2>

                    
                {/* {readOne && readOne.modifications.map((element,i) => (
                    <div>
                        <p>{element[0].brand_name}</p>
                    </div>
                    ))} */}
                
            </div>
            
        </div>
    )
}
