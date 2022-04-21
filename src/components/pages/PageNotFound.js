import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div>
            <h1 className='p-4'>The Page You're Looking for does not exist!</h1>
            {/* <button type='button' className='btn btn-primary'>Go To Home</button> */}
            <NavLink className="navbar-brand p-4" to="/">Go To Home</NavLink>
        </div>
    );
}

export default PageNotFound;
