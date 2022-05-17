import React from 'react';
import Style from "./css/logoBanner.module.css";


function logoBanner(props) {

    return(
        <nav className={Style.banner}>
            <div className={Style.textLogo}>
                <h3> <a href='/'>Pablo Cortés Rodríguez</a></h3>
            </div>
        </nav>
    );
}

export default logoBanner;