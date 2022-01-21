import {
  Image,
  Input,
  Item,
  List,
  Nav,
  Li,
} from './style';

function Navbar() {
  return (
    <Nav>
      <List>
        <Image src="./favicon.png" alt="Mercado Privado ia" />
        <Input placeholder='Buscar produtos, marcas e muito mais' type='search' />
        <Li> <Item> PROPAGANDA </Item> </Li>
      </List>
    </Nav>
  )
}

export default Navbar;