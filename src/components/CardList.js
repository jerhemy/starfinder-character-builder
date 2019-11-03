import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {useStateValue} from "./StateContext";

export const Card = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transform: rotatey(0deg) translatex(0px) translatey(0px);
  /*transition: all 0.6s cubic-bezier(0.680, -0.550, 0.265, 1.550);*/
  box-shadow: 4px 4px 20px rgba(0,0,0,0.4);
  margin: 5px;
  cursor: pointer;
  
  &.active {
    box-shadow: 0px 0px 30px rgba(255,255,255,1);
    border-radius: 0px
  }
`;

export const Face = styled.div`
  transform: rotateY( 0deg ) translateZ( 2px );
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #143e93;
  border: 2px white solid;
  border-radius: 5px;
  
  display: flex;
  margin: auto 0;
  justify-content: center;
  overflow: hidden;
`;

export const Label = styled.span`
    font-family: 'AxionSSF';     
    position: absolute;
    top: 5px;
    left: 5px;
    font-size: 12px;
    color: #fff;
`;

export const Item = styled.li`
  animation-name: animateIn;
  animation-duration: 350ms;
  animation-delay: ${props=>props.index * 175}ms;
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;

  padding: 5px;
  margin: 5px;
  width: 140px;
  height: 140px;
  display: inline-block;
  
  @keyframes animateIn {
    0% {
      opacity: 0;
      transform: scale(0.6) translateY(-8px);
    }

    100% {
      opacity: 1;
    }
  }
`;

const CardContainer = styled.ul`
    padding-left: 0px;
`;

export const CardHeader = styled.h3`
font-family: 'AxionSSF'; 
    margin-left: 15px;
`;

export const CardList = ({items, selectedItem, onClick}) => {
    const [selectedCard, setSelectedCard] = useState(null);

    return (
        <CardContainer>
            {items.map((item, i) => {
                return (
                    <Item index={i} key={i} onClick={() => { setSelectedCard(i); onClick(item); } }>
                        <Card className={ item === selectedItem ? 'active' : 'inactive'}>
                            <Face>
                                <img src={item.image} style={{height: 400,marginTop: 10}}/>
                                <Label>{item.name}</Label>
                            </Face>
                        </Card>
                    </Item>
                )
            })}
        </CardContainer>
    )
};

CardList.propTypes = {
    items: PropTypes.array.isRequired,
    onClick: PropTypes.func
};

CardList.defaultProps = {
    items: [],
    onClick: () => {}
}

