import { Div } from './style';
import { Carousel } from 'react-responsive-carousel';

function CarouselDiv() {

  return (
    <Div>
      <Carousel 
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        >
        <div>
            <img src="./img/clothes-ad.jpg" alt="Roupas" />
            <p className="legend">Roupas</p>
        </div>
        <div>
            <img src="./img/home-appliance-ad.jpg" alt="Ar condicionado" />
            <p className="legend">Móveis domesticos</p>
        </div>
        <div>
            <img src="./img/tires-ad.jpg" alt="Pneu" />
            <p className="legend">Acessórios para veículos</p>
        </div>
      </Carousel>
    </Div>
  )
}

export default CarouselDiv;