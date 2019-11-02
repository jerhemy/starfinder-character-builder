import React from 'react';
import styled from 'styled-components';
import RedHeader from '../assets/images/header-red.png'
import BlueHeader from '../assets/images/header-blue.png'

const BarContainer = styled.div`
    display: flex;
    font-family: 'AxionSSF';   
`;
const Container = styled.div`
    display: inline-flex;
    background-image: url(${props => props.color === 'blue' ? BlueHeader : RedHeader});
    background-size: 100% 100%; 
    margin-left: -30px;
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
    font-size: 1.4em;  
`;

export const RaceHeader = ({item}) => {
    return (
        <BarContainer>
            <Container color={'blue'} style={{zIndex: 10}}>
                <ClassName>{item.name}</ClassName>
            </Container>

            <ColumnContainer color={'blue'} style={{flexDirection: `column`, marginRight: 90, marginLeft: -210}}>
                <HeaderText style={{fontSize: `1.4em`, paddingLeft: 195}}> {item.hp} HP</HeaderText>
            </ColumnContainer>
        </BarContainer>
    )
};
