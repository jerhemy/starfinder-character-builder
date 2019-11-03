import React from 'react';
import {CardContainer, TwoPanelContainer} from "../components/styles";
import {CardHeader, CardList} from "../components/CardList";
import {ThemeData} from "../data/themes";
import {RaceData} from "../data/races";

export const Theme = (props) => {
    return (
        <TwoPanelContainer>
            <CardContainer>
                <CardHeader>Select a Theme</CardHeader>
                <CardList items={ThemeData} />
            </CardContainer>
        </TwoPanelContainer>
    )
};
