import styled from 'styled-components';

const Nav = styled.nav`
  padding: 0;
  background-color: #FFF159;
  width: 100%;
`;

const Search = styled.button`
  cursor: pointer;
  height: 35px;
  font-size: 16px;
  padding: 6px;
  width: auto;
  width: 15%;
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

  @media (max-width: 768px) { justify-content: flex-start;}
`;

const Input = styled.input`
  background-color: #ffffff;
  height: 35px;
  font-size: 16px;
  padding: 6px;
  border: none;
  width: 85%;
  @media (max-width: 768px) { font-size: 12px; }
`;

const Image = styled.img`
  float: left;
  @media (max-width: 768px) { display: none; }
`;

export {
  Search,
  Image,
  Input,
  List,
  Nav,
}