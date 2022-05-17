import React from "react";
import Style from "./css/ImgAndInfo.module.css";


function imgAndInfo(props) {

    return(
    <section className={Style.container}>
        <div className={Style.image}>
            <img src={props.Image} alt="" />
        </div>
        <div className={Style.info}>
            {props.children}
        </div>
    </section>)
}

export default imgAndInfo;