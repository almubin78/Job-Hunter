import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css'

const Navigation = () => {
    return (
        <div>
            <div className="logo"></div>
            <div className="linkSection">
                <NavLink style={(isActive)=>{return {color:isActive?'':''}}} to='/'>Home</NavLink>
                <NavLink to='/'>Statistic</NavLink>
                <NavLink to='/details'>Details</NavLink>
                <NavLink to='/'>Applied Jobs</NavLink>
                <NavLink to='/'>Home</NavLink>
            </div>
            <div className="btn"></div>
        </div>
    );
};

export default Navigation;