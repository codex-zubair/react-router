import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './PostCard.css'

    const PostCard = ({post}) => {

    const {body,title,id} = post;

    const navigate = useNavigate(); 

    const clicked = ()=> 
    {
        navigate(`/post/${id}`);
    }

  
    return (
        <div className='post'>
            <h2>{title}</h2>
            <h4>{body}</h4>
            <Link to={`/post/${id}`}><button>Show Details With Link</button></Link>
            <button onClick={clicked}>Show Details</button>
        </div>
    );
};

export default PostCard;