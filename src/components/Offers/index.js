import OffersOfTheDay from '../OffersOfTheDay';
import Index from '../Index';
import { Div } from './style'

function Offers() {
  return (
    <Div>
      <Index title='Ofertas do dia' subTitle='Ver todos' /> <br />
      <OffersOfTheDay />
    </Div>
  )
}

export default Offers;