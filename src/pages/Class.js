import React from 'react';
import styled from "styled-components";
import {CardList} from "../components/CardList";
import {ClassData} from "../data/classes";
import {CardContainer} from "../components/styles";


const ClassContainer = styled.div`
    width: 750px;
    margin: 0 auto;
`;


export const Class = (props) => {


    return (
        <CardContainer>
            <h3>Choose a Class:</h3>
            <CardList items={ClassData} />
        </CardContainer>
    )
};
