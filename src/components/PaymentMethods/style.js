import styled from 'styled-components';

const Content = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) { 
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const Flex = styled.div`
  width: 100%;
  background-color: #fff;
  color: #000;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) { 
    flex-direction: column; 
    align-items: flex-start;
  }
`;

const Card = styled.div` 
  padding: 12px;
  width: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%; 
    justify-content: space-evenly;
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
  CardPlus,
  Content,
  Method,
  Card,
  Flex,
  Span,
}