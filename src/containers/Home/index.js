import {
  Grid,
  Navbar,
  Offers,
  Footer,
  Carousel,
  Interesting,
  PaymentMethods,
  Advertisements,
  PopularCategories,
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
      <PopularCategories />
    </Grid>
  )
}

export default Home;