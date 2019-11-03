import React from "react";
import styled from "styled-components";
import BlueBar from '../assets/images/header-blue-lg.png'
import RedBar from '../assets/images/header-red-lg.png'
import {BarType} from "./HeaderSection";

const HeaderSectionContainer = styled.div`
    display: flex;
    font-family: 'AxionSSF';
    background-image: url(${BlueBar});
    background-repeat: no-repeat; 
    background-size: 100% 100%;
    width: 200px;
    height: 40px;
    cursor: pointer;
    &:hover {
        background-image: url(${RedBar});
    }
    margin-right: 5px;
`;

const Content = styled.div`
    font-size: .9em;
    margin: 5px 15px;
    
    cursor: pointer;
`;

export const Button = ({children}) => {
    return (
        <HeaderSectionContainer>
            <Content>{children}</Content>
        </HeaderSectionContainer>
    )
};