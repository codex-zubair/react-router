import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>

            {/* <div>
                <a href="/home">Home</a>
                <a href="/friends">Friends</a>
            </div> */}

            <div>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/friends'>Friends</NavLink>  
                <NavLink to= '/posts'>Post</NavLink>
                <NavLink to= '/about'>About</NavLink>
                <NavLink to= '/contact'>Contact US</NavLink>
                <h3>Common Header</h3>
            </div>

        </div>
    );
};

export default Header;


