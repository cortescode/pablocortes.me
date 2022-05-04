import React, {useEffect, useState} from "react";
import Style from "./css/posts-section.module.css";
import PostAbstraction from "./post-abstraction.jsx";

import {getAllPosts} from "../../firebase.js";

function PostsSection(props) {

    const [postsShown, setPosts] = useState([]);

    useEffect( ()=>{
        getAllPosts().then((postsList)=>{setPosts(postsList);});
    }, []);

    //Filter posts that contains the exact characters of the input value
    function searchPosts(event) {
        const value = event.target.value;
        const searchResponse = postsShown.filter(post => post.title.includes(value) || post.content.includes(value));
        console.log(searchResponse);
        setPosts(searchResponse);
    }

    return (
        <section className={Style.blogPosts}>
            <div className={Style.searchBarContainer}>
                <input type="text" className={Style.searchBar} onChange={searchPosts}/>
            </div>
            {
                postsShown.map( (post) => 
                {
                    return <PostAbstraction key={post.id} date="22 March, 2022" title={post.title} description={post.content}></PostAbstraction>
                })
            }
        </section>
    );
}


export default PostsSection;