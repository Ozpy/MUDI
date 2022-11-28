import './gallery.css';
import React from 'react';
import PrimaryLayout from '../../components/primaryLayout/PrimaryLayout';

export default function Gallery() {
  const images = [
    {
      photo: require('../../assets/images/edition2018.png'),
      caption: '2018',
    },
    {
      photo: require('../../assets/images/edition2019.png'),
      caption: '2019',
    },
    {
      photo: require('../../assets/images/edition2020.png'),
      caption: '2020',
    },
    {
      photo: require('../../assets/images/edition2021.png'),
      caption: '2021',
    },
  ];
  return (
    <PrimaryLayout
      headerColor='#f9e13f'
      imageBackground={require('../../assets/images/bg_gallery.jpg')}
    >
      <div className='artContainer'>
        <img
          className='artImage'
          src={require('../../assets/images/art.png')}
        ></img>
        <div className='artTextContainer'>
          <h2>Arte</h2>
          <h1>WIXÁRIKA</h1>
          <p>
            El arte wixárika es la manera que ha encontrado esta cultura a
            través de los siglos para interpretar y representar su cosmovisión,
            plasmando en sus obras simbolismos como el ojo de dios, el peyote,
            el maíz y el venado, figuras con fuertes significados de protección
            y ofrenda para ellos.
          </p>
        </div>
      </div>
      <div className='editionsContainer'>
        <h1>EDICIONES PASADAS</h1>
        {images.map((image, index) => {
          return (
            <div className='editionsImageContainer'>
              <img className='editionsImage' src={image.photo}></img>
              <h3>{image.caption}</h3>
            </div>
          );
        })}
      </div>
    </PrimaryLayout>
  );
}
