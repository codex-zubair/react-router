import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PostCard from '../PostCard/PostCard';
import './Post.css'

const Post = () => {
    const post = useLoaderData();

    
    return (
        <div className='post-div'>
            {post.map(post=> <PostCard key={post.id} post = {post}></PostCard>)}
        </div>
    );
};

export default Post;