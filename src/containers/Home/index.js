import {
  Grid,
  Navbar,
  Offers,
  Carousel,
  PaymentMethods,
  Advertisements,
} from '../../components';

function Home() {
  return (
    <div>
      <Navbar />
      <Grid>
        <Carousel />
        <PaymentMethods />
        <Offers />
        <Advertisements />
      </Grid>
    </div>
  )
}

export default Home;