import React, { useState } from 'react';
import {CardList, CardHeader} from "../components/CardList";
import {ClassData} from "../data/classes";
import {CardContainer, InfoContainer, TwoPanelContainer} from "../components/styles";
import {RaceData} from "../data/races";
import {Header} from "../components/Header";

export const Class = (props) => {
    const [selectedItem, setSelectedItem] = useState({});

    const classSelected = (item) => {
        setSelectedItem(item);
    };

    return (
        <TwoPanelContainer>
            <CardContainer>
                <CardHeader>Select a Race</CardHeader>
                <CardList items={ClassData} onClick={classSelected}/>
            </CardContainer>
            <InfoContainer>
                <Header color={'red'}>{selectedItem.name}</Header>
                <span>{selectedItem.description}</span>
            </InfoContainer>
        </TwoPanelContainer>
    )
};
