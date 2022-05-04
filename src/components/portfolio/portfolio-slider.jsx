import React, {useEffect, useState} from "react";
import Style from "./css/portfolio-slider.module.css";

import {getAllPortfolioProjects} from "../../firebase.js";


function PortfolioSlider(props) {

    //This is the list number of the selected Project

    const [projects, setProjects] = useState([
        {
            name: "The project is loading 1",
            briefDescription: "THe collection Brief Description is loading",
            explanation: "The full explanation of the project is loading",
            imgUrl: "https://nftnewsinsider.com/wp-content/uploads/2021/07/weird-whales-nft-collection-750x375.png"
        },
        {
            name: "The project is loading 2",
            briefDescription: "THe collection Brief Description is loading",
            explanation: "The full explanation of the project is loading",
            imgUrl: "https://static.news.bitcoin.com/wp-content/uploads/2021/08/cryptopunks-nft-collection-joins-axie-infinity-and-opensea-by-hitting-1-billion-in-sales.jpg"
        },
        {
            name: "The project is loading 3",
            briefDescription: "THe collection Brief Description is loading",
            explanation: "The full explanation of the project is loading",
            imgUrl: "https://www.knupsports.com/wp-content/uploads/2021/07/andre-drummond-lakers-1200x640.jpg"
        }
    ]);
    const [selectedProject, setSelectedProject] = useState(0);


    useEffect(()=> {
        getAllPortfolioProjects().then((projectsList) => {
            setProjects(projectsList);
        })
    }, []); 

    // get a string as parameter, this has to be "previus" or "next"
    function changeSelectedProject(changeDirection) {
        if (changeDirection == "previous") {
            setSelectedProject(validateNumberIntoList(selectedProject-1, projects))

        } else if(changeDirection == "next") {
            setSelectedProject(validateNumberIntoList(selectedProject+1, projects))
        }
    }


    return(
        <section className={Style.portfolioSlider}>

            <button className={Style.buttonPrevious} onClick={() => {changeSelectedProject("previous")}}> Anterior </button>
            
            <div className={Style.previous}>
                <img className={Style.project_image} src={projects[validateNumberIntoList(selectedProject-1, projects)].imgUrl} alt="" />
            </div>

            <div className={Style.selectedProject}>
                <h1>{projects[selectedProject].name}</h1>
                <p>{projects[selectedProject].briefDescription}</p>
                <img className={Style.project_image} src={projects[selectedProject].imgUrl} alt="" />
            </div>

            <div className={Style.nextProject}>
                <img className={Style.project_image} src={projects[validateNumberIntoList(selectedProject+1, projects)].imgUrl} alt="" />
            </div>

            <button className={Style.buttonNext} onClick={() => {changeSelectedProject("next")}}> Siguiente </button>
        
        </section>
    );
}

// This function validate if a integer is a position of a list
function validateNumberIntoList(n, list) {
    const listLastPosition = list.length - 1;
    if(n > listLastPosition) {
        return 0;
    } else if(n<0) {
        return listLastPosition;
    }
    return n;
}

export default PortfolioSlider;