import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({friend}) => {

    const {name, email, phone,website,id} = friend;
    return (
        <div className='card'>
            <div>
            <Link to={`/friends/${id}`}>{name}</Link>
            <h5>{phone}</h5>
            <h5>{email}</h5>
            <small>{website}</small>
            </div>
        </div>
    );
};

export default Card;