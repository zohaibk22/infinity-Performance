import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/shared/Header/Header";
import Main from "./Components/shared/Main/Main";
import { Route, Link } from "react-router-dom";

import { verifyUser } from "./Services/auth";
import { readAllVehicles } from "./Services/vehicle";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    handleVerify(); //checking to see whenever the page loads, if we have a auth token so that we can stay logged in
  }, []); //reason why this is called in useEffect because useEffect runs whenever the component is mounted or rerender

  const handleVerify = async () => {
    const userData = await verifyUser(); //resetting the data we got back from our auth token, which is all the user credentials, back into setUserData
    setCurrentUser(userData);
  };

  return (
    <>
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Main setCurrentUser={setCurrentUser} />
    </>
  );
}

export default App;
