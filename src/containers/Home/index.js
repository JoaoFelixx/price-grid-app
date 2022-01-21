import {
  Grid,
  Navbar,
  Carousel,
  GridAreas,
  PaymentMethods,
} from '../../components';

function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <PaymentMethods />
      <Grid>
        <GridAreas>
          <h1>Produtos</h1>
        </GridAreas>
      </Grid>
    </div>
  )
}

export default Home;