import styled from 'styled-components';

const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {  
    width: 94%;
    flex-direction: column;
  }
`;

const Card = styled.div`
  margin: 4px;
  background-color: #fff;
  cursor: pointer;
`;

const Content = styled.div`
  margin: 10px;
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
  Flex,
  Card,
  Image,
  Offer,
  Price,
  Content,
  InstallmentPrice,
}