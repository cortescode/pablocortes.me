import React, {useState} from "react";
import Style from "./css/portfolio-slider.module.css";

function PortfolioSlider(props) {

    const projects = [
        {
            id:0,
            name: "Tamatzi World",
            briefDescription: "It is a NFT collection with a DAO where holders can fund emergent music",
            imageURL: "https://nftevening.com/wp-content/uploads/2021/07/featured-ape.jpg"
        },
        {
            id:1,
            name: "Tamatzi World2",
            briefDescription: "This is other text to make shure this works",
            imageURL: "https://nftevening.com/wp-content/uploads/2021/07/featured-ape.jpg"
        },
        {
            id:2,
            name: "Tamatzi World3",
            briefDescription: "Now tomorrow I will Have to finish Making the styles and add it to the portfolio page",
            imageURL: "https://nftevening.com/wp-content/uploads/2021/07/featured-ape.jpg"
        }
    ]

    //This is the list number of the selected Project
    const [selectedProject, setSelectedProject] = useState(0);


    // get a string as parameter, this has to be "previus" or "next"
    function changeSelectedProject(changeDirection) {
        if (changeDirection == "previous") {
            if(selectedProject <= 0) {
                setSelectedProject(projects.length-1)
            } else {
                setSelectedProject(selectedProject-1);
            }

        } else if(changeDirection == "next") {
            if(selectedProject >= (projects.length -1)) {
                setSelectedProject(0)
            } else {
                setSelectedProject(selectedProject+1);
            }
        }

        console.log(selectedProject);
    }

    function validateNumber(n) {

    }


    return(
        <section className={Style.portfolioSlider}>
            <button className={Style.buttonPrevious} onClick={() => {changeSelectedProject("previous")}}> Anterior </button>
            <div className={Style.NotSelectedProject}>
            </div>
            <div className={Style.selectedProject}>
                <h1>{projects[selectedProject].name}</h1>
                <p>{projects[selectedProject].briefDescription}</p>
             </div>
             <div className={Style.NotSelectedProject}>
             </div>
            <button className={Style.buttonNext} onClick={() => {changeSelectedProject("next")}}> Siguiente </button>
        </section>
    );
}

export default PortfolioSlider;