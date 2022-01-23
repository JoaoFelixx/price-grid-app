import styled from 'styled-components';

const Flex = styled.div`
  grid-area: payments;
  width: 90%;
  justify-self: center;
  background-color: #fff;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {  
    display: none;
    /* width: 94%;
    flex-direction: column; */
  }
`;

const Card = styled.div` 
  padding: 12px;
  width: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  
  @media (max-width: 768px) {
    width: auto; 
  }
`;

const CardPlus = styled.div`
  padding: 12px;
  width: 12%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 768px) { display: none; }
`;

const Description = styled.div` 
  flex-grow: 1;
`;

const Method = styled.p`
  font-weight: bold;
`;

const Span = styled.span`
  color: #2374E1;
  font-size: 12px;
`;

export {
  Description,
  CardPlus,
  Method,
  Card,
  Flex,
  Span,
}