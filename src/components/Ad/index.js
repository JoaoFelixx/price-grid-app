import Index from '../Index';
import Advetiments from '../Advertisements';
import { Div } from './style';

function Ad() {
  return (
    <Div>
      <Index  title='Beneficios do Mercado Pontos' subTitle='Ver todos os beneficios' /> <br />
      <Advetiments />
    </Div>
  )
}

export default Ad;