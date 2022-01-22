import styled from 'styled-components';

const Nav = styled.nav`
  padding: 0;
  background-color: #FFF159;
  width: 100%;
`;

const List = styled.ul`
  list-style-type: none;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) { justify-content: space-evenly;}
`;

const Input = styled.input`
  background-color: #ffffff;
  height: 35px;
  font-size: 16px;
  padding: 6px;
  border: none;
  width: 100%;
  @media (max-width: 768px) { font-size: 12px; }
`;

const Li = styled.li`
  float: right;
`;

const Image = styled.img`
  float: left;
  @media (max-width: 768px) { width: 20%; }
`;

const Item = styled.a`
  display: block;
  color: #000;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;

  @media (max-width: 768px) { display: none; }
`;

export {
  Image,
  Input,
  List,
  Item,
  Nav,
  Li,
}