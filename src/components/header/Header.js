import React from 'react';
import { useLocation } from 'react-router-dom';
import './styles.css';
import { Link } from 'react-router-dom';

export default function Header({ styles }) {
  const location = useLocation();
  console.log('🚀 ~ file: Header.js ~ line 7 ~ Header ~ location', location);
  const pages = [
    { name: 'HOME', path: '/' },
    { name: 'NOSOTROS', path: '/about' },
    { name: 'GALERÍA', path: '/gallery' },
    { name: 'AUXUWI', path: '/auxuwi' },
    { name: 'COFFEE TABLE', path: '/coffee-table' },
  ];
  return (
    <nav className='App-nav' style={styles}>
      <Link to={'/'}>
        <img src={require('../../assets/images/logo.png')}></img>
      </Link>
      <ul>
        {pages.map((page, index) => {
          return (
            <li>
              <Link
                style={
                  location.pathname === page.path
                    ? { color: 'white' }
                    : { color: 'black' }
                }
                to={page.path}
                key={index}
              >
                {page.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
