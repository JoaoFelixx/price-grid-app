import styled from 'styled-components';

const Navbar = styled.nav`
  background-color: #777777;
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
`;

const Li = styled.li`
  float: left;
`;

const Item = styled.a`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`;

export {
  Navbar,
  List,
  Item,
  Li,
}