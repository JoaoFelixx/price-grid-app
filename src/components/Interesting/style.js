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

  @media (max-width: 768px) { flex-direction: column }
`;

const Card = styled.div` 
  margin: 4px;
  background-color: #fff;
  width: 100%;
  height: 250px;
`;

export {
  Div,
  Flex,
  Card,
}