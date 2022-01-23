import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: 'carousel'
                       'payments'
                       'payments'
                       'offers';      
  grid-gap: 20px;
`;

export default Grid;