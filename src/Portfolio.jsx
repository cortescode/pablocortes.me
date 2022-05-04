import React from "react";
import "./App.css";
import Header from './components/headers/header.jsx';
import PortfolioSlider from "./components/portfolio/portfolio-slider.jsx";

function Portfolio() {
    return (
        <div>
            <Header 
                title='Look at the software I have created' 
                description='' 
                image='assets/eth-on-hand.png'>    
            </Header>
            <main>
                <PortfolioSlider></PortfolioSlider>
            </main>
        </div>
    );
}

export default Portfolio;