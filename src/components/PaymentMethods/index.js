import {
  Content,
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
    <Content>
      <Flex>
        <Card style={{ borderLeft: '5px solid #2374E1' }} >
          <div>
            <Method>Pagamento rápido e seguro</Method>
            <Span>com Mercado Pago</Span>
          </div>
        </Card>
        <Card>
          <BsFillCreditCard2BackFill style={{ fontSize: '24px', color: '#2374E1' }} />
          <div>
            <Method>Até 12 vezes sem juros</Method>
            <Span>Ver mais</Span>
          </div>
        </Card>
        <Card>
          <BsCashStack style={{ fontSize: '24px', color: '#2374E1' }} />
          <div>
            <Method>Parcelado no boleto</Method>
            <Span>Conheça o mercado crédito</Span>
          </div>
        </Card>
        <Card style={{ justifyContent: 'center' }}>
          <BsPhoneFill style={{ fontSize: '24px', color: '#2374E1', margin: '10px' }} />
          <div>
            <Method>Via Pix</Method>
            <Span>Ver mais</Span>
          </div>
        </Card>
        <Card style={{ width: '12%', justifyContent: 'center' }}>
          <BsPlusCircleFill style={{ fontSize: '24px', color: '#2374E1' }}/>
        </Card>
      </Flex>
    </Content>
  )
}

export default PaymentMethods;