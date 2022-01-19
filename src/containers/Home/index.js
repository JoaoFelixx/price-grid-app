import {
  Li,
  Grid,
  Item,
  List,
  Navbar,
  GridAreas,
} from '../../components';


function Home() {
  return (
    <div>
      <Navbar>
        <List>
          <Li> <Item> ola amigus </Item> </Li>
          <Li> <Item> sua izposa </Item> </Li>
          <Li> <Item> é caçada </Item>  </Li>
        </List>
      </Navbar>
      <Grid>
        <GridAreas>
          <h1>Hello</h1>
        </GridAreas>
      </Grid>
    </div>
  )
}

export default Home;