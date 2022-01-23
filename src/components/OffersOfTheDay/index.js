import React, { memo } from 'react';
import {
  Flex,
  Card,
  Image,
  Offer,
  Price,
  Content,
  InstallmentPrice,
} from './style';

function OffersOfTheDay() {

  const data = [
    {
      src: './img/air-conditioner.png',
      value: 1200,
      installments: '12x 1.000 sem juros',
      offer: '19% OFF',
      freight: 'Fréte Gratis',
    },
    {
      src: './img/bike.png',
      value: 1200,
      installments: '12x 1.000 sem juros',
      offer: '19% OFF',
      freight: 'Fréte Gratis',
    },
    {
      src: './img/car.png',
      value: 1200,
      installments: '12x 1.000 sem juros',
      offer: '19% OFF',
      freight: 'Fréte Gratis',
    },
    {
      src: './img/skate.png',
      value: 1200,
      installments: '12x 1.000 sem juros',
      offer: '19% OFF',
      freight: 'Fréte Gratis',
    },
    {
      src: './img/watch.png',
      value: 1200,
      installments: '12x 1.000 sem juros',
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
    <Flex>
      <Cards />
    </Flex>
  )
}

export default OffersOfTheDay;