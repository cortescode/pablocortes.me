import React, {useEffect, useState} from "react";
import Style from "./css/posts-section.module.css";
import PostAbstraction from "./post-abstraction.jsx";

import {getAllPosts} from "../../Firebase";

function PostsSection(props) {

    const [posts, setPosts] = useState([]);
    const [postsShown, setPostsShown] = useState([]);

    useEffect( ()=>{
        getAllPosts().then((postsList)=>{
            setPosts(postsList); 
            setPostsShown(postsList)
        });
    }, []);

    //Filter posts that contains the exact characters of the input value
    function searchPosts(event) {
        const value = event.target.value;
        const searchResponse = posts.filter(post => post.title.includes(value) || post.content.includes(value));
        setPostsShown(searchResponse);
    }

    return (
        <section className={Style.blogSection}>
            <div className={Style.searchBarContainer}>
                <input type="text" className={Style.searchBar} onChange={searchPosts} content="Search"/>
            </div>
            <div className={Style.posts}>
            {
                postsShown.map( (post) => 
                {
                    return <PostAbstraction key={post.id} date="22 March, 2022" title={post.title} description={post.content}></PostAbstraction>
                })
            }
            </div>
        </section>
    );
}


export default PostsSection;