import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/shared/Header/Header";
import Main from "./Components/shared/Main/Main";
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
