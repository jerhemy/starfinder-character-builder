import React from "react";
import styled from "styled-components";
import BlueBar from '../assets/images/header-blue-lg.png'
import RedBar from '../assets/images/header-red-lg.png'

export const BarType = {
    BLUE: 'BLUE',
    RED: 'RED',

}
const HeaderSectionContainer = styled.div`
    display: flex;
    position: relative;
    font-family: 'AxionSSF';
    background-repeat: no-repeat; 
    background-size: 100% 75%;
    height: 75px;
    width: 960px;
`;

const StartCap = styled.div`
    height: 60px;
    width: 30px; 
    background-size: 100% 100%;
    
     @media (min-width: 1920px) {
        height: 60px;
    }
    
     @media (max-width: 768px) {
        height: 40px;
    }
`;

const Cap = styled.div`
    height: 60px;
    width: 30px;

    background-size: 100% 100%;
    
         @media (min-width: 1920px) {
        height: 60px;
    }
    
     @media (max-width: 768px) {
        height: 40px;
    }
`;

const Content = styled.div`
    position: relative;
    top: 0;
    left: 100;
    background-image: url(${props => props.barColor === BarType.BLUE ? BlueBar : RedBar});
    background-size: 100% 100%;
 
    @media (min-width: 1920px) {
        height: 60px;
        font-size: 1.9em;
        min-width: 425px;
    }
    
     @media (max-width: 768px) {
        height: 40px;
        font-size: 1.3em;
        min-width: 300px;
    }
    
`;



export const HeaderSection = ({prevBarColor, barColor, item, subText}) => {

    return (
        <HeaderSectionContainer>
            <Content barColor={barColor}>{item.name}</Content>
        </HeaderSectionContainer>
    )
};