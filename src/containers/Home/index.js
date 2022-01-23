import {
  Grid,
  Navbar,
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
      </Grid>
    </div>
  )
}

export default Home;