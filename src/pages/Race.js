import React from 'react';
import { useStateValue } from "../components/StateContext";
import styled from 'styled-components';
import {CardList} from "../components/CardList";
import { ClassData } from "../data/classes";

const RaceContainer = styled.div`
    width: 750px;
`;


export const Race = (props) => {
    const [state, dispatch] = useStateValue();
    const items = ["Android","Human","Kasathas","Lashuntas","Shirrens","Vesk","Ysoki"];

    return (
        <RaceContainer>
            <CardList items={ClassData} />
        </RaceContainer>
    )
};
