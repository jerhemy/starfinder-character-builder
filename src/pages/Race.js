import React, {useState} from 'react';
import styled from 'styled-components';
import {Card, CardHeader, CardList, Face, Item, Label} from "../components/CardList";
import {RaceData} from "../data/races";
import {CardContainer, InfoContainer, TwoPanelContainer} from "../components/styles";
import {Header} from "../components/Header";
import {InfoBlock} from "../components/InfoBlock";
import {ClassHeader} from "../components/ClassHeader";
import {RaceHeader} from "../components/RaceHeader";

export const Race = (props) => {
    const [selectedItem, setSelectedItem] = useState({name: '', description: '', details: []});

    const raceSelected = (race) => {
        setSelectedItem(race);
    };

    return (
        <TwoPanelContainer>
            <CardContainer>
                <CardHeader>Select a Race</CardHeader>
                <CardList items={RaceData} onClick={raceSelected}/>
            </CardContainer>
            {selectedItem && (
            <InfoContainer>
                <RaceHeader color={'blue'} item={selectedItem}></RaceHeader>
                <span>{selectedItem.description}</span>
                <Header color={'red'}>{selectedItem.name}</Header>
                <span>{selectedItem.description}</span>
                {selectedItem.details && selectedItem.details.map((item, i) => {
                    return (
                        <InfoBlock name={item.title} description={item.description} />
                    )
                })}

            </InfoContainer>
        )}
        </TwoPanelContainer>
    )
};
