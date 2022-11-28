import React, { useEffect } from 'react';
import PrimaryLayout from '../../components/primaryLayout/PrimaryLayout';
import './coffeeTablebook.css';

export default function CoffeeTablebook() {
  const [images, setImages] = React.useState([]);

  useEffect(() => {
    for (let i = 1; i <= 28; i++) {
      setImages((images) => [
        ...images,
        require(`../../assets/images/coffe${i}.jpg`),
      ]);
    }
  }, []);

  return (
    <PrimaryLayout>
      <div className='coffeeTablebookContainer'>
        {images.map((image, index) => {
          return <img className='coffeeTablebookImage' src={image} />;
        })}
      </div>
    </PrimaryLayout>
  );
}
