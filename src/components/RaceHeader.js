import React from 'react';
import styled from 'styled-components';
import RedHeader from '../assets/images/header-red-lg.png'
import BlueHeader from '../assets/images/header-blue-content.png'
import BlueRedCapImage from '../assets/images/header-blue-red-cap.png';
import RedBlueCapImage from '../assets/images/header-red-blue-cap.png';
import RedRedCapImage from '../assets/images/header-red-red-cap.png';
import BlueStartCapImage from '../assets/images/header-blue-start-cap.png';
import BlueEndCapImage from '../assets/images/header-blue-end-cap.png';
import BlueContentImage from '../assets/images/header-blue-content.png';
import RaceHeaderImage from '../assets/images/header-race.png';

const BarContainer = styled.div`
    display: flex;
    font-family: 'AxionSSF';
    background-image: url(${RaceHeaderImage});
    background-repeat: no-repeat; 
    background-size: 100% 75%;
    height: 75px;
    width: 960px;
`;

const Container = styled.div`
    display: inline-flex;
    height: 50px;
    min-width: 100px;
    width: 100%;
    font-family: 'AxionSSF';    
`;

const ColumnContainer = styled(Container)`
    flex-direction: column;
`;

const CaptialHeaderText = styled.div`
    text-transform: uppercase;
`;

const HeaderText = styled.div`
    margin-left: -85px;
`;

const ClassName = styled.div`
    display: inline-block;
    text-transform: uppercase;
    color: #fff;
    font-weight: bold;
    font-size: 1.6em;
    margin-left: 30px;
    width: 400px;  
`;



export const RaceHeader = ({item}) => {
    return (
        <BarContainer>

            <ClassName>{item.name}</ClassName>
            <HeaderText style={{fontSize: `1.4em`, marginLeft: 300}}> {item.hp} HP</HeaderText>
            <HeaderText style={{fontSize: `1.4em`, marginLeft: 400}}> {item.hp} HP</HeaderText>
            <HeaderText style={{fontSize: `1.4em`, marginLeft: 500}}> {item.hp} HP</HeaderText>
            <HeaderText style={{fontSize: `1.4em`, marginLeft: 755}}> {item.hp} HP</HeaderText>

        </BarContainer>
    )
};
