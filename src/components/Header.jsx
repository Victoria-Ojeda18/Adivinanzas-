import React from 'react';
import styles from '../Styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Adivinanzas-Victoria Ojeda</h1>
      <nav>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/about">Cristian Alarcón</a></li>
          <li><a href="/contact">Programación Web</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
