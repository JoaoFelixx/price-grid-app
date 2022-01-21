import styled from 'styled-components';

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Flex = styled.div`
  width: 80%;
  display: flex;
  background-color: #fff;
  color: #000;
  flex-direction: row;
  align-items: center;
`;

const Card = styled.div` 
  padding: 12px;
  width: 22%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Method = styled.p`
  font-weight: bold;
`;

const Span = styled.span`
  color: #2374E1;
  font-size: 12px;
`;

export {
  Content,
  Method,
  Card,
  Flex,
  Span,
}