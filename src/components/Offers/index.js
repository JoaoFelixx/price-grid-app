import React, { memo } from 'react'
import Index from '../Index';
import {
  Div,
  Flex,
  Card,
  Image,
  Offer,
  Price,
  Content,
  InstallmentPrice,
} from './style'

function Offers() {
  const data = [
    {
      src: './img/air-conditioner.png',
      value: 1200,
      installments: '12x 100,00 sem juros',
      offer: '19% OFF',
      freight: 'Fréte Gratis',
    },
    {
      src: './img/bike.png',
      value: 900,
      installments: '4x 225,00 sem juros',
      offer: '19% OFF',
      freight: 'Fréte Gratis',
    },
    {
      src: './img/car.png',
      value: 120000,
      installments: '48x 2.500 sem juros',
      offer: '19% OFF',
      freight: 'Fréte Gratis',
    },
    {
      src: './img/skate.png',
      value: 460,
      installments: '4x 115,00 sem juros',
      offer: '19% OFF',
      freight: 'Fréte Gratis',
    },
    {
      src: './img/watch.png',
      value: 320,
      installments: '4x 80,00 sem juros',
      offer: '19% OFF',
      freight: 'Fréte Gratis',
    },
  ]

  const Cards = memo(() => {
    return React.Children.toArray(
      data.map((details) =>
        <Card>
          <Image src={details.src} />
          <Content>
            <Price>{new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(details.value)}</Price>
            <InstallmentPrice>{details.installments}</InstallmentPrice>
            <Offer>{details.freight}</Offer>
          </Content>
        </Card>
      )
    )
  })

  return (
    <Div>
      <Index title='Ofertas do dia' subTitle='Ver todos' /> <br />
      <Flex>
        <Cards />
      </Flex>
    </Div>
  )
}

export default Offers;