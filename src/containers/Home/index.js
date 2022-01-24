import {
  Ad,
  Grid,
  Navbar,
  Offers,
  Carousel,
  PaymentMethods,
} from '../../components';

function Home() {
  return (
    <div>
      <Navbar />
      <Grid>
        <Carousel />
        <PaymentMethods />
        <Offers />
        <Ad />
      </Grid>
    </div>
  )
}

export default Home;