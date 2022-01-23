import {
  Grid,
  Navbar,
  Carousel,
  OffersOfTheDay,
  PaymentMethods,
} from '../../components';

function Home() {
  return (
    <div>
      <Navbar />
      <Grid>
        <Carousel />
        <PaymentMethods />
        <OffersOfTheDay />
      </Grid>      
    </div>
  )
}

export default Home;