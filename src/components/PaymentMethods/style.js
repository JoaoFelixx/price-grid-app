import styled from 'styled-components';

const Flex = styled.div`
  grid-area: payments;
  width: 90%;
  background-color: #fff;
  justify-self: center;
  color: #000;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) { 
    width: auto;
    flex-direction: column; 
    align-items: stretch;
  }
`;

const CardFastPayment = styled.div`
  padding: 12px;
  width: 20%;

  @media (max-width: 768px) {
    width: 100%; 
    justify-content: space-evenly;
  }
`;

const Description = styled.div` 
  flex-grow: 1;
`;

const Card = styled.div` 
  padding: 12px;
  width: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

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

  @media (max-width: 768px) { display: none; }
`;

const Method = styled.p`
  font-weight: bold;
`;

const Span = styled.span`
  color: #2374E1;
  font-size: 12px;
`;

export {
  CardFastPayment,
  Description,
  CardPlus,
  Method,
  Card,
  Flex,
  Span,
}