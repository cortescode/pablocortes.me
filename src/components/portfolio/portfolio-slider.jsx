import React, {useState} from "react";
import Style from "./css/portfolio-slider.module.css";

function PortfolioSlider(props) {

    const [selectedProject, setSelectedProject] = useState(0);

    const Project = {
        name: "Tamatzi World",
        description: "NFT collection and community for musicians",
        image_url: "assets/projects/tamatzi-world.png"
    }

    return(
        <section className={Style.portfolioSlider}>
            <div className={Style.notSelectedProject}></div>
            <div className={Style.selectedProject}></div>
            <div className={Style.notSelectedProject}></div>
        </section>
    );
}

export default PortfolioSlider;