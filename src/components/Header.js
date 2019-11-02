import React from 'react';
import styled from 'styled-components';
import RedHeader from '../assets/images/header-red.png'
import BlueHeader from '../assets/images/header-blue.png'

const Container = styled.div`
    display:flex;
    background-image: url(${props => props.color === 'blue' ? BlueHeader : RedHeader});
    background-size:100% 100%; 

    span {
        font-family: 'AxionSSF';    
        margin-left: 25px;
        color: #fff;
        font-weight: bold;
    }
`;

const HeaderText = styled.span`
    text-transform: uppercase;
`;

export const Header = ({color, children}) => {
    return (
        <Container color={color} style={{width: 300, height:30}}>
            <HeaderText>{children}</HeaderText>
        </Container>
    )
};
