import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {

    const userData = useLoaderData();
    return (
        <div>
            <h1>{userData.name}</h1>
            <h2>{userData.username}</h2>
            <h4>{userData.mail}</h4>
            <h4>{userData.phone}</h4>
            <small>{userData.website}</small>
        </div>
    );
};

export default Details;