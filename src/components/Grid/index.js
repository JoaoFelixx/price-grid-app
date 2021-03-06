import styled from 'styled-components';

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-areas: 'navbar'
                       'carousel'
                       'payments'
                       'payments'
                       'offers'
                       'advertisements'
                       'interesting'
                       'categories'
                       'footer';      
  grid-gap: 20px;
`;

export default Grid;