import React from 'react';
import styled from "styled-components";
import {Card, Face, Item, Label} from "../components/styles";


const ClassContainer = styled.div`
    width: 750px;
    margin: 0 auto;
`;

const ElementCard = ({item}) => {

    return (
        <Card>
            <Face>
                <Label class="number">{item}</Label>
            </Face>
        </Card>
    )
}

export const Class = (props) => {
    const items = ["Envoy","Mechanic","Mystic","Operative","Solarian","Soldier","Technomancer"];

    return (
        <ClassContainer>
            <h3>Choose a Class:</h3>
            <ul className="list">
                {items.map((item, i) => {
                    return (
                        <Item index={i} key={i}>
                            <ElementCard item={i}/>
                        </Item>
                    )
                })}
            </ul>
        </ClassContainer>
    )
};
