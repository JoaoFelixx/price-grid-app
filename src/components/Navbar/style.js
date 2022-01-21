import styled from 'styled-components';

const Nav = styled.nav`
  padding: 0;
  background-color: #FFF159;
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Input = styled.input`
  background-color: #ffffff;
  height: 35px;
  font-size: 16px;
  padding: 6px;
  border: none;
  width: 50%;
`;

const Li = styled.li`
  float: right;
`;

const Image = styled.img`
  float: left;
`;

const Item = styled.a`
  display: block;
  color: #000;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`;

export {
  Image,
  Input,
  List,
  Item,
  Nav,
  Li,
}