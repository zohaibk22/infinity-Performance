import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/shared/Header/Header";
import Main from "./Components/shared/Main/Main";
import { Route, Link } from "react-router-dom";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <>
      <Header currentUser={currentUser} />
      <Main setCurrentUser={setCurrentUser} />
    </>
  );
}

export default App;
