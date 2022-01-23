import {
  Search,
  Image,
  Input,
  List,
  Nav,
} from './style';
import {
  BsSearch
} from 'react-icons/bs'

function Navbar() {
  return (
    <Nav>
      <List>
        <Image src="./favicon.png" alt="Mercado Privado ia" />
        <Input placeholder='Buscar produtos, marcas e muito mais' type='search' />
        <Search><BsSearch /></Search>
      </List>
    </Nav>
  )
}

export default Navbar;