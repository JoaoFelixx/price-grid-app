import styled from 'styled-components';

const Foot = styled.footer`
  grid-area: footer;
  width: 100%;
  height: 120px;
  background-color: #FFF159;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Span = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #000;
`;

export {
  Foot,
  Span,
}