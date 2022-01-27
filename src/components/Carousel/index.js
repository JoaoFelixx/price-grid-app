import { memo, useState } from 'react';
import {
  Image,
  Content,
} from './style';

function Carousel() {
  const [selectedImage, setSelectedImage] = useState('./img/clothes-ad.jpg');

  const ChangeImage = memo(() => {
    const images = ['./img/clothes-ad.jpg', './img/home-appliance-ad.jpg', './img/tires-ad.jpg'];
    // const index = Math.floor(Math.random() * images.length);

    setInterval(() => {
      setSelectedImage(images[0])
    }, 3000)

    return (
      <Image src={selectedImage} />
    )
  });

  return (
    <Content>
      <ChangeImage />
    </Content>
  )
}

export default Carousel;