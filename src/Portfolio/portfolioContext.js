import React, {useState, useEffect} from "react";
import { getAllPortfolioProjects } from "../Firebase";
import { validateNumberIntoList } from "../utils";


const PortfolioContext = React.createContext();

function PortfolioProvider({children}) {

    const [loading, setLoading] = useState(true);
    const [loadingError, setLoadingError] = useState(false);
    const [selectedProject, setSelectedProject] = useState(0);
    const [projects, setProjects] = useState([
        {
            name:"The project is loading",
            briefDescription: "This is the brie",
            explanation: "this is the full explanation",
            imgUrl: "https://www.kapwing.com/resources/content/images/2021/04/Display_NFT_image.jpeg"
        },
    ]);

    // Get projects from firebase and add it to projects state
    useEffect(() => {
        try {
            getAllPortfolioProjects().then((projectsList) => {
                setProjects(projectsList);
                setLoading(false);
            });
        } catch (error) {
            console.log(error);
            setLoadingError(true);
        }
    }, [])

    // get a string as parameter, this has to be "previus" or "next"
    const changeSelectedProject = (changeDirection) => {
        if (changeDirection === "previous") {
            let validatedProjectNumber = validateNumberIntoList(selectedProject-1, projects)
            setSelectedProject(validatedProjectNumber)

        } else if(changeDirection === "next") {
            let validatedProjectNumber = validateNumberIntoList(selectedProject+1, projects)
            setSelectedProject(validatedProjectNumber)
        }

    }

    return(
        <PortfolioContext.Provider value={{
            projects,
            loading,
            loadingError,
            selectedProject,
            changeSelectedProject
        }}>
            { children }
        </PortfolioContext.Provider>
    )
}

export {PortfolioContext, PortfolioProvider};