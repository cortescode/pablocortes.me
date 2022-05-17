import React from 'react';

import Style from "./css/header.module.css";

function Header(props) {
    return(
        <div className={Style.backgroundImage}>
            <header className={Style.header}>
            <div className={Style.title}>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <button className={Style.newsletterButton}>
                    Suscribe
                </button>
            </div>
        </header>
        </div>
    );
}

export default Header;