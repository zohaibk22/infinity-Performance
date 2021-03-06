import React, {useState,useEffect} from 'react'
import {Route, Link} from "react-router-dom"
import {readAllVehicles} from '../../../Services/vehicle'

import Login from "../../Login/Login"
import Intro from '../../Intro/Intro'
import Home from '../../Home/Home'
import Register from '../../Register/Register'
import OneVehicle from '../../OneVehicle/OneVehicle'
import NewVehicle from '../../NewVehicle/NewVehicle'
import EditVehicle from '../../EditVehicle/EditVehicle'
import CreateModification from '../../CreateModification/CreateModification'

import './Main.css'




export default function Main(props) {

    const [showAllVehicleData, setShowAllVehicleData] = useState([]);
    const { setCurrentUser,currentUser } = props;

    const [modificationData, setModificationData] = useState([])

    useEffect(()=>{
        if(currentUser){
            getAllVehicles()
        }

    }, [currentUser]) //useEffect will watch this value for changes and then run again once the value changes

    const getAllModifications = async() => {

    }
    const getAllVehicles = async () => {
        const vehicleData = await readAllVehicles()
        setShowAllVehicleData(vehicleData)
        
  };
    return (
        <div className='main-div-container'>

        {  currentUser ?  <main>
            <Route path='/' exact render={(props)=> (
                <Intro
                {...props}

                />
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
            

            <Route path='/vehicles/:id' exact render={(props) => (
                <OneVehicle 
                 {...props}
                 showAllVehicleData = {showAllVehicleData}
                 setShowAllVehicleData = {setShowAllVehicleData}
                 />
            )}
            />

            <Route path='/new/vehicles/' exact render={(props) => (
                <NewVehicle
                
                {...props}
            
                showAllVehicleData = {showAllVehicleData}
                setShowAllVehicleData = {setShowAllVehicleData}

                />
            )}
            
            />

             <Route path='/vehicles/edit/:id' exact render={(props) => (
                <EditVehicle


                
                {...props}

                showAllVehicleData = {showAllVehicleData}
                setShowAllVehicleData = {setShowAllVehicleData}

                />
            )}
            />

            <Route path='/modifications/:id/new' exact render={(props)=> (

                 <CreateModification 
                 
                 {...props}

                 modificationData = {modificationData}
                 setModificationData ={setModificationData}


                 />

            )}

            />

        </main> 
        
        :
            
            
            
            
            <main>

                 <Route path='/' exact render={(props)=> (
                <Intro />
            )}/>

            <Route path='/vehicles' exact render={(props)=> (
               <Login
                {...props} //add all react router props into login
                setCurrentUser={setCurrentUser}
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
            

            <Route path='/vehicles/:id' exact render={(props) => (
                <Login
                {...props} //add all react router props into login
                setCurrentUser={setCurrentUser}
                />
            )}
            />

            <Route path='/vehicles/new' exact render={(props) => (
                <Login
                {...props} //add all react router props into login
                setCurrentUser={setCurrentUser}
                />
            )}
            
            />

             <Route path='/vehicles/edit/:id' exact render={(props) => (
               <Login
                {...props} //add all react router props into login
                setCurrentUser={setCurrentUser}
                />
            )}
            />

             <Route path='/modifications/new' render={(props)=> (

                 <CreateModification 

                 modificationData = {modificationData}
                 setModificationData ={modificationData}


                 />

            )}
            />

           
            </main>


            
            

        }

        </div>

        
    )
}


