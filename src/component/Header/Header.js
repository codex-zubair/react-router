import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>

            {/* <div>
                <a href="/home">Home</a>
                <a href="/friends">Friends</a>
            </div> */}

            <div>
                <Link to='/home'>Home</Link>
                <Link to='/friends'>Friends</Link>  
                <Link to= '/about'>About</Link>
                <Link to= '/contact'>Contact US</Link>
            </div>

        </div>
    );
};

export default Header;


