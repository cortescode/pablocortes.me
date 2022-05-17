import React from "react";

import Header from "../components/header/header.jsx";
import "../App/App.css";
import PortfolioSlider from "../components/portfolio/portfolio-slider.jsx";
import { PortfolioProvider } from "../Portfolio/portfolioContext.js";
import ImgAndInfo from "../components/informationDisplays/ImgAndInfo.jsx"



function Home() {
    return (
        <section>

            <Header 
                title='Software Development and Blockchain ecosystem' 
                description='Join my Newslettes clicking the button below and receive 1 weekly post about web3 full stack development' 
                image='assets/eth-on-hand.png'>    
            </Header>

            <main>
                <h2>And... ¿Who is Pablo Cortés?</h2>
                <ImgAndInfo Image="assets/blockchain.png">
                    <p>
                        I consider myself as an autodidact programmer passionated by the future of web and finance,
                        voracious reader and entrepreneur.
                        <br/><br/>
                        I started to learn programming when I was 14 years old, creating mobile games, after whatching a couple of american boys
                        getting rich by creating mobile games (I almost had to try).
                        <br/><br/>
                        After seen my games had no downloads I started learning about web development. Then, looking at my age
                        and knowing nobodys was going to give me a job (by that moment) I started learning about online business.
                        <br/><br/>
                        I tried all types of ways to earn money, failed in most of them, but learnt a lot about marketing and organization.
                        <br/><br/>
                        Currently I am managing <a href="https://www.bleckin.com">Bleckin</a>, where I try to bring blockchain use and knowledge to Spanish speakers,
                        I am preparing a lot of interesting stuff (related to Web3) that will be launched in coming months.
                        <br/><br/>
                        I don't know in what will I be interested in future, but there is something what follow me in all my life: don't stop learning 
                        and trying to make products or services that improve the world.
                    </p>
                </ImgAndInfo>
            
                <h2>Portfolio</h2>
                <PortfolioProvider>
                    <PortfolioSlider></PortfolioSlider>
                </PortfolioProvider>
            </main>

        </section>
    );
}

export default Home;