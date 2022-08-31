import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

const Header = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        <header className=''>
            <h1 className=''>SMALL CHANGE</h1>
            <div>
                {Auth.loggedIn() ? (
                    <>
                    <h2>{Auth.getProfile().data.username}</h2>
                    <button className='' onClick={logout}>Logout</button>
                    </>
                ) : (
                // right side of the header is blank when user is not signed in 
                <></>
                )}
            </div>
        </header>
    );
};

export default Header;