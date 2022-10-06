import React from 'react';
import './PostCard.css'

    const PostCard = (props) => {

    const {body,title} = props.post;
  
    return (
        <div className='post'>
            <h2>{title}</h2>
            <h4>{body}</h4>
        </div>
    );
};

export default PostCard;