import {
  CardFastPayment,
  Description,
  CardPlus,
  Method,
  Card,
  Span,
  Flex,
} from './style';
import {
  BsFillCreditCard2BackFill,
  BsPlusCircleFill,
  BsCashStack,
  BsPhoneFill,
} from 'react-icons/bs'

function PaymentMethods() {
  return (
    <Flex>
      <CardFastPayment>
        <Method>Pagamento rápido e seguro</Method>
        <Span>com Mercado Pago</Span>
      </CardFastPayment>
      <Card>
        <BsFillCreditCard2BackFill style={{ fontSize: '24px', color: '#2374E1', flexGrow: '1' }} />
        <Description>
          <Method>Até 12 vezes sem juros   </Method>
          <Span>Ver mais</Span>
        </Description>
      </Card>
      <Card>
        <BsCashStack style={{ fontSize: '24px', color: '#2374E1', flexGrow: '1' }} />
        <Description>
          <Method>Parcelado no boleto</Method>
          <Span>Conheça o mercado crédito</Span>
        </Description>
      </Card>
      <Card >
        <BsPhoneFill style={{ fontSize: '24px', color: '#2374E1', flexGrow: '1' }} />
        <Description>
          <Method>Pix (QRcode, Chave)</Method>
          <Span>Ver mais</Span>
        </Description>
      </Card>
      <CardPlus>
        <BsPlusCircleFill style={{ fontSize: '24px', color: '#2374E1' }} />
      </CardPlus>
    </Flex>
  )
}

export default PaymentMethods;