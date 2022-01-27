import Index from '../Index';
import {
  Ad,
  Div,
  Flex,
  Card,
} from './style';

function Advertisements() {
  return (
    <Div>
      <Index title='Beneficios do Mercado Pontos' subTitle='Ver todos os beneficios' /> <br />
      <Flex>
        <a href="https://felixflix.netlify.app/">
          <Ad>FELIXFLIX</Ad>
        </a>
        <Card img='./img/movies-series.png' />
      </Flex>
    </Div>

  )
}

export default Advertisements;