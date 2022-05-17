import React, {useContext} from "react";
import Style from "./css/portfolio-slider.module.css";

import {PortfolioContext} from "../../Portfolio/portfolioContext.js";

import { validateNumberIntoList } from "../../utils";

import {ImArrowLeft, ImArrowRight} from "react-icons/im";


function PortfolioSlider(props) {

    const {
        projects,
        loading,
        loadingError,
        selectedProject,
        changeSelectedProject
    } = useContext(PortfolioContext);

    return(
        <section className={Style.portfolioSlider}>
            <button className={Style.buttonPrevious} onClick={() => {changeSelectedProject("previous")}}> <ImArrowLeft/> </button>
                
            <div className={Style.previous}>
                <img className={Style.project_image} src={ projects[validateNumberIntoList(selectedProject-1, projects)].imgUrl } alt="" />
            </div>
                
            <div className={Style.selectedProject}>
                <h1>
                    {projects[selectedProject].name}
                </h1>
                <p>
                    {projects[selectedProject].briefDescription}
                </p>
                <img className={Style.project_image} src={projects[selectedProject].imgUrl} alt="" />
            </div>

            <div className={Style.nextProject}>
                            <img className={Style.project_image} src={projects[validateNumberIntoList(selectedProject+1, projects)].imgUrl} alt="" />
            </div>
                
            <button className={Style.buttonNext} onClick={() => {changeSelectedProject("next")}}> <ImArrowRight/> </button>
           
        </section>
    );
}


export default PortfolioSlider;