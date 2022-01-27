import {
  Ad,
  Flex,
  Card,
} from './style';

function Advertisements() {
  return (
    <Flex>
      <a href="https://felixflix.netlify.app/">
        <Ad>FELIXFLIX</Ad>
      </a>
      <Card img='./img/movies-series.png' />
    </Flex>
  )
}

export default Advertisements;