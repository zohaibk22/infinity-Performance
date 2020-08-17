import React, {useState,useEffect} from 'react'
import {Route, Link} from "react-router-dom"


import Login from "../../Login/Login"
import Intro from '../../Intro/Intro'
import Home from '../../Home/Home'
import Register from '../../Register/Register'
import OneVehicle from '../../OneVehicle/OneVehicle'
import NewVehicle from '../../NewVehicle/NewVehicle'



import {readAllVehicles} from '../../../Services/vehicle'



export default function Main(props) {

    const [showAllVehicleData, setShowAllVehicleData] = useState([]);
    const { setCurrentUser } = props;

    useEffect(()=>{
        getAllVehicles()

    }, [])


    const getAllVehicles = async () => {
        const vehicleData = await readAllVehicles()
        setShowAllVehicleData(vehicleData)
        
  };
    return (
        <main>
            <Route path='/' exact render={(props)=> (
                <Intro />
            )}/>

            <Route path='/vehicles' exact render={(props)=> (
                <Home 
                
                {...props}
                showAllVehicleData = {showAllVehicleData}
                setShowAllVehicleData = {setShowAllVehicleData}
                />

            )}/>
            
            
            <Route path = '/login' exact render = {(props) => ( //props within this paremeter field are react-router props
                <Login
                {...props} //add all react router props into login
                setCurrentUser={setCurrentUser}
                />
            )}

            />

            <Route path='/register' exact render={(props) => (
                <Register
                    {...props} //add all react router props into login
                setCurrentUser={setCurrentUser}
                />

            )}
            />
            

            <Route path='/vehicles/:id'  exact render={(props) => (
                <OneVehicle 
                 {...props}
                 showAllVehicleData = {showAllVehicleData}
                 setShowAllVehicleData = {setShowAllVehicleData}
                 />
            )}
            />

            <Route path='/vehicles/new' exact render={(props) => (
                <NewVehicle
                
                {...props}
            
                showAllVehicleData = {showAllVehicleData}
                setShowAllVehicleData = {setShowAllVehicleData}

                
                
                />
            )}
            
            />

        </main>
    )
}
