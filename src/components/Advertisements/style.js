import styled from 'styled-components';

const Flex = styled.div` 
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #fff;
`;

const Card = styled.div`
  position: relative;
  justify-self: center;
  width: 600px;
  height: 300px;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
`;

const Ad = styled.h3` 
  position: absolute;
  bottom: 0;
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