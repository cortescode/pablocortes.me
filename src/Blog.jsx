import React from "react";
import Header from "./components/headers/header.jsx";
import PostsSection from "./components/posts/posts-section.jsx";
import "./App.css";

function Blog() {

    return (
        <section>
            <Header 
                title="Pablo Cortés' Blog" 
                description='Here I will share posts related to myself and my ideas' 
                image='assets/eth-on-hand.png'>
            </Header>
            
            <main>
                <PostsSection></PostsSection>
            </main>
        </section>
    );
}

export default Blog;