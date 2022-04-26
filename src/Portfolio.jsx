import React from "react";
import "./App.css";
import Header from './components/headers/header.jsx';

function Portfolio() {
    return (
        <div>
            <Header 
                title='Look at the software I have created' 
                description='' 
                image='assets/eth-on-hand.png'>    
            </Header>
        </div>
    );
}

export default Portfolio;