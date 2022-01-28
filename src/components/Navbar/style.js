import styled from 'styled-components';

const Nav = styled.nav`
  grid-area: navbar;
  padding: 4px;
  background-color: #FFF159;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) { justify-content: center;}
`;

const Div = styled.div`
  background-color: #000;
  width: 70%;

  @media (max-width: 768px) { width: 94%; }
`;

const Input = styled.input`
  background-color: #ffffff;
  height: 35px;
  font-size: 16px;
  padding: 25px 6px 25px 6px;
  border: none;
  width: 90%;

  @media (max-width: 768px) { 
    font-size: 12px; 
    padding: 0; 
  }
`;

const Search = styled.button`
  background-color: #fff;
  color: #000;
  width: 10%;
  height: 35px;
  font-size: 16px;
  padding: 15px 6px 35px 6px;
  cursor: pointer;
  border: none;

  @media (max-width: 768px) { 
    font-size: 12px; 
    padding: 0;
  }
`; 

const Image = styled.img`
  float: left;
  @media (max-width: 768px) { display: none; }
`;

export {
  Search,
  Image,
  Input,
  Div,
  Nav,
}