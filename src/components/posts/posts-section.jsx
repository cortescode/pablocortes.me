import React, {useEffect, useState} from "react";
import Style from "./css/posts-section.module.css";
import PostAbstraction from "./post-abstraction.jsx";

import app from "../../firebase.js";
import { getFirestore, collection, getDocs} from "firebase/firestore";

function PostsSection(props) {

    const [postsShown, setPosts] = useState([]);

    const db = getFirestore(app);

    //Get blog posts from the firestore database
    useEffect( () => {
        const getAllPosts = async () => {
            const postsCollection = collection(db, 'Blog-posts');
            const postsSnapshot = await getDocs(postsCollection, 'Posts');
            const postsList = postsSnapshot.docs.map( (doc) => ({...doc.data(), id: doc.id}));
            setPosts(postsList);
            return postsList;
        }
        getAllPosts();
    });

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