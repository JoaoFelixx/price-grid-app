import React, { } from 'react';
import Index from '../Index';
import {
  Div,
  Flex,
  Card,
  Image,
  Button,
} from './style';

function Interesting() {
  return (
    <Div>
      <Index title='Você pode se interresar' /> <br />
      <Flex>
        <Card>
          <div style={{ padding: '20px' }}>
            <h5 style={{ fontWeight: 'normal' }}>MERCADO CRÉDITO</h5> <br />
            <h1>Compre parcelado sem cartão</h1><br />
            <Button>Ver Mais</Button>
          </div>
          <Image style={{ width: '200px' }} src="./img/phone.jpg" alt="Smartphone" />
        </Card>
        <Card>
          <div style={{ padding: '20px' }}>
            <h5 style={{ fontWeight: 'normal' }}>MERCADO CRÉDITO</h5> <br />
            <h1>Compre parcelado sem cartão</h1><br />
            <Button>Ver Mais</Button>
          </div>
          <Image src="./img/your-corner.png" alt="Smartphone" />
        </Card>
      </Flex>
    </Div>
  )
}

export default Interesting;