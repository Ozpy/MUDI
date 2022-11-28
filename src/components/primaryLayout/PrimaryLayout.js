import './styles.css';
import React from 'react';
import Header from '../header/Header';
import Footer from '../Footer';

export default function PrimaryLayout({
  children,
  headerColor = '#e09d11',
  imageBackground = require('../../assets/images/bg_Home.jpg'),
}) {
  return (
    <div>
      <Header
        styles={{
          backgroundColor: headerColor,
        }}
      ></Header>
      <div className='container' style={{ backgroundColor: headerColor }}>
        <img className='background' src={imageBackground}></img>
        <div className='content'>{children}</div>
      </div>
      <Footer></Footer>
    </div>
  );
}
