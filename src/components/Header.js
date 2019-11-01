import React from 'react';
import styled from 'styled-components';
import RedHeader from '../imgs/red-header.png'
import BlueHeader from '../imgs/red-header.png'

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

export const Header = ({children}) => {
    return (
        <Container style={{width: 300, height:30}}>
            <HeaderText>{children}</HeaderText>
        </Container>
    )
};
