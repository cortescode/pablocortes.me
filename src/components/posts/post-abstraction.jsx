import React from "react";
import Style from "./css/post-abstraction.module.css";


function PostAbstraction(props) {
    return(
    <div className={Style.post}>
        <div className={Style.postDate}><span>{props.date}</span></div>
        <h1>
            {props.title}
        </h1>
        <p>
            {props.description}
        </p>
        <button className={Style.postButton}>Read now</button>
    </div>
    );  
}

export default PostAbstraction;