import {
  SecurePayment,
  InterestFree,
  Installments,
  Content,
  ViaPix,
  Flex,
} from './style';

function PaymentMethods() {
  return (
    <Content>
      <Flex>
        <SecurePayment>hello</SecurePayment>
        <InterestFree>hello</InterestFree>
        <Installments>hello</Installments>
        <ViaPix>hello</ViaPix>
      </Flex>
    </Content>
  )
}

export default PaymentMethods;