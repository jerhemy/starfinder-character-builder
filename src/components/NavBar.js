import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const NavList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
`;

const NavItem = styled.li`
    float: left;
    
    a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;  
        
        &:hover {
            background-color: #111;
        }  
    }
`;


export const NavBar = (props) => {
    return (
        <NavList>
            <NavItem><Link to="/">Home</Link></NavItem>
            <NavItem><Link to="/race">Race</Link></NavItem>
            <NavItem><Link to="/class">Class</Link></NavItem>
            <NavItem><Link to="/theme">Theme</Link></NavItem>
            <NavItem><Link to="/skills">Skills</Link></NavItem>
        </NavList>
    )
};
