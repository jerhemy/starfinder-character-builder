import React from 'react';
import { useStateValue } from "../components/StateContext";
import styled from 'styled-components';
import {CardList} from "../components/CardList";
import {RaceData} from "../data/races";
import {CardContainer} from "../components/styles";


export const Race = (props) => {
    const [state, dispatch] = useStateValue();
    const items = ["Android","Human","Kasathas","Lashuntas","Shirrens","Vesk","Ysoki"];

    return (
        <CardContainer>
            <CardList items={RaceData} />
        </CardContainer>
    )
};
