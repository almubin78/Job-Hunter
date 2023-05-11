import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css'

const Navigation = () => {
    const linkStyle ={
        marginLeft:'20px',

    }
    return (
        <div>
            <div className="logo"></div>
            <div className="linkSection">
                <NavLink style={(isActive)=>{return {color:isActive ?' ':''}}} to='/'>Home</NavLink>
                {/* <NavLink style={(isActive)=>{return {color:isActive ?' ':''}}} to='/'>Home</NavLink> */}
                <NavLink style={linkStyle} to='/statistics'>Statistic</NavLink>
                <NavLink style={linkStyle} to='/details'>Details</NavLink>
                <NavLink style={linkStyle} to='/'>Applied Jobs</NavLink>
            </div>
            <div className="btn"></div>
        </div>
    );
};

export default Navigation;