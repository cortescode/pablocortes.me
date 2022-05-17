import React from "react";
import { Route, Routes } from 'react-router-dom';

import LogoBanner from "../components/menu/logoBanner.jsx";
import Home from "../Home/";
import Portfolio from "../Portfolio";
import Blog from "../Blog";
import FloatingMenu from "../components/menu/floatingMenu.jsx"
import "./App.css";

function App() {
    return (
        <div>
            <LogoBanner></LogoBanner>
            <FloatingMenu></FloatingMenu>
            <Routes>
                <Route exact path="" element={ <Home/> }/>
                <Route exact path="/" element={ <Home/> }/>
                <Route exact path="/portfolio" element={ <Portfolio/> }/>
                <Route exact path="/Blog" element={ <Blog/> }/>
            </Routes>
        </div>
    );
}

export default App;