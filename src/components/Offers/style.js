import styled from 'styled-components';

const Div = styled.div`
  grid-area: offers;
  width: 90%;
  justify-self: center;
`;

const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) { flex-direction: column; }
`;

const Card = styled.div`
  width: 100%;
  background-color: #fff;
  cursor: pointer;
  
  @media (min-width: 768px) { margin-right: 8px; }
  @media (max-width: 768px) { margin-bottom: 10px; }
`;

const Content = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
`;

const Price = styled.h2`
  font-weight: normal;
`;

const InstallmentPrice = styled.span`
  color: #3E3E3E;
  font-size: 13px;
  font-weight: 400;
`;

const Offer = styled.span`
  color: #00A650;
  font-size: 13px;
  font-weight: bold;
`; 

export {
  Div,
  Flex,
  Card,
  Image,
  Offer,
  Price,
  Content,
  InstallmentPrice,
}