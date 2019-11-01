import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


export const Card = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transform: rotatey(0deg) translatex(0px) translatey(0px);
  transition: all 0.6s cubic-bezier(0.680, -0.550, 0.265, 1.550);
  box-shadow: 4px 4px 20px rgba(0,0,0,0.4);
  margin: 5px;
  cursor: pointer;
`;

export const Face = styled.div`
  transform: rotateY( 0deg ) translateZ( 2px );
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #ecf0f1;
  border: 2px white solid;
  border-radius: 5px;
  
  display: flex;
  margin: auto 0;
  justify-content: center;
  overflow: hidden;
`;

export const Label = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 12px;
  color: #2980b9;
`;

export const Item = styled.li`
  animation-name: animateIn;
  animation-duration: 350ms;
  animation-delay: ${props=>props.index * 175}ms;
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;

  padding: 5px;
  margin: 5px;
  width: 150px;
  height: 150px;
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

export const CardList = ({items, onClick}) => {

    return (
        <CardContainer>
            {items.map((item, i) => {
                return (
                    <Item index={i} key={i} onClick={() => { onClick(item) } }>
                        <Card>
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

