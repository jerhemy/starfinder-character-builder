import React from 'react';
import styled from 'styled-components';

const RaceContainer = styled.div`
    display: flex;
`;

const Skills = (props) => {
    return (
        <RaceContainer>
            <h3>Choose a Skill:</h3>
            <ul>
                <li>Acrobatics* (DEX)</li>
                <li>Athletics* (STR)</li>
                <li>Bluff (CHA)</li>
                <li>Computers (INT)</li>
                <li>Culture (INT)</li>
                <li>Diplomacy (CHA)</li>
                <li>Disguise (CHA)</li>
                <li>Engineering (INT)</li>
                <li>Intimidate (CHA)</li>
                <li>Life Science (INT)</li>
                <li>Medicine (INT)</li>
                <li>Mysticism (WIS)</li>
                <li>Perception (WIS)</li>
                <li>Physical Science (INT)</li>
                <li>Piloting (DEX)</li>
                <li>Intimidate (CHA)</li>
            </ul>
        </RaceContainer>
    )
};

export default Skills;
