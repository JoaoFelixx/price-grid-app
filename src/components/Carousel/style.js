import styled from 'styled-components';

const Div = styled.div`
  grid-area: carousel;
  width: 100%;
  justify-self: center;

  @media (max-width: 768px) { width: 90%; }
`;


export {
  Div,
}