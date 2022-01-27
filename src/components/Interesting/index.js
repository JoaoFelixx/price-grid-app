import React, { } from 'react';
import Index from '../Index';
import { 
  Div,
  Flex,
  Card,
} from './style';

function Interesting() {
  return (
    <Div>
      <Index title='Você pode se interresar' />
      <Flex>
        <Card>oi</Card>
        <Card>oi</Card>
      </Flex>
    </Div>
  )
}

export default Interesting;