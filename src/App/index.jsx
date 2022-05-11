import React from "react";
import { Route, Link, Routes } from 'react-router-dom';

import Menu from "../components/menus/menu.jsx";
import Home from "../Home/";
import Portfolio from "../Portfolio";
import Blog from "../Blog";
import "./App.css";

function App() {
    return (
        <div>
            <Menu></Menu>
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