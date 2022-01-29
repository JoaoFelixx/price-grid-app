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
    <div style={{ width: '100%' }} >
      <Grid>
        <Navbar />
        <Carousel />
        <PaymentMethods />
        <Offers />
        <Advertisements />
        <Interesting />
        <PopularCategories />
        <Footer />
      </Grid>
    </div>
  )
}

export default Home;