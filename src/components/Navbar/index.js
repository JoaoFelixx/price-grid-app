import {
  Image,
  Input,
  Nav,
} from './style';

function Navbar() {
  return (
    <Nav>
      <Image src="./favicon.png" alt="Mercado Privado ia" />
      <Input placeholder='Buscar produtos, marcas e muito mais' type='search' />
    </Nav>
  )
}

export default Navbar;