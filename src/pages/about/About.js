import React from 'react';
import PrimaryLayout from '../../components/primaryLayout/PrimaryLayout';
import './about.css';

export default function About() {
  return (
    <PrimaryLayout
      headerColor='#19b6e3'
      imageBackground={require('../../assets/images/bg_About.jpg')}
    >
      <div className='cultureContainer'>
        <img
          className='cultureImage'
          src={require('../../assets/images/mision.png')}
        ></img>
        <img
          className='cultureImage'
          src={require('../../assets/images/vision.png')}
        ></img>
        <img
          className='cultureImage'
          src={require('../../assets/images/valores.png')}
        ></img>
      </div>
      <div className='ourHistoryContainer'>
        <img
          className='ourHistoryImage'
          src={require('../../assets/images/ourHistory.png')}
        ></img>
        <div className='ourHistoryTextContainer'>
          <h2>Nuestra</h2>
          <h1>HISTORIA</h1>
          <p>
            Los estudiantes de la materia de gestión en la licenciatura de
            diseño gráfico de la Universidad de Guadalajara crearon para
            trabajar los proyectos de la materia, el estudio Axolotl, bajo el
            cual comenzaron a trabajar cómo proyecto final de la materia, una
            nueva parte del proyecto Auxuwi a cargo del profesor Roberto
            Bernache, para el cual tenía una idea sobre la Multiversidad en la
            que se compartieran temas sobre la cosmovisión de la cultura
            wixárika y la unión de los métodos y temas de diseño europeos con
            los de otras culturas. Es así como nace MUDI (Multiversidad de
            diseño Intercultural). Dentro del evento se podrán encontrar
            ponencias tanto de etnólogos cómo de wixárikas que nos puedan
            acercar su cultura y costumbres, así cómo cursos de arte y artesanía
            y también su venta, procurando de esta manera un dialogo que permita
            dar un espacio a todo tipo de conocimiento para ser transmitido de
            la manera en la que el mismo conocimiento lo requiera.
          </p>
        </div>
      </div>
    </PrimaryLayout>
  );
}
