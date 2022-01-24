import styled from 'styled-components';

const Flex = styled.div` 
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #fff;
  @media (max-width: 768px) { flex-direction: column }
`;

const Card = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${props => props.img});
`;

export {
  Flex,
  Card,
}