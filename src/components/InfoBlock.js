import React, { useState } from 'react';
import {CardList, CardHeader} from "../components/CardList";
import {ClassData} from "../data/classes";
import {CardContainer, InfoContainer, TwoPanelContainer} from "../components/styles";
import {RaceData} from "../data/races";
import {Header} from "../components/Header";
import styled from "styled-components";

export const InfoBlockContainer = styled.div`
    width: 300px;
`;

const DetailsText = styled.div`
    font-size: .9em;
    margin: 5px 5px 5px 25px;
`;
export const InfoBlock = ({name, description}) => {
    return (
        <InfoBlockContainer>
            <Header color={'red'}>{name}</Header>
            <DetailsText>{description}</DetailsText>
        </InfoBlockContainer>
    )
};
