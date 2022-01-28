import styled from 'styled-components';

const Div = styled.div`
  grid-area: carousel;
  width: 100%;
  justify-self: center;
  justify-content: center;

  @media (max-width: 768px) { width: 90%; }
`;

const Image = styled.img`
  width: 100%;
`;

export {
  Div,
  Image,
}