import React from 'react';

import Style from "./css/header.module.css";

function Header(props) {
    return(
        <header className={Style.header}>
            <div className={Style.title}>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
            <div className={Style.image}>
                <img src={props.image} alt=""/>
            </div>
        </header>
    );
}

export default Header;