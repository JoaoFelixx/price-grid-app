import styled from 'styled-components';

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Flex = styled.div`
  width: 80%;
  background-color: #000000;
  color: #ffffff;
  display: flex;
  flex-direction: row;
`;

const SecurePayment = styled.div` 
  width: 25%;
  background-color: red;
`;

const InterestFree = styled.div` 
  width: 25%;
  background-color: green;
`;

const Installments = styled.div` 
  width: 25%;
  background-color: yellow;
`;

const ViaPix = styled.div` 
  width: 25%;
  background-color: blue;
`;

export {
  SecurePayment,
  InterestFree,
  Installments,
  Content,
  ViaPix,
  Flex,
}