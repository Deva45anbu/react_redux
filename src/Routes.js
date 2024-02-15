import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import { PageNotFound } from "./Components/Errors";
import Footer from "./Components/Footer";
import { HomePage } from "./Components/HomePage";

const RouteData=()=>{
    return(
        <Routes>
            <Route path="/" Component={HomePage}></Route>
            <Route exact path="/header" Component={Header}></Route>
            <Route path="/pagenotfound" Component={PageNotFound}></Route>
            <Route path="/footer"  Component={Footer}></Route>
        </Routes>
    )
}

export default RouteData;