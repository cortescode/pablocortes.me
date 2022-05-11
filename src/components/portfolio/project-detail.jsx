import React, {useContext} from "react";
import Style from "./css/project-detail.module.css";
import {PortfolioContext} from "../../Portfolio/portfolioContext.js";


function ProjectDetail(props) {

    const {
        projects,
        selectedProject,
    } = useContext(PortfolioContext);


    return(
        <section className={Style.projectDetail}>
            <p>{projects[selectedProject].explanation}</p>
        </section>
    );
}

export default ProjectDetail;