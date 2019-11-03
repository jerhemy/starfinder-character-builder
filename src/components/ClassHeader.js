import React from 'react';
import styled from 'styled-components';
import RedHeader from '../assets/images/header-red-lg.png'
import BlueHeader from '../assets/images/header-blue-lg.png'

const BarContainer = styled.div`
    display: flex;
    font-family: 'AxionSSF';   
`;
const Container = styled.div`
    display: inline-flex;
    background-image: url(${props => props.color === 'blue' ? BlueHeader : RedHeader});
    background-size: 100% 100%; 
    height: 50px;
    width: 320px;
    
    div {
        font-family: 'AxionSSF';    
        margin-left: 25px;
        color: #fff;
        font-weight: bold;
        font-size: 1.4em;
    }
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
    text-transform: uppercase;
    margin-left: 25px;
    color: #fff;
    font-weight: bold;
    font-size: 1.5em; 
    margin-top: 3px;
`;

export const ClassHeader = ({item}) => {
    return (
        <BarContainer>
            <Container color={'blue'} style={{zIndex: 10}}>
                <ClassName>{item.name}</ClassName>
            </Container>
            <ColumnContainer color={'red'} style={{marginLeft: -75, zIndex: 5}}>
                <HeaderText style={{fontSize: `1em`, marginLeft: 85}}>STAMINA POINTS</HeaderText>
                <HeaderText style={{fontSize: `.8em`, marginLeft: 85, marginTop: -5}}>{item.stamina} + Constitution modifier</HeaderText>
            </ColumnContainer>
            <ColumnContainer color={'blue'} style={{flexDirection: `column`, marginRight: 90, marginLeft: -210}}>
                <HeaderText style={{fontSize: `1.4em`, paddingLeft: 195, marginTop: 3}}> {item.hp} HP</HeaderText>
            </ColumnContainer>
        </BarContainer>
    )
};
