import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';
import './Friends.css';


const Friends = () => {

    const friends  = useLoaderData();


    return (
        <div className='card-container'>
            {friends.map(friend=> <Card key={friend.id} friend = {friend}></Card>)}
        </div>
    );
};

export default Friends;