import {
  Search,
  Image,
  Input,
  Div,
  Nav,
} from './style';
import { BsSearch } from 'react-icons/bs';


function Navbar() {
  return (
    <Nav>
      <Image src="./favicon.png" alt="Mercado Privado ia" />
      <Div>
        <Input placeholder='Buscar produtos, marcas e muito mais' type='search' />
        <Search>
          <BsSearch />  
        </Search>
      </Div>
    </Nav>
  )
}

export default Navbar;