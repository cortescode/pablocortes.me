import React from "react";
import { Route, Link, Routes } from 'react-router-dom';

import Menu from "./components/menus/menu.jsx";
import Home from "./Home.jsx";
import Portfolio from "./Portfolio.jsx";
import Blog from "./Blog.jsx";
import Contact from "./Contact.jsx";
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
                <Route exact path="/Contact" element={ <Contact/> }/>
            </Routes>
        </div>
    );
}

export default App;