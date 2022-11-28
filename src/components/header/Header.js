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
    { name: 'COFEE TABLE', path: '/cofee-table' },
  ];
  return (
    <nav className='App-nav' style={styles}>
      <img src={require('../../assets/images/logo.png')}></img>
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
