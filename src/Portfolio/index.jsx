import React, {} from "react";
import Header from '../components/headers/header.jsx';
import PortfolioSlider from "../components/portfolio/portfolio-slider.jsx";
import ProjectDetail from "../components/portfolio/project-detail.jsx";
import {PortfolioProvider} from "./portfolioContext.js";
import "../App/App.css";




function Portfolio() {
    return (
        <div>
            <Header 
                title='Look at the software I have created' 
                description='Projects made with love'
                image='assets/eth-on-hand.png'>    
            </Header>
            <PortfolioProvider>
                <main>
                    <PortfolioSlider></PortfolioSlider>
                    <h2>Project Detail</h2>
                    <ProjectDetail></ProjectDetail>
                </main>
            </PortfolioProvider>
        </div>
    );
}

export default Portfolio;