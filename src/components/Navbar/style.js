import styled from 'styled-components';

const Nav = styled.nav`
  grid-area: navbar;
  background-color: #FFF159;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) { justify-content: center;}
`;

const Input = styled.input`
  background-color: #ffffff;
  height: 35px;
  font-size: 16px;
  padding: 25px 6px 25px 6px;
  border: none;
  width: 94%;

  @media (max-width: 768px) { font-size: 12px; }
`;


const Image = styled.img`
  float: left;
  @media (max-width: 768px) { display: none; }
`;

export {
  Image,
  Input,
  Nav,
}