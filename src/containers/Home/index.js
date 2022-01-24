import {
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
      </Grid>      
    </div>
  )
}

export default Home;