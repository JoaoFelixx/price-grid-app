import {
  Ad,
  Flex,
  Card,
} from './style';

function Advertisements() {
  return (
    <Flex>
      <Card img='./img/movies-series.png'>
        <a href="https://felixflix.netlify.app/"> 
          <Ad>FELIXFLIX</Ad>
        </a>
      </Card>
    </Flex>
  )
}

export default Advertisements;