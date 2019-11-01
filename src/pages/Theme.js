import React from 'react';
import { useStateValue } from "../components/StateContext";
import styled from 'styled-components';
import {CardContainer} from "../components/styles";
import {CardList} from "../components/CardList";
import {RaceData} from "../data/races";
import {ThemeData} from "../data/themes";

const RaceContainer = styled.div`
    display: flex;
`;

export const Theme = (props) => {
    const [state, dispatch] = useStateValue();

    return (
        <CardContainer>
            <CardList items={ThemeData} />
        </CardContainer>
    )
};
