import {
  Grid,
  Navbar,
  Offers,
  Footer,
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
      <Footer />
    </Grid>
  )
}

export default Home;