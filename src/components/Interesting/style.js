import styled from 'styled-components';

const Div = styled.div`
  grid-area: interesting;
  width: 90%;
  justify-self: center;
`;

const Flex = styled.div` 
  display: flex;
  flex-direction: row;
  width: 100%;

  @media (max-width: 900px) { flex-direction: column }
`;

const Card = styled.div` 
  background-color: #fff;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (min-width: 768px) { margin-right: 10px; }
  @media (max-width: 768px) { margin-bottom: 10px; }
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
`;

const Button = styled.button`
  background-color: #2374E1;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  transition: 1s;
  font-weight: bold;

  &:hover {
    background-color: #001fcf;
  }
`;

export {
  Div,
  Flex,
  Card,
  Image,
  Button,
}