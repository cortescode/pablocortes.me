import React from "react";
import Header from "../components/header/header.jsx";
import PostsSection from "../components/blog/posts-section.jsx";
import "../App/App.css";

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