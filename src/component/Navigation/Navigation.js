import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <div className="logo"></div>
            <div className="linkSection">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/'>Statistic</NavLink>
                <NavLink to='/'>Applied Jobs</NavLink>
                <NavLink to='/'>Home</NavLink>
            </div>
            <div className="btn"></div>
        </div>
    );
};

export default Navigation;