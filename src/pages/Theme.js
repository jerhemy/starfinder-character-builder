import React from 'react';
import { useStateValue } from "../components/StateContext";
import styled from 'styled-components';

const RaceContainer = styled.div`
    display: flex;
`;

export const Theme = (props) => {
    const [state, dispatch] = useStateValue();

    return (
        <RaceContainer>
            <h3>Choose a Theme:</h3>
            <ul>
                <li>Ace Pilot</li>
                <li>Bounty Hunter</li>
                <li>Icon</li>
                <li>Mercenary</li>
                <li>Outlaw</li>
                <li>Priest</li>
                <li>Scholar</li>
                <li>Spacefarer</li>
                <li>Xenoseeker</li>
                <li>Themeless</li>
            </ul>
        </RaceContainer>
    )
};
