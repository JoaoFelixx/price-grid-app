import styled from 'styled-components';

const Flex = styled.div` 
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) { flex-direction: column }
`;

const Card = styled.div`
  width: 33%;

  @media (max-width: 768px) { width: 100%; }
`;

export {
  Flex,
  Card,
}