import {
  Grid,
  Navbar,
  Offers,
  Carousel,
  Interesting,
  PaymentMethods,
  Advertisements,
} from '../../components';

function Home() {
  return (
    <Grid>
      <Navbar />
      <Carousel />
      <PaymentMethods />
      <Offers />
      <Advertisements />
      <Interesting />
    </Grid>
  )
}

export default Home;