import React from 'react';
import {CardContainer} from "../components/styles";
import {CardList} from "../components/CardList";
import {ThemeData} from "../data/themes";

export const Theme = (props) => {
    return (
        <CardContainer>
            <CardList items={ThemeData} />
        </CardContainer>
    )
};
