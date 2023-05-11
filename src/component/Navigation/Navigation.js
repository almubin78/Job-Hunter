import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navigation.css'

const Navigation = () => {
    const linkStyle ={
        marginLeft:'20px',

    }
    return (
        <div className='navbar'>
            <div className="navbar-start">
                <button className='btn' as={Link} to='/dd'>Job Market Place</button>
            </div>
            <div className="navbar-center hidden lg:flex">
                <NavLink style={(isActive)=>{return {color:isActive ?' ':''}}} to='/'>Home</NavLink>
                {/* <NavLink style={(isActive)=>{return {color:isActive ?' ':''}}} to='/'>Home</NavLink> */}
                <NavLink style={linkStyle} to='/statistics'>Statistic</NavLink>
                <NavLink style={linkStyle} to='/details'>Details</NavLink>
                <NavLink style={linkStyle} to='/'>Applied Jobs</NavLink>
            </div>
            <div className="navbar-end">
                <button className='btn btn-'>Apply Now</button>
            </div>
        </div>
    );
};

export default Navigation;