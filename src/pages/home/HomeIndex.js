import React, { useRef } from 'react';
import Header from '../../components/header/Header';
import PrimaryLayout from '../../components/primaryLayout/PrimaryLayout';
import './HomeIndex.css';
import ImageGallery from 'react-image-gallery';

export default function HomeIndex() {
  const galleryRef = useRef(null);
  const images = [
    {
      original: require('../../assets/images/homeGallery1.png'),
      thumbnail: require('../../assets/images/homeGallery1.png'),
    },
    {
      original: require('../../assets/images/homeGallery2.png'),
      thumbnail: require('../../assets/images/homeGallery2.png'),
    },
    {
      original: require('../../assets/images/homeGallery3.png'),
      thumbnail: require('../../assets/images/homeGallery3.png'),
    },
  ];

  return (
    <PrimaryLayout>
      <div className='introductionContainer'>
        <div className='introduction'>
          <img
            className='introImg'
            src={require('../../assets/images/logo.png')}
          ></img>
          <p className='introMudiText'>
            La Multiversidad de Diseño Intercultural es un espacio de
            aprendizaje en el que podrán convivir enseñanzas de diferentes
            orígenes, permitiendo y promoviendo la preservación de costumbres y
            conociminto de propios de las comunidades participantes.
          </p>
        </div>
        <div className='slider'>
          <ImageGallery
            showFullscreenButton={false}
            showPlayButton={false}
            showThumbnails={false}
            showNav={false}
            showBullets
            ref={galleryRef}
            items={images}
            autoPlay={true}
          />
        </div>
      </div>
      <img
        className='principalImage'
        style={{ width: '100%', objectFit: 'contain' }}
        src={require('../../assets/images/principalIamegHome.png')}
      ></img>
    </PrimaryLayout>
  );
}
