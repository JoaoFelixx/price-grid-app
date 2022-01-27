import styled from 'styled-components';

const Flex = styled.div` 
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #000;
`;

const Card = styled.div`
  justify-self: center;
  width: 600px;
  height: 300px;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
`;

const Ad = styled.h3` 
  position: absolute;
  left: 0;
  color: #fff;
  background-color: rgb(255,0,0,0.6);
  padding: 10px;
`;

export {
  Ad,
  Flex,
  Card,
}