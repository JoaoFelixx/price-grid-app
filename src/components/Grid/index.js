import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas: 'carousel carousel carousel carousel carousel'
                       'payments payments payments payments payments';      
`;

export default Grid;