import React, {useState} from 'react';
import styled from 'styled-components';
import {Card, CardHeader, CardList, Face, Item, Label} from "../components/CardList";
import {RaceData} from "../data/races";
import {CardContainer, InfoContainer, TwoPanelContainer} from "../components/styles";
import {BarType, HeaderSection} from "../components/HeaderSection";
import {useStateValue} from "../components/StateContext";
import {InfoBlock} from "../components/InfoBlock";
import {Button} from "../components/Button";

export const Race = (props) => {
    const [ state , dispatch] = useStateValue();

    const raceSelected = (race) => {
        dispatch({
            type: 'race',
            value: race
        })
    };

    return (
        <TwoPanelContainer>
            <CardContainer>
                <CardHeader>Select a Race</CardHeader>
                <CardList items={RaceData} selectedItem={state.race} onClick={raceSelected}/>
            </CardContainer>
            {state.race && (
                <>
                    {state.race.variants && (
                        <>
                            {state.race.variants.map((variant, i) => <Button>Select {variant.name}</Button>)}
                        </>
                    )}
                    {!state.race.variants && (
                        <Button>Select {state.race.name}</Button>

                    )}
                <InfoContainer>
                    <HeaderSection barColor={BarType.BLUE} item={state.race} />
                    <HeaderSection style={{left: -325}} prevBarColor={BarType.BLUE} barColor={BarType.RED} item={state.race} />
                    <HeaderSection style={{left: -650}} barColor={BarType.RED} item={state.race} />
                </InfoContainer>
                    <div>
                {state.race.details.map((item, i) => {
                    return (
                        <InfoBlock name={item.title} description={item.description} />
                    )
                })}
                    </div>
                </>

        )}
        </TwoPanelContainer>
    )
};
